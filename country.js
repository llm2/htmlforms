<script type="text/javascript">
	glow.ready(function() {
						//set up a select element to hold the countries
					var select = document.createElement("select");
					select.id = "submitted[country]";
					select.name = "submitted[country]";
					select.onclick = function(){return selectbox()};
					//this array is temporary so that names can be alphabetized
					var countryAR=[];
									
        glow.net.loadScript(
							//username indicates account for geonames site
							//callback on URL is necessary for the JS to load the data
                "http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&username=gallatin&callback={callback}", 
                {
                        onLoad: function(data) {
                                var results = data.geonames;
								
                                for (var i=0; i < results.length; i++) {
									   countryAR[i] = results[i].countryName;
                                }
								//alphabetize
								countryAR.sort(function(a, b) {
    								return a > b;
								});
								//create option elements for each country
								for(var j=0; j<countryAR.length; j++) {
  									var option = document.createElement('option');
  									option.text = countryAR[j];
  									option.value = countryAR[j];
									if(option.value == "United States"){
										option.selected = true;
									}
  									select.options[select.options.length] = option;
								}
                        }
                }
        );
//replace existing country select or textfield in form
var currentSelect = document.getElementById("submitted[country]");
currentSelect.parentNode.replaceChild(select, currentSelect);

});
</script>
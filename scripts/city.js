var AK = "1tgj5I8qaiFEh5BGgbXHf41CpexY4EoB";
var locUrl = "http://api.map.baidu.com/location/ip?ak=" + AK + "&coor=bd09ll&callback=jsonCallback";


createScript(locUrl);

function createScript(url) {
  var newScript = document.createElement("script");
  newScript.type = "text/javascript";
  newScript.src = url;
  document.body.append(newScript);
}

var LOCATION;
var locCode;
var jsonCallback = function(data) {
  var city = document.querySelector("#city");       
  LOCATION = data.content.address_detail.city.replace("市","");
  locCode = encodeURI(LOCATION);
  city.innerText = LOCATION;
}
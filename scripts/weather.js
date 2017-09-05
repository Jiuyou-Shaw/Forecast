var KEY = "dfzdhlqmyfa92cek";
var UID = "UC47E98595";
var API = "https://api.seniverse.com/v3/weather/now.json";
var LOCATION = "dalian";

var ts = Math.floor((new Date()).getTime() / 1000);

var str = "ts=" + ts + "&uid=" + UID;

var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
sig = encodeURIComponent(sig);
str = str + "&sig=" + sig;

var jsonCallback = function(data) {
  var obj = document.getElementById("content");
  var weather = data.results[0];

  var text = [];
  text.push("Location: " + weather.location.path);
  text.push("Weather: " + weather.now.text);
  text.push("Temperature: " + weather.now.temperature);

  obj.innerText = text.join("\n");
}

var url = API + "?location=" + LOCATION + "&" + str + "&callback=jsonCallback";

var newScript = document.createElement("script");
newScript.type = "text/javascript";
newScript.src = url;
$('body').append(newScript);
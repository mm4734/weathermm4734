var APPID = "51a5c0d10cafa50311671fced07d1c60";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function updateByZip(zip){
  var url = "http://api.openweathermap.org/data/2.5/weather?" + "zip=" + zip + "&APPID=" + APPID;
  sendRequest(url);

}

function sendRequest(url){
  var xmlthttp = new XMLHTTPRequest();
  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var data = JSON.parse(xmlhttp.responseText);
      var weather = {};
      weather.icon = data.weather[0].id;
      weather.humidity = data.main.humidity;
      weather.wind = data.wind.speed;
      weather.direction = data.wind.deg;
      weather.loc = data.name;
      weather.temp = data.main.temp;
      update(weather);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

}

function update(weather){
  wind.innerHTML = weather.wind;
  direction.innerHTML = weather.direction;
  humidity.innerHTML = weather.humidity;
  loc.innerHTML = weather.loc;
  temp.innerHTML = weather.temp;
  icon.scr = "imgs/codes/" + weather.icon + ".png";
}

window.onload = function () {
  temp = document.getElementById("temperature");
  loc = document.getElementById("location");
  icon = document.getElementById("icon");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  direction = document.getElementById("direction");

  updateByZip(87110);

}

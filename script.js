var apiKey = "appid=4e1651d0b63fcaf65777a279c1b2b9c2";
var https = "https://api.openweathermap.org/data/2.5/weather?";
var citys = ["q=Viborg", "q=Manchester", "lat=54.9783&lon=1.6178"];
var units = "units=metric";
var urls = [""+https+""+citys[0]+"&"+units+"&"+apiKey+"", ""+https+""+citys[1]+"&"+units+"&"+apiKey+"", ""+https+""+citys[2]+"&"+units+"&"+apiKey+""];
/*
// Viborg
var promise = fetch(urls[0]);

var promise2 = promise.then(v=>v.text());
var promiseJson = promise.then(v=>v.json());

promise2.then(v=>console.log(v));
promiseJson.then(v=>console.log(v)); */

window.onload = (event) => {
  console.log('page is fully loaded');
}

// Viborg
fetch(urls[0])
  .then(v=>v.json())
    .then(populateRight)

// Newcastle
fetch(urls[2])
  .then(v=>v.json())
    .then(populateCenter)

// Manchester
fetch(urls[1])
  .then(v=>v.json())
    .then(populateLeft)

function populateRight(v){
  var textArea = document.getElementById("t1");
  textArea.textContent = `Temp: ${v.main.temp}c\nDescription: ${v.weather[0].description}\nWindspeed: ${v.wind.speed}m/s\nWindDirection: ${v.wind.deg}deg`;
}
function populateCenter(v){
  var textArea = document.getElementById("t2");
  textArea.textContent = `Temp: ${v.main.temp}c\nDescription: ${v.weather[0].description}\nWindspeed: ${v.wind.speed}m/s\nWindDirection: ${v.wind.deg}deg`;
}
function populateLeft(v){
  var textArea = document.getElementById("t3");
  textArea.textContent = `Temp: ${v.main.temp}c\nDescription: ${v.weather[0].description}\nWindspeed: ${v.wind.speed}m/s\nWindDirection: ${v.wind.deg}deg`;
}
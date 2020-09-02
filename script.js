var apiKey = "appid=4e1651d0b63fcaf65777a279c1b2b9c2";
var https = "https://api.openweathermap.org/data/2.5/weather?";
var citys = ["q=Viborg", "q=Gjern", "lat=1.6178&lon=54.9783"];
var urls = [""+https+""+citys[0]+"&"+apiKey+"", ""+https+"?"+citys[1]+"&"+apiKey+"", ""+https+""+citys[2]+"&"+apiKey+""];
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
    .then(v=>console.log(v))

// Newcastle
fetch(urls[2])
  .then(v=>v.json())
    .then(v=>console.log(v))

function newRightelemnt(data){
  var textArea = document.getElementById("t1")
  textArea.textContent = data;
}
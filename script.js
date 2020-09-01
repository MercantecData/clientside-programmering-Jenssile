var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=4e1651d0b63fcaf65777a279c1b2b9c2";

var promise = fetch(url);

var promise2 = promise.then(v=>v.text());
var promiseJson = promise.then(v=>v.json());

promise2.then(v=>console.log(v));
promiseJson.then(v=>console.log(v));

fetch(url)
  .then(v=>v.text())
    .then(v=>console.log(v));
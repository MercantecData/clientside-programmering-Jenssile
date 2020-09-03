var apiKey = "appid=4e1651d0b63fcaf65777a279c1b2b9c2";
var https = "https://api.openweathermap.org/data/2.5/weather?";
var citys = ["q=Viborg", "q=Manchester", "lat=54.9783&lon=1.6178"];
var otherstuff = "units=metric&lang=en";
var urls = [""+https+""+citys[0]+"&"+otherstuff+"&"+apiKey+"", ""+https+""+citys[1]+"&"+otherstuff+"&"+apiKey+"", ""+https+""+citys[2]+"&"+otherstuff+"&"+apiKey+""];

window.onload = (event) => {
  console.log('page is fully loaded')
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
  var riseFormat = timeWisserdry(v.sys.sunrise)
  var setFormat = timeWisserdry(v.sys.sunset)
  var textArea = document.getElementById("t1")
  textArea.textContent = `Temp: ${v.main.temp}c\nDescription: ${v.weather[0].description}\nWindspeed: ${v.wind.speed}m/s\nWindDirection: ${v.wind.deg}deg\nHumidity: ${v.main.humidity}%\nSunrise: ${riseFormat}\nSunset: ${setFormat}\nTimezone: UTC ${v.timezone}`;
  var elm = document.createElement("img")
  elm.setAttribute("src", `http://openweathermap.org/img/wn/${v.weather[0].icon}@2x.png`)
  document.getElementById("d1").appendChild(elm)
}

function populateCenter(v){
  var riseFormat = timeWisserdry(v.sys.sunrise)
  var setFormat = timeWisserdry(v.sys.sunset)
  var textArea = document.getElementById("t2")
  textArea.textContent = `Temp: ${v.main.temp}c\nDescription: ${v.weather[0].description}\nWindspeed: ${v.wind.speed}m/s\nWindDirection: ${v.wind.deg}deg\nHumidity: ${v.main.humidity}%\nSunrise: ${riseFormat}\nSunset: ${setFormat}\nTimezone: UTC ${v.timezone}`;
  var elm = document.createElement("img")
  elm.setAttribute("src", `http://openweathermap.org/img/wn/${v.weather[0].icon}@2x.png`)
  document.getElementById("d2").appendChild(elm)
}

function populateLeft(v){
  var riseFormat = timeWisserdry(v.sys.sunrise)
  var setFormat = timeWisserdry(v.sys.sunset)
  var textArea = document.getElementById("t3")
  textArea.textContent = `Temp: ${v.main.temp}c\nDescription: ${v.weather[0].description}\nWindspeed: ${v.wind.speed}m/s\nWindDirection: ${v.wind.deg}deg\nHumidity: ${v.main.humidity}%\nSunrise: ${riseFormat}\nSunset: ${setFormat}\nTimezone: UTC ${v.timezone}`;
  var elm = document.createElement("img")
  elm.setAttribute("src", `http://openweathermap.org/img/wn/${v.weather[0].icon}@2x.png`)
  document.getElementById("d3").appendChild(elm)
}

function timeWisserdry(unix){
  var date = new Date(unix * 1000)
  var hour = date.getHours()
  var min = "0" + date.getMinutes()
  var sec = "0" + date.getSeconds()
  var riseFormat = hour + ':' + min.substr(-2) + ':' + sec.substr(-2)
  return riseFormat
}

// $("div.test.test2").clone()
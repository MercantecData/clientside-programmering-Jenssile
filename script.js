var apiKey = "appid=4e1651d0b63fcaf65777a279c1b2b9c2";
var https = "https://api.openweathermap.org/data/2.5/weather?";
var citys = ["q=Viborg", "q=Manchester", "q=Newcastle,GB", "q=London,GB"];
var otherstuff = "units=metric&lang=en";
var urls = [https+""+citys[0]+"&"+otherstuff+"&"+apiKey, https+""+citys[1]+"&"+otherstuff+"&"+apiKey, https+""+citys[2]+"&"+otherstuff+"&"+apiKey, https+""+citys[3]+"&"+otherstuff+"&"+apiKey];

var skills = [{ "name": "HTML", "proficiency": "67%", "color": "#d65709" }, { "name": "CSS", "proficiency": "45%", "color": "#099fd6" }, { "name": "PHP", "proficiency": "39%", "color": "#8b09d6" }, { "name": "JS", "proficiency": "44%", "color": "#d6bb09" }, { "name": "C#", "proficiency": "37%", "color": "#082dcf" }]

window.onload = (event) => {
  console.log('page is fully loaded')
  skills.forEach(element => {
    createnewbar(element)
  });
/*
  // Viborg
  fetch(urls[0])
    .then(v=>v.json())
      .then(v=>createnewcard(v))

  // Newcastle
  fetch(urls[2])
    .then(v=>v.json())
      .then(v=>createnewcard(v))

  // Manchester
  fetch(urls[1])
    .then(v=>v.json())
      .then(v=>createnewcard(v))

  // London
  fetch(urls[3])
    .then(v=>v.json())
      .then(v=>createnewcard(v))
*/
}

function createnewcard(data) {
  var card = $(".card.template").clone().removeClass("template")
  card.find("img").attr("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
  card.find(".name b").text(data.name+", "+data.sys.country)
  card.find(".temp").text(data.main.temp+"ºC")
  card.find(".dec").text(data.weather[0].description)
  card.find(".humidity").text(data.main.humidity+"%")
  card.find(".timezone").text("UTC "+data.timezone)
  card.find(".sunrise").text(timeWisserdry(data.sys.sunrise))
  card.find(".sunset").text(timeWisserdry(data.sys.sunset))
  $(card).insertAfter(".card.template")
}

function createnewbar(element) {
  var bar = $(".bar.template").clone().removeClass("template")
  bar.find(".name").text(element.name)
  bar.find(".proficiency").text(element.proficiency)
  bar.find(".proficiency").css("width", element.proficiency)
  bar.find(".proficiency").css("background-color", element.color)
  $(bar).insertAfter(".bar.template")
}

function timeWisserdry(unix) {
  var date = new Date(unix * 1000)
  var hour = date.getHours()
  var min = "0" + date.getMinutes()
  var sec = "0" + date.getSeconds()
  var riseFormat = hour + ':' + min.substr(-2) + ':' + sec.substr(-2)
  return riseFormat
}

$(document).ready(function(){
  $("#myBtn").click(function(){
    var str = $("#myInput").val()
    var url = https+"q="+str+"&"+otherstuff+"&"+apiKey
    fetch(url)
      .then(v=>v.json())
        .then(v=>createnewcard(v))
  });
});

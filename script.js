var apiKey = "appid=4e1651d0b63fcaf65777a279c1b2b9c2";
var https = "https://api.openweathermap.org/data/2.5/weather?";
var citys = ["q=Viborg", "q=Manchester", "q=Newcastle,GB", "q=London,GB"];
var otherstuff = "units=metric&lang=en";
var urls = [https+""+citys[0]+"&"+otherstuff+"&"+apiKey, https+""+citys[1]+"&"+otherstuff+"&"+apiKey, https+""+citys[2]+"&"+otherstuff+"&"+apiKey, https+""+citys[3]+"&"+otherstuff+"&"+apiKey];
var about = "Hello my name is Jens, im a programmer and student. Aenean interdum sodales ex, eu bibendum justo hendrerit eget. Vivamus venenatis egestas sem vel porttitor. Phasellus pharetra ligula quis vestibulum blandit. Nam ut lectus lacinia, consequat ipsum nec, pretium sem. Nulla nec vulputate arcu, eu scelerisque leo. Nullam erat ante, accumsan eu pharetra in, pulvinar et enim. Donec sed vehicula turpis, quis venenatis magna. Curabitur bibendum dictum tincidunt"
var about2 = "Fusce vitae eros quis enim porttitor scelerisque non sed massa. Maecenas blandit tellus ac massa ultrices, a porttitor mi accumsan. Integer sed lacinia nibh. Morbi elementum imperdiet dui eget ultrices. Phasellus porttitor augue massa, sed hendrerit dolor feugiat sed. Donec vel massa mauris. Ut sit amet turpis consectetur, gravida urna vitae, dictum lectus. Phasellus pharetra, tortor id commodo varius, quam odio faucibus augue, laoreet scelerisque erat neque nec quam. Cras fermentum dolor massa, quis vestibulum ante dignissim non. Aenean aliquet vehicula sem nec aliquam. Curabitur at laoreet purus. Nunc dolor nibh, tincidunt nec leo id, vestibulum maximus augue. Etiam efficitur, nunc sed gravida aliquam, dui lorem vestibulum nisi, quis dignissim magna elit id dolor. Integer finibus vel tellus a dignissim. "

var skills = [{ "name": "HTML", "proficiency": "67%", "color": "#d65709" }, { "name": "CSS", "proficiency": "45%", "color": "#099fd6" }, { "name": "PHP", "proficiency": "39%", "color": "#8b09d6" }, { "name": "JS", "proficiency": "44%", "color": "#d6bb09" }, { "name": "C#", "proficiency": "37%", "color": "#082dcf" }]

window.onload = (event) => {
  console.log('page is fully loaded')
  skills.forEach(element => {
    createnewbar(element)
    $(".bodytext").text(about)
    $(".bodytext2").text(about2)
  });
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

$(document).ready(function(){
  $("#skillbars").click(function(){
    $(".about").addClass("hidden")
    $(".bar").removeClass("hidden")
  });
});

$(document).ready(function(){
  $("#about").click(function(){
    $(".bar").addClass("hidden")
    $(".about").removeClass("hidden")
  });
});
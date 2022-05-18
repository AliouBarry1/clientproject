/* global $ */

console.log("hi");

$("h1").click(function () {
  $("h1").css("color", "blue");
  $("h1").text("Ready to Code");
});

$(".search-button").click(function () {
  let searchTerm = $("input").val();

  // let newUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cedar%20Rapids&APPID=3bb00f30e525b91a1deb9cbd20254379`;
  let newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=3bb00f30e525b91a1deb9cbd20254379&units=imperial`;

  fetch(newUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      $(".one").text("Temperature: ");
      $(".two").text("Max temperature:");
      $(".three").text("Min temperature: ");
      $(".four").text("Wind Speed: ");
       $(".five").text("Wind Degree: ");
      let regTemp = data.main.temp;
      let maxTemp = data.main.temp_max;
      let minTemp = data.main.temp_min;
      let winSpeed = data.wind.speed;
      let winDeg  = data.wind.deg
      $(".one").append(regTemp);
      $(".two").append(maxTemp);
      $(".three").append(minTemp);
      $(".four").append(winSpeed);
       $(".five").append(winDeg);
    
    
      console.log(data);
      console.log(data.main.temp);
      console.log(data.main.temp_max);
      console.log(data.main.temp_min);
      console.log(data.wind.speed);
      console.log(data.wind.deg);
    });
});

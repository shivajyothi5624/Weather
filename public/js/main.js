
const search_city = document.getElementById("search_city");
const d = new Date();
const day = document.getElementById("day")
const time = document.getElementById("time");
const city_country = document.getElementById("city_country");
const temperature = document.getElementById("temperature");
const weathericon = document.querySelector(".weathericon");
const searchbar_input = document.getElementById("searchbar");

// time and day
let dayarr = [ 'monday','tuesday','wednesday','thursday','friday','satirday'];
present_day = dayarr[d.getDay()];
pressent_time = d.getHours()+":"+d.getMinutes();


search_city.addEventListener("click",(event)=>{
  event.preventDefault();
  let city_name = document.querySelector(".city_name").value;
  console.log(city_name);
  let url = "https://api.openweathermap.org/data/2.5/weather?q="+city_name+"&units=metric&appid=1782cc971e8d35b98659939e4089d9b5";
  $.ajax({
    type: "GET",
    url: url,
    data: "data",
    dataType: "json",
    success: function (data) {
      day.innerText = present_day;
      time.innerText = pressent_time;
      let temp = data;
      console.log(data);
      city_country.innerText = data.name+" "+data.sys.country;
      temperature.innerHTML =  `<p id="temperature">${data.main.temp}<sup>o</sup>C</p>`  
      let nature =data.weather[0].main;
      console.log(nature);
      if(nature === "Clouds") 
      {
        // weathericon.innerHTML =  `<i class="fas fa-cloud-showers-heavy"></i>`;
        weathericon.innerHTML =  `<i class="fas fa-cloud fa-1.5x"></i>`;
      }
      else if(nature === "Clear")
      {
        weathericon.innerHTML =  `<i class="fas fa-sun"></i>`;
      }
      else if(nature == "Mist")
      {
        weathericon.innerHTML =  `<i class="fas fa-cloud-rain"></i>`;
      }
      else{
        weathericon.innerHTML =  `<i class="fas fa-cloud fa-1.5x"></i>`;
      }
    },
    error: function (){
      city_country.innerText = "enter a valid city name";
      // city_country.innerText = "city country"
      temperature.innerHTML = `<p id="temperature">deg<sup>o</sup>C</p>`;
      day.innerText = "day";
      time.innerText = "time";
    }
  });
  searchbar_input.value = null;
});

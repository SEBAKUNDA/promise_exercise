const ApiKey = "ab9dd14db76a6e5fc7dd92dda4325bb4";
const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
 const serarchBox = document.querySelector(".searchBox")
 const searchBtn = document.querySelector(".searchBtn")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeatherApp(city) {
   const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`)
   if(response.status == 404){
     document.querySelector(".error").style.display ="block"
     document.querySelector(".weather").style.display ="none"
   }else{
    const data = await response.json()
    console.log(data)
     document.querySelector(".city").innerHTML =data.name;
     document.querySelector(".degree").innerHTML = Math.round(data.main.temp) +"°c";
     document.querySelector(".temp").innerHTML =data.main.humidity +"%";
     document.querySelector(".speed").innerHTML =data.wind.speed +"km/h";
     if(data.weather[0].main =="Clouds"){
            weatherIcon.src ="clouds.png"
     }
     else if(data.weather[0].main =="Clear"){
           weatherIcon.src="clear.png"
     }
     else if(data.weather[0].main =="Snow"){
       weatherIcon.src="snow.png"
   }
   else if(data.weather[0].main =="Rain"){
     weatherIcon.src="rain.png"
   }
   else if(data.weather[0].main =="Drizzle"){
     weatherIcon.src="drizzle.png"
}
else if(data.weather[0].main =="Wind"){
 weatherIcon.src="wind.png"
}
else if(data.weather[0].main =="Mist"){
 weatherIcon.src="mist.png"
}
document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
   }
       
}
searchBtn.addEventListener("click", ()=>{
  checkWeatherApp(serarchBox .value);
})



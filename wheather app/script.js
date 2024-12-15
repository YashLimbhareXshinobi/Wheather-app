const apikey = "b80f7181c6231b3d62dff2d06910838f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".wheather-icon");
async function checkwheather (city){
    const responce = await fetch(apiurl + city + `&appid=${apikey}`);

    if(responce.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    }else{
        var data = await responce.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C" ;
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"; 
        }else  if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"; 
        }else  if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"; 
        }else  if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"; 
        }else  if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"; 
        }
    
        document.querySelector(".wheather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

   
    
}
searchbtn.addEventListener("click", ()=>{
    checkwheather (searchbox.value);
})


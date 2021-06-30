const Api_key = "241051bf13976dd3ddf8b8d9f247255e";

function onGeoOk(p){
    const lat = p.coords.latitude;
    const lon = p.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_key}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data)=> {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText =  `${data.weather[0].main} / ${data.main.temp}`;
        });
}





function onGeoError(){
    alert("Can`t find you, No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
const API_KEY="66d310bae0ac91c6e2b226321e2f1ae2";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}
//https://api.openweathermap.org/data/2.5/weather?lat=37.483782&lon=126.9003409&appid=66d310bae0ac91c6e2b226321e2f1ae2
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
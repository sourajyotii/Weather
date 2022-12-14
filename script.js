const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '903eeb6141mshbea4fa792b2a868p1d8037jsnb8e848166910',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			temp.innerHTML = response.temp;
			feels_like.innerHTML = response.feels_like;
			max_temp.innerHTML = response.max_temp;
			min_temp.innerHTML = response.min_temp;
			humidity.innerHTML = response.humidity;
			cloud_pct.innerHTML = response.cloud_pct;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
			wind_speed.innerHTML = response.wind_speed;
			wind_degrees.innerHTML = response.wind_degrees;
			console.log(response)
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

function otherWeather(n, city) {
	window["otherCity"+n].innerHTML=city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			window["temp"+n].innerHTML = response.temp;
			window["cloud_pct"+n].innerHTML = response.cloud_pct;
			window["humidity"+n].innerHTML = response.humidity;
			window["wind_speed"+n].innerHTML = response.wind_speed;
		})
		.catch(err => console.error(err));
}

getWeather("Kolkata");
otherWeather(0,"Delhi");
otherWeather(1,"Mumbai");
otherWeather(2,"Chennai");
otherWeather(3,"Rajasthan");

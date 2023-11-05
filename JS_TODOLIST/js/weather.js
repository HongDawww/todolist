const API_KEY ="9412b95f5d41e73e7437b49b10498b74";


function onGeoOk(position){
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	// console.log("you live in",lat,lon);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
		fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		});
	}
function onGeoError() {
	alert("XX");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

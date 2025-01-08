const time = document.querySelector(".time");
const date = document.querySelector(".date");
const icon = document.querySelector(".icon");
const temp = document.querySelector(".temp");
const place = document.querySelector(".place");

function getTimeDate() {
	const time_date = new Date();
	const hourFormat = time_date.toLocaleTimeString("es-US", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: true,
	});
	time.innerHTML = hourFormat;

	const dateFormat = time_date.toLocaleDateString();
	date.innerHTML = dateFormat;
}
setInterval(getTimeDate, 1000);
getTimeDate();

function getCoords() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				const lat = position.coords.latitude;
				const lon = position.coords.longitude;
				getWeather(lat, lon);
			},
			function () {
				alert("Ocurrió un error al obtener las coordenadas");
			}
		);
	} else {
		alert("La geolocalización no es soportada por este Buscador");
	}
}

async function getWeather(lat, lon) {
	const url = `https://api.weatherapi.com/v1/forecast.json?key=a4697499ebce4d74b91162838240907&q=${lat},${lon}&days=3&lang=es`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		// console.log("🚀 ~ getWeather ~ data:", typeof data);
		showWeather(data);
	} catch (error) {
		console.error("Error", error);
	}
}

function showWeather(data) {
	icon.src = data.current.condition.icon;
	place.innerHTML = `${data.location.name}, ${data.location.region}`;

	const updateTemp = () => {
		degrees.value === "c"
			? (temp.innerHTML = data.current.temp_c + "\u00B0" + " C")
			: (temp.innerHTML = data.current.temp_f + "\u00B0" + " F");
	};
	updateTemp();
	degrees.addEventListener("change", updateTemp);
}
getCoords();

/* Form functions - get data*/
const bgColor = document.querySelector("#bg-color");
const content = document.querySelector(".content");
const txtColor = document.querySelector("#txt-color");
const span = content.querySelectorAll("span");
const range = document.querySelector("#range");
const degrees = document.querySelector("#degrees");

function updateStyles() {
	content.style["background"] = bgColor.value;
	span[0].style["color"] = txtColor.value;
	span[2].style["color"] = txtColor.value;
	content.style["borderRadius"] = range.value + "rem";
}
bgColor.addEventListener("input", updateStyles);
txtColor.addEventListener("input", updateStyles);
range.addEventListener("change", updateStyles);

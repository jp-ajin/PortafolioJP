function seleccionar(selected) {
	var menus = document.querySelectorAll(".link");

	for (let i = 0; i < menus.length; i++) {
		menus[i].classList.remove("active"); //remove class active
	}

	selected.classList.add("active"); //add class active

	//Responsive menu, hide if item is selected
	var x = document.getElementById("nav");
	x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
	var x = document.getElementById("nav");
	console.log("🚀 ~ responsiveMenu ~ x:", x);
	if (x.className === "") {
		x.className = "responsive";
	} else {
		x.className = "";
	}
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () {
	efectoHabilidades();
};

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
	var skills = document.getElementById("skills");
	var distancia_skills =
		window.innerHeight - skills.getBoundingClientRect().top;
	if (distancia_skills >= 500) {
		document.getElementById("html").classList.add("barra-html");
		document.getElementById("frameworks").classList.add("barra-framworks");
		document.getElementById("js").classList.add("barra-js");
		document.getElementById("react").classList.add("barra-react");
		document.getElementById("git").classList.add("barra-git");
	}
}

//get dinamic year for copyright
document.getElementById("year").textContent = new Date().getFullYear();

//Función para modal de imagnes del portafolio
/* let previewContainer = document.querySelector("#modal"); //nueva variable y llamar al id="#modal"
let previewBox = previewContainer.querySelectorAll(".preview"); //nueva variable y llamar a class=".preview"

document.querySelectorAll(".fila .proyecto").forEach((proyecto) => {
	//seleccionar todos los class=".fila y class="proyecto"
	proyecto.onclick = () => {
		previewContainer.style.display = "flex";
		let name = proyecto.getAttribute("data-name"); // busca por data-name
		previewBox.forEach((preview) => {
			let target = preview.getAttribute("data-target"); // busca por data-name
			if (name == target) {
				preview.classList.add("active"); //agrega estado active
			}
		});
	};
}); */

/* previewBox.forEach((close) => {
	close.querySelector(".btn-cerrar-modal").onclick = () => {
		close.classList.remove("active"); //elimina el estado active
		previewContainer.style.display = "none";
	};
}); */

/*window.addEventListener('click',function(e){
    console.log(e.target);
    if(e.target == flex){
    modal.style.display = 'none';
    }
})*/

/*document.getElementById("preview").addEventListener("click", (e) => {
        console.log(e.target.id)
        if (e.target.id === "preview" || e.target.id === "btn-cerrar-modal") {
          previewContainer.innerHTML = ""
        }
      })*/

//Animation slide sections
$(document).ready(function () {
	var ir_a = $(".link");
	ir_a.click(function (e) {
		e.preventDefault();
		$("body, html").animate(
			{
				scrollTop: $(this.hash).offset().top,
			},
			1000
		);
	});
});

//add class active and remove class menu when is scrolling
window.addEventListener("scroll", () => {
	const sections = document.querySelectorAll("section[id]");
	const navLinks = document.querySelectorAll("nav ul li a");

	let current = "";

	sections.forEach((section) => {
		const sectionTop = section.getBoundingClientRect().top;
		const sectionHeight = section.offsetHeight;
		console.log(section.getBoundingClientRect().top);
		if (
			sectionTop <= window.innerHeight / 2 &&
			sectionTop + sectionHeight > window.innerHeight / 2
		) {
			current = section.getAttribute("id");
		}
	});
	console.log("current", current);

	navLinks.forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href").includes(current)) {
			link.classList.add("active");
		}
	});
});

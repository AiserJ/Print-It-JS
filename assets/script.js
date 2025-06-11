const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");


arrowLeft.addEventListener("click", () => {
	console.log("Flèche gauche cliquée");
	// TODO: afficher le slide précédente (DROITE).
});

arrowRight.addEventListener("click", () => {
    console.log("Flèche droite cliquée");
	// TODO: afficher le slide suivante (Celle à Gauche).
});

const bannerText = document.querySelector("#banner p");
const bannerImg = document.querySelector(".banner-img");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;


slides.forEach((_, index) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (index === 0) {
		dot.classList.add("dot_selected");
	}
	dotsContainer.appendChild(dot);
});

function updateSlide(index) {
	const slide = slides[index];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	bannerText.innerHTML = slide.tagLine;

		const allDots = document.querySelectorAll(".dot");
	allDots.forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === index);
	});
}

arrowLeft.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateSlide(currentIndex);
});


arrowRight.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlide(currentIndex);
});
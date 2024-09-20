
// filters slide button add-----------------------------------
let filtersBox = document.querySelector("#filters");
let buttonSlide = document.querySelectorAll("#slideButton");

buttonSlide.forEach((button) => {
	button.addEventListener("click", () => {
		const direction = button.className == "left_img_button" ? -1 : 1;
		const scrollImg = direction * (filtersBox.clientWidth - 100);
		filtersBox.scrollBy({ left: scrollImg, behavior: "smooth" });
	});
});

filtersBox.addEventListener("scroll", () => {
		buttonSlide[0].style.display = filtersBox.scrollLeft <= 0 ? "none" : "flex"
		buttonSlide[1].style.display = filtersBox.scrollLeft >= (filtersBox.scrollWidth-filtersBox.clientWidth-2) ? "none" : "flex"
		console.log(filtersBox.scrollWidth)
		console.log(filtersBox.scrollWidth-filtersBox.clientWidth)
})

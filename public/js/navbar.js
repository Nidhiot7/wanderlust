// Click search input box then add box-shadow---------
const searchInputBox = document.querySelectorAll("#mySearchInput");
const box = document.querySelectorAll(".nav-search");
for (const searchInput of searchInputBox) {
	searchInput.addEventListener("input", function () {
		for (const searchBox of box) {
			searchBox.style.boxShadow =
				"inset 0px 6px 5px rgba(0, 0, 0, 0.700)";
			setTimeout(() => {
				searchBox.style.boxShadow =
					"inset 0px 2px 3px rgba(0, 0, 0, 0.800)";
			}, 100);
		}
	});
}


// User button click then display box like profile, login, signUp..... 

const imgBar = document.querySelector("#png-img-bar");
const mainSection = document.querySelector(".main_section");
const userButton = document.querySelector(".nav-user");
userButton.addEventListener("click", () => {
    if (mainSection.style.display == "none") {
        mainSection.style.display = "flex";
        // imgBar.style.display = "none";
    } else {
        mainSection.style.display = "none";
        // imgBar.style.display = "inline";
    }
});
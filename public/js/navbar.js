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
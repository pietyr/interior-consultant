const hamburger = document.querySelector("span.material-symbols-outlined");
const list = document.querySelector("ul");

hamburger.addEventListener("click", () => {
	if (hamburger.innerHTML == " menu ") {
		hamburger.textContent = " close ";
		list.style.visibility = "visible";
	} else if (hamburger.textContent == " close ") {
		hamburger.textContent = " menu ";
		list.style.visibility = "hidden";
	}
});

document.querySelector("li").addEventListener("click", () => {
	hamburger.textContent = " menu ";
	list.style.visibility = "hidden";
});

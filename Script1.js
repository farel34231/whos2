// Toggle & Responsive Navigation
const navSlide = () => {
    const buger = document.querySelector(".buger");
    const navList = document.querySelector("nav")

    buger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        buger.classList.toggle("toggle-buger");
    });
};

navSlide()

// Clear from before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

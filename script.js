const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const languageToggle = document.getElementById("languageToggle");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const isBengali = languageToggle.textContent.trim() === "বাংলা";

    document.querySelectorAll("[data-en][data-bn]").forEach((element) => {
      element.textContent = isBengali
        ? element.getAttribute("data-bn")
        : element.getAttribute("data-en");
    });

    document.documentElement.lang = isBengali ? "bn" : "en";
    languageToggle.textContent = isBengali ? "English" : "বাংলা";
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(" nav .nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

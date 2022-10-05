const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".img-container img");
const original = document.querySelector(".full-img");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    //dynamic change test and image

    const originalSrc = preview.getAttribute("data-original");
    // console.log(originalSrc);
    original.src = `../img/${originalSrc}`;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});

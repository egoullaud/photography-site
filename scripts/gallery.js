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

// document.querySelector(".modal-next");

document.querySelector(".close-modal").addEventListener("click", (e) => {
  modal.classList.remove("open");
  original.classList.remove("open");
});

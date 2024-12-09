function rotateSphere() {
  const sphere = document.getElementById("sphere");
  if (sphere) {
    const scrollPosition = window.scrollY;
    const rotation = scrollPosition % 360;
    sphere.style.transform = `rotate(${rotation}deg)`;
  }
}

document.addEventListener("scroll", () => {
  requestAnimationFrame(rotateSphere);
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = {};

    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    console.log(formValues);
  });

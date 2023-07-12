const box = document.querySelector(".box");

box.addEventListener("click", (e) => {
  box.style.backgroundColor === "red"
    ? (box.style.backgroundColor = "yellow")
    : (box.style.backgroundColor = "red");
  box.style.width === "300px"
    ? (box.style.width = "600px")
    : (box.style.width = "300px");
  box.style.height === "300px"
    ? (box.style.height = "600px")
    : (box.style.height = "300px");
});

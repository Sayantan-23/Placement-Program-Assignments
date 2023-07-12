const container = document.querySelector(".wrapper-container")
const form = document.querySelector(".form")
const button = document.querySelector(".button")
const inputBox = document.querySelector(".input-box")
const showInput = document.querySelector(".result")

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const value = e.target.value
// })

const getData = (event) => {
  event.preventDefault()

  if (!inputBox.value) {
    alert("Please Write Something")
    return
  }
  
  showInput.innerText = inputBox.value
}
const heading = document.querySelector(".heading")
const description = document.querySelector(".text")
const empty = document.querySelectorAll(".empty")

const onPageLoad = async () => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/2`)

  const data = await res.json()

  heading.innerText = data.title
  heading.style.backgroundColor = "transparent"

  description.innerText = data.body
  description.style.backgroundColor = "transparent"

  empty.forEach(e => {
    e.classList.remove("empty")
  })
}

setTimeout(onPageLoad, 1200)

// onPageLoad()
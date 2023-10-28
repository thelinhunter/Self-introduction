const nav = document.querySelector(".nav")
window.addEventListener("scroll", changeNav)

function changeNav() {
    if (window.scrollY > nav.offsetHeight + 300) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }
}

const slides = document.querySelectorAll('.slide')
const left = document.getElementById('left')
const right = document.getElementById('right')

let currentSlide = 0

right.addEventListener('click', () => {
  currentSlide++
  if (currentSlide > slides.length - 1) {
    currentSlide = 0
  }
  setcurrentSlide()
})

left.addEventListener('click', () => {
  currentSlide--
  if (currentSlide < 0) {
    currentSlide = slides.length - 1
  }
  setcurrentSlide()
})

function setcurrentSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))
  slides[currentSlide].classList.add('active')
}
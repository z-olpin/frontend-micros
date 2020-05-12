const cursor = document.querySelector('.cursor')

const moveCursor = e => {
  cursor.style.top = e.clientY + "px"
  cursor.style.left = e.clientX + "px"
}

window.addEventListener('mousemove', moveCursor)


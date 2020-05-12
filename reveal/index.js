const cover = document.querySelector('.cover')
const span = document.querySelector('span')

const reveal = e => cover.style.background = `radial-gradient(circle at ${e.layerX}px ${e.layerY}px, rgba(0,0,0,0) 0, rgba(0,0,0,0) 15%, rgba(0,0,0,1) 15%)`
const leave = () => cover.style.background = "black"

cover.addEventListener('mousemove', reveal)
cover.addEventListener('mouseout', leave)
window.addEventListener('load', () => cover.style.background = "black")

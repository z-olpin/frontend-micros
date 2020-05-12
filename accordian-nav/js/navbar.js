const sections = [...document.querySelectorAll("section")]

const slide = (target, i) => {
  // iterates through the sections, and changes the `top` property, either "closing" or "opening"
  // it by pushing it and preceeding/following sections to top or bottom
  sections.forEach((s) => {
    s.style.transitionProperty = "top"
    s.style.transitionDuration = "1000ms"
  })
  if (target.classList.contains("closed")) {
    sections.slice(0, i + 1).forEach((s, j) => {
      s.style.top = `${j * 4}rem`
      s.classList.add("closed")
    })
    target.style.top = `${i * 4}rem`
    target.classList.remove("closed")
    sections.slice(i + 1, 3).forEach((s, j) => {
      sections[2 - j].style.top = `calc(100vh - ${4 * (j + 1)}rem)`
      s.classList.add("closed")
    })
  } else {
    if (i == 1) {
      target.classList.toggle("closed")
      target.style.top = "calc(100vh - 8rem)"
    }
  }
  // Apply scroll fade-out filter when the center section open.
  sections[1].classList.contains("closed")
    ? document.querySelector("#scroller").classList.remove("scroll-mask")
    : document.querySelector("#scroller").classList.add("scroll-mask")

  // Clear transition after "slide" complete
  window.setTimeout(() => {
    sections.forEach((s) => {
      s.style.removeProperty("transition-duration")
      s.style.removeProperty("transition-property")
    })
  }, 1000)
}

sections.forEach((s, i) =>
  s.firstElementChild.addEventListener("click", () => slide(s, i))
)

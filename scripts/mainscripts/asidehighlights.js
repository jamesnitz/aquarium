const addMouseOverEventListenersAside = () => {
  const tipCards = document.querySelectorAll(".tip")

  for (const card of tipCards) {
      card.addEventListener(
          "mouseover",
          (theMouseOverEvent) => {
              card.classList.add("tipHighlight")
          }
      )


      card.addEventListener("mouseout", theMouseOutEvent => {
          card.classList.remove("tipHighlight")
      })
  }
}

export default addMouseOverEventListenersAside
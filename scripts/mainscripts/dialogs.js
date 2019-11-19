const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogElement = theEvent.target.parentNode
              dialogElement.close()
          }
      )
  }
  // CAN'T TOUCH THIS - END


  // You will be writing code below this line

  // Show bubbles' details when the button is clicked}
  document.querySelector("#button--bubbles").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--bubbles")
          theDialog.showModal()
      }
  )
  // Show Bruce's details when the button is clicked
  document.querySelector("#button--bruce").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--bruce")
          theDialog.showModal()
      }
  )
  // Show Marlins' details when the button is clicked
  document.querySelector("#button--marlin").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--marlin")
          theDialog.showModal()
      }
  )
  // Show Coels' details when the button is clicked
  document.querySelector("#button--coel").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--coel")
          theDialog.showModal()
      }
  )
  // Show Teefs' details when the button is clicked
  document.querySelector("#button--teef").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--teef")
          theDialog.showModal()
      }
  )
  // Show Sturgeon' details when the button is clicked
  document.querySelector("#button--sturg").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--sturg")
          theDialog.showModal()
      }
  )
  
     
}

export default initializeDetailButtonEvents


const initializeDetailButtonEventsLocation = () => {
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
  document.querySelector("#button--cancun").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--cancun")
          theDialog.showModal()
      }
  )
  // Show bubbles' details when the button is clicked}
  document.querySelector("#button--southAfrica").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--southAfrica")
          theDialog.showModal()
      }
  )
  // Show bubbles' details when the button is clicked}
  document.querySelector("#button--atlantic").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--atlantic")
          theDialog.showModal()
      }
  )
  // Show bubbles' details when the button is clicked}
  document.querySelector("#button--pacific").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--pacific")
          theDialog.showModal()
      }
  )
  // Show bubbles' details when the button is clicked}
  document.querySelector("#button--river").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--river")
          theDialog.showModal()
      }
  )

    }

    export default initializeDetailButtonEventsLocation
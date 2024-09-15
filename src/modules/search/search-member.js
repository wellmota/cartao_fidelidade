import { showClient } from "../../services/show.js"

document.addEventListener("DOMContentLoaded", () => {
  const inputContainer = document.querySelector(".input-container")
  const searchInput = document.querySelector("#search input")
  const searchButton = document.querySelector("#search-button")
  const errorMessage = document.createElement("span") // error message span

  inputContainer.appendChild(errorMessage) // add message to input in case of error

  // Add functionality to search by pressing Enter
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      searchClient()
    }
  })

  // add  functionality to search by clicking the button
  searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    searchClient()
  })

  // search for client function
  async function searchClient() {
    let clientId = searchInput.value.trim() // Pega o valor do input sem espaços extras

    // clear error message
    errorMessage.textContent = ""

    // empty field validation
    if (!clientId) {
      errorMessage.textContent = "O campo não pode ser vazio."
      return
    }

    // validate only numbers in the input
    clientId = clientId.replace(/-/g, "") // remove "-" from the input"
    if (!/^\d+$/.test(clientId)) {
      errorMessage.textContent = "Por favor, insira apenas números."
      return
    }

    // Mark to format  XXX-XXX-XXX-XXX
    clientId = clientId.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, "$1-$2-$3-$4")

    // call showClient function formating error message
    try {
      await showClient({ id: clientId })
    } catch (error) {
      // Exibir a mensagem de erro se o cliente não for encontrado
      errorMessage.textContent =
        "Cliente não encontrado. Por favor, verifique o ID."
    }
  }

  // mask to help user
  searchInput.addEventListener("input", (event) => {
    let value = searchInput.value.replace(/[^0-9]/g, "") // remove all non numeric characters
    if (value.length > 12) {
      value = value.slice(0, 12) // limit to 12 characters
    }

    // apply mask to format XXX-XXX-XXX-XXX
    searchInput.value = value.replace(
      /(\d{3})(\d{0,3})(\d{0,3})(\d{0,3})/,
      (match, p1, p2, p3, p4) => [p1, p2, p3, p4].filter(Boolean).join("-")
    )
  })

  // load first client from api by default
  showClient()
})

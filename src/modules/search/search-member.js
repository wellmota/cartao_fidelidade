import { showClient } from "../../services/show.js"

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#search input")
  const searchButton = document.querySelector("#search-button") 

  // Add event to press enter and trigger the search
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      searchClient()
    }
  })

  // Add click to button
  searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    searchClient()
  })

  // Search client function
  function searchClient() {
    const clientId = searchInput.value.trim() // get input value and remove whitespace
    if (clientId) {
      showClient({ id: clientId }) // call client with the ID
    } else {
      alert("Por favor, insira um ID de cliente válido.")
    }
  }

  // Load first client from api as default
  showClient() 
})

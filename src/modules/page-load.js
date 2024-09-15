import { showClient } from "../services/show.js"


document.addEventListener("DOMContentLoaded", () => {
  // Call the showClient function, passing an ID or leaving empty for the default client
  showClient() // Default to the first client if no ID is passed
})

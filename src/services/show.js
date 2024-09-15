// show.js
import { fetchClient } from "../services/clients-fetch.js"

export async function showClient({ id } = {}) {
  const userProfilePicture = document.querySelector(".profile-picture img")
  const userInfoName = document.querySelector(".user-info h2")
  const userClientSince = document.querySelector(".user-info span")
  const appointmentHistoryList = document.querySelector(".user-history ul")
  const loyaltyCardId = document.querySelector(".pill")
  const loyaltyCutsRemaining = document.querySelector(".progress p span")
  const loyaltyProgressBar = document.querySelector(".progress-bar")
  const totalCutsText = document.querySelector(".progress-text")

  try {
    // Fetch client data (if no id is passed, it will fetch the first client by default)
    const client = await fetchClient({ id })

    if (!client) {
      throw new Error("Client not found") // Lança um erro se o cliente não for encontrado
    }

    // Update profile picture and basic info
    userProfilePicture.src = client.profilePictureUrl
    userInfoName.textContent = client.name
    userClientSince.textContent = `Cliente desde ${client.clientSince}`

    // Update loyalty card info
    loyaltyCardId.textContent = `ID: ${client.id}`
    loyaltyCutsRemaining.textContent = client.loyaltyCard.cutsRemaining

    // Update the progress bar and total cuts text
    const progressPercentage =
      (client.loyaltyCard.totalCuts / client.loyaltyCard.cutsNeeded) * 100
    loyaltyProgressBar.style.width = `${progressPercentage}%`
    totalCutsText.textContent = `${client.loyaltyCard.totalCuts} de ${client.loyaltyCard.cutsNeeded}`

    // Clear previous appointment history
    appointmentHistoryList.innerHTML = ""

    // Render appointment history
    client.appointmentHistory.forEach((appointment) => {
      const listItem = document.createElement("li")
      listItem.classList.add("flex")
      listItem.innerHTML = `
        <div class="subtitle-sm flex">
          ${appointment.date} <span class="text-xs">${appointment.time}</span>
        </div>
        <div class="filed-icon">
          <img src="./src/assets/check-washed.svg" class="filed-icon" alt="check">
        </div>
      `
      appointmentHistoryList.appendChild(listItem)
    })
  } catch (error) {
    console.error("Error loading client profile:", error)
    throw error // Retorna o erro para ser capturado na interface
  }
}

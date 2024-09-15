import { fetchClient } from "../services/clients-fetch.js"

// Exported async function to fetch and render the client data
export async function showClient({ id } = {}) {
  const userProfilePicture = document.querySelector(".profile-picture img")
  const userInfoName = document.querySelector(".user-info h2")
  const userClientSince = document.querySelector(".user-info span")
  const appointmentHistoryList = document.querySelector(".user-history ul")
  const loyaltyCardId = document.querySelector(".pill")
  const loyaltyCutsRemaining = document.querySelector(".progress p span")
  const loyaltyProgressBar = document.querySelector(".progress-bar")
  const totalCutsText = document.querySelector(".progress-text")
  const stampsContainer = document.querySelector(".stamps") // Contêiner de stamps

  // Elementos da modal
  const congratsModal = document.getElementById("congrats-modal")
  const modalOkButton = document.getElementById("modal-ok-button")
  const clientNameModal = document.getElementById("client-name-modal")

  try {
    // Fetch client data (if no id is passed, it will fetch the first client by default)
    const client = await fetchClient({ id })

    if (!client) {
      throw new Error("Client not found")
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

    // Update stamps (loyalty program)
    stampsContainer.innerHTML = "" // Limpa os stamps anteriores
    const totalCuts = client.loyaltyCard.totalCuts
    const cutsNeeded = client.loyaltyCard.cutsNeeded

    for (let i = 0; i < cutsNeeded; i++) {
      const stamp = document.createElement("div")
      stamp.classList.add("pin")

      if (i < totalCuts) {
        // Stamps ativos (verdes)
        stamp.innerHTML = `<img src="./src/assets/PinCheck.png" alt="PinCheck">`
      } else if (i === cutsNeeded - 1) {
        // Último stamp como o ícone de presente (quando os cortes forem completados)
        stamp.innerHTML = `<img src="./src/assets/gift-icon-disabled.svg" alt="Gift">`
      } else {
        // Stamps inativos (default)
        stamp.innerHTML = ""
      }

      stampsContainer.appendChild(stamp)
    }

    // Verificar se o cliente atingiu os 10 cortes
    if (totalCuts >= 10) {
      // Exibir a modal de parabéns
      clientNameModal.textContent = client.name // Definir o nome do cliente na modal
      congratsModal.classList.remove("hidden") // Mostrar a modal

      // Fechar a modal ao clicar no botão OK
      modalOkButton.addEventListener("click", () => {
        congratsModal.classList.add("hidden") // Esconder a modal
      })
    }
  } catch (error) {
    console.error("Error loading client profile:", error)
    throw error
  }
}

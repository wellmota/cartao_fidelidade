import { apiConfig } from "./api-config"

export async function fetchClient({ id } = {}) {
  try {
    // Fetch all clients from the API
    const response = await fetch(`${apiConfig.baseURL}/clients`)
    const data = await response.json()

    // Find client by ID if provided, otherwise use the first client
    const client = id ? data.find((client) => client.id === id) : data[0]

    // If no client is found, handle it
    if (!client) {
      throw new Error("Cliente não foi encontrado")
    }

    console.log(client)
    return client
  } catch (error) {
    console.log("Error:", error)
    console.log("Não foi possível buscar membros no momento")
  }
}

// Example usage
fetchClient({ id: "124-537-835-230" }) // Fetch a specific client by ID
fetchClient() // Fetch the first client

document.addEventListener("DOMContentLoaded", fetchData)

async function fetchData() {
    try {
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json()
        const user = data.results[0]
        showData(user)
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}

function showData(user) {
    const content = document.getElementById("content")

    const card = document.createElement("div")
    card.classList.add("card")

    const img = document.createElement("img")
    img.src = user.picture.large

    const name = document.createElement("h2")
    name.textContent = `${user.name.first} ${user.name.last}`

    const email = document.createElement("p")
    email.textContent = user.email

    const location = document.createElement("p")
    location.textContent = `${user.location.city}, ${user.location.country}`

    card.appendChild(img)
    card.appendChild(name)
    card.appendChild(email)
    card.appendChild(location)
    content.appendChild(card)
}

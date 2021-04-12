const API_URL = "https://randomfox.ca/floof/";
const img = document.querySelector(`img`)
const button = document.querySelector(`button`)

const updateFox = () => {
  fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const foxes = data.image
    img.src = foxes
    console.log(foxes)
  })
}

button.addEventListener(`click`, updateFox)
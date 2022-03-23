const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const textDisplayElement = document.getElementById('textDisplay')
const textInputElement = document.getElementById('textUserInput')
const timerElement = document.getElementById('timer')

// Fetches the json
fetch("./words.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
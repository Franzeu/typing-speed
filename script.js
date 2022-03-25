const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const textDisplayElement = document.getElementById('textDisplay')
const textInputElement = document.getElementById('textUserInput')
const timerElement = document.getElementById('timer')

// Fetches the json
fetch("./words.json")
.then(response => {
   return response.json();
})
// Prints out the data that was fetched from the json file
.then(data => console.log(data));


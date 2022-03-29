const textDisplayElement = document.getElementById('textDisplay')
const textInputElement = document.getElementById('textUserInput')
const timerElement = document.getElementById('timer')


// Fetches the json
fetch("./text/words.json")
.then(response => {
   return response.json();
})
// Prints out the data that was fetched from the json file
.then(data => console.log(data.english));


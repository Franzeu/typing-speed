const textDisplayElement = document.getElementById('textDisplay')
const textInputElement = document.getElementById('textUserInput')
const timerElement = document.getElementById('timer')


// Fetches the json
function getRandomWords() {
   return fetch("./text/words.json")
      .then(response => response.json())
      .then(data => data.english)
}

async function renderNewQuote() {
   const words = await getRandomWords()
   textDisplayElement.innerHTML = words
   
   startTimer()
}

var startTime = 60;
function startTimer() {
   var startTimer = setInterval(function() {
      if(startTime <= 0){
         console.log("Time is up!");
      }
   
      timerElement.innerText = startTime;
      startTime -= 1;
   
   },1000)
}



renderNewQuote()

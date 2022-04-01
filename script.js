const textDisplayElement = document.getElementById('textDisplay')
const textInputElement = document.getElementById('textUserInput')
const timerElement = document.getElementById('timer')

function shuffle(array) {
   let currentIndex = array.length,  randomIndex;
 
   // While there remain elements to shuffle...
   while (currentIndex != 0) {
 
     // Pick a remaining element...
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex--;
 
     // And swap it with the current element.
     [array[currentIndex], array[randomIndex]] = [
       array[randomIndex], array[currentIndex]];
   }
 
   return array;
 }

// Fetches the words.json file
function getText() {
   return fetch("./text/words.json")
      .then(response => response.json())
      .then(data => data.english)
}

async function renderText() {
   const words = await getText()
   const text = shuffle(words).toString().replace(/,/g, " ")
   textDisplayElement.innerHTML = ''
   text.split('').forEach(character => {
      const characterSpan = document.createElement('span')
      characterSpan.innerText = character
      textDisplayElement.appendChild(characterSpan)
    })
   
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



renderText()

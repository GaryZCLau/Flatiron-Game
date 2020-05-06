
    
let playerBox = document.querySelector('#player-info')


// select area to replace
let mainDiv = document.querySelector('#main')

// select button for event listener
let startButton = document.querySelector('#start-game')

// replacement screen
let startSchool = document.querySelector('#gameplay').innerHTML;

let skillsIcon = document.querySelector('#skills-icon')
let skillsWord = document.querySelector('#skills-word');
let toggleMenu = document.querySelector('#action-toggle-menu')


// supply this function to play click sound
function playSound(soundfile) {
    document.getElementById("dummy").innerHTML= `<embed src="${soundfile}" hidden="true" autostart="true"
    loop="false">`
    }

    // toggle skills menu when 
skillsIcon.addEventListener('click', function() {
    playSound('sounds/click.wav');
    toggleMenu.setAttribute('style', 'visibility: visible');
})

skillsIcon.addEventListener('click', function() {
    playSound('sounds/click.wav');
    toggleMenu.setAttribute('style', 'visibility: visible');
})

let closeSkills = document.querySelector('#close-window')

closeSkills.addEventListener('click', function(){
    playSound('sounds/click.wav');
    toggleMenu.setAttribute('style', 'visibility: hidden');
} )





// when button is clicked
startButton.addEventListener('click', function() {
    // replace it with gameplay inner html
        document.body.setAttribute("style", "background-image: url('/users/gabriellenoel/mod3-frontend/backgrounds/flatiron2.png')")
        mainDiv.innerHTML = startSchool;
        playerBox.setAttribute("style", "visibility: visible");
        
        let eventString = document.querySelector('#event')
        let npc = document.querySelector('#other-name')

    // get data from backend - seed data
    fetch('http://localhost:3000/events/npc')
    .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        

        })





        let playerName = document.querySelector('#player-name')
        let name = "Fetch Name Here" // set name to fetch data
        playerName.innerText = name 

    });

    
    
    
    
    
    // function updateDisplay(message){ //fuction to add new text to textbox
    //     let message = {
    //         name: 
    //     }


    //     let otherName = document.querySelector('#other-name') // get name p class


        
        
        
    //     var msg = message;
    //     var txtBox = document.getElementById("storyText"); //set txtBox to contents of textbox
    //     txtBox.value = msg + "\n\n" + txtBox.value; //append new message to textbox
    // }

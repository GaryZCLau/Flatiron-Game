
    
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
        document.body.setAttribute("style", "background-image: url('backgrounds/flatiron2.png')")
        mainDiv.innerHTML = startSchool;
        playerBox.setAttribute("style", "visibility: visible");
        
        let eventString = document.querySelector('#event')
        let npc = document.querySelector('#other-name')


    });
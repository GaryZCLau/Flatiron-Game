
    
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
    // replace start with gameplay inner html
        document.body.setAttribute("style", "background-image: url('backgrounds/flatiron2.png')")
        mainDiv.innerHTML = startSchool;
        playerBox.setAttribute("style", "visibility: visible");
        
    // identify gameplay inner html

        // player
        let playerName = document.querySelector("#player-name")
        let playerImage = document.querySelector("#player-img")
        // attributes

        // skills
        let skillsList = document.querySelector("#list-them")
        // items

        // npc
        let npcName = document.querySelector('#other-name')
        let npcImage = document.querySelector('#other-img')
        let npcDesc = document.querySelector("#desc")
        // event w/choices
        let eventString = document.querySelector('#event-string')
        let choicesUl = document.querySelector("ul.choices-ul")
        let newChoiceLi = document.createElement("li")

        // fetch player + skill
        getPlayersObj()
            .then((playerObj) => {
                playerName.innerText = playerObj[0].name
                playerImage.src = `characters/${playerObj[0].image}`
                // skills
                // playerObj[0].skills
                //     let td = document.createElement("td")
                //     let tr = document.createElement("tr")
                //     tr.innerText = playerObj[0].skills[0].name
                //     td.append(tr)
                //     skillsList.append(td)

                // items?


            })

        // fetch event/npc/choice
        getEventsObj()
            .then((eventObj) => {
                // event
                eventString.innerText = eventObj[0].content
                // npc
                npcName.innerText = eventObj[0].npc.name
                npcImage.src = `characters/${eventObj[0].npc.image}`
                npcDesc.innerText = eventObj[0].npc.description
                // choice
                choicesUl.innerHTML = ""
                eventObj[0].choices.forEach((choice) => {
                    newChoiceLi.innerText = choice.option
                    choicesUl.append(newChoiceLi)
                    // add clickevent listener for ChoiceLi
                })
            })
        // 


    });
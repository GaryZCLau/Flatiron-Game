
    
// START QUERY SELECTORS

// select div displaying current gamestate
let mainDiv = document.querySelector('#main')

    // welcome screen query selectors

        // select start button
        let startButton = document.querySelector('#start-game')
    
    // end welcome screen query selectors


    // main screen query selectors

    // select hidden div containing game interface
    let startSchool = document.querySelector('#gameplay').innerHTML;

    // player action menu query selectors
    let playerBox = document.querySelector('#player-info')

        // select specific action in player action menu

            //skills icon
            let skillsIcon = document.querySelector('#skills-icon')
            //the word skills
            let skillsWord = document.querySelector('#skills-word');

            // bag icon
            let bagIcon = document.querySelector('#bag-icon')
            // the word bag
            let bagWord = document.querySelector('#bag-word')

            // attributes icon
            let attIcon = document.querySelector('#attr-icon')
            // the word attributes
            let attWord = document.querySelector('#att-word')

        // end specific action menu selectors

    // end player action menu query selectors

    // action toggle menu query selectors
    let toggleMenu = document.querySelector('#action-toggle-menu')

        // select specific items on toggle menu

        // close [x] button
        let closeAction = document.querySelector('#close-window')

    let printSkills = document.querySelector('#print-skills');

    let printItems = document.querySelector('#print-items');

    let printAttributes = document.querySelector('#print-attributes');

    // end action toggle menu query selectors

    // select action menu data
    let tmList = document.querySelector('#list-them');

// END QUERY SELECTORS


// START AUDIO JS

// helper function to supply and play any audio
function playSound(soundfile) {
    // takes in url of soundfile as argument

    // replaces dummy span in body of index.html with that url embedded in hidden audio player
    document.getElementById("dummy").innerHTML= `<embed src="${soundfile}" hidden="true" autostart="true"
    loop="false">`
    }

// END AUDIO JS


// START EVENT LISTENERS

    // START PLAYER ACTION MENU LISTENERS

        // listens for user clicking the skills icon
        skillsIcon.addEventListener('click', function() {
            playSound('sounds/click.wav');
            toggleMenu.setAttribute('style', 'display: block');
            printSkills.setAttribute('style', 'display: block');
            printItems.setAttribute('style', 'display: none');
            printAttributes.setAttribute('style', 'display: none');
        })

        // listens for user clicking the word skills
        skillsWord.addEventListener('click', function() {
            playSound('sounds/click.wav');
            toggleMenu.setAttribute('style', 'display: block');
            printSkills.setAttribute('style', 'display: block');
            printItems.setAttribute('style', 'display: none');
            printAttributes.setAttribute('style', 'display: none');
        })

        // listens for user clicking the bag icon
        bagIcon.addEventListener('click', function() {
            playSound('sounds/click.wav');
            toggleMenu.setAttribute('style', 'display: block');
            printItems.setAttribute('style', 'display: block');
            printSkills.setAttribute('style', 'display: none');
            printAttributes.setAttribute('style', 'display: none');
        })

        // listens for user clicking the word bag
        bagWord.addEventListener('click', function() {
            playSound('sounds/click.wav');
            toggleMenu.setAttribute('style', 'display: block');
            printItems.setAttribute('style', 'display: block');
            printSkills.setAttribute('style', 'display: none');
            printAttributes.setAttribute('style', 'display: none');
        })

        // listens for user clicking the attributes icon
        attIcon.addEventListener('click', function() {
            playSound('sounds/click.wav');
            toggleMenu.setAttribute('style', 'display: block');
            printItems.setAttribute('style', 'display: none');
            printSkills.setAttribute('style', 'display: none');
            printAttributes.setAttribute('style', 'display: block');
            
        })

        // listens for user clicking the word attributes
        attWord.addEventListener('click', function() {
            playSound('sounds/click.wav');
            toggleMenu.setAttribute('style', 'visibility: visible');
            printItems.setAttribute('style', 'display: none');
            printSkills.setAttribute('style', 'display: none');
            printAttributes.setAttribute('style', 'display: block');
            
        })

    // END PLAYER ACTION MENU LISTENERS

    // START TOGGLE MENU LISTENERS

        // listens for when user closes toggle menu
        closeAction.addEventListener('click', function(){
            playSound('sounds/click.wav');
            toggleMenu.setAttribute('style', 'visibility: hidden');
            printSkills.setAttribute('style', 'visibility: hidden');
            printItems.setAttribute('style', 'visibility: hidden');
            printAttributes.setAttribute('style', 'visibility: hidden');
        } )

    // END TOGGLE MENU LISTENERS
    


    // listens for user clicking start menu on welcome screen
    startButton.addEventListener('click', function() {
        // replace start with gameplay inner html
        document.body.setAttribute("style", "background-image: url('backgrounds/flatiron2.png')")
        // make player actions visible
        playerBox.setAttribute("style", "display: block");
        
        // make main game screen visible
        mainDiv.innerHTML = startSchool;

        // select player
        let playerName = document.querySelector("#player-name")
        let playerImage = document.querySelector("#player-img")

        // select skills
        // let skillsList = document.querySelector("#list-them")

        // items
        let item1 = document.querySelector("#item1")
        let item2 = document.querySelector("#item2")
        let item3 = document.querySelector("#item3")
        let item4 = document.querySelector("#item4")
        let item5 = document.querySelector("#item5")

        // attributes
        let health = document.querySelector("#health")
        let mood = document.querySelector("#mood")
        let stress = document.querySelector("#stress")

        // select npc
        let npcName = document.querySelector('#other-name')
        let npcImage = document.querySelector('#other-img')
        let npcDesc = document.querySelector("#desc")

        // select event w/choices
        let eventString = document.querySelector('#event-string')
        let choicesUl = document.querySelector("ul.choices-ul")

        // initial fetch player + skill
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
            
            // items
            // item1.innerText = playerObj[0].items[0].name

            // attributes
            // health.innerText = Heath: 
            // mood.innerText = Mood: 
            // stress.innerText = Stress: 
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
                let newChoiceLi = document.createElement("li")
                newChoiceLi.innerText = choice.option
                choicesUl.append(newChoiceLi)
                // add clickevent listener for ChoiceLi
            })
        })
        // 
    });
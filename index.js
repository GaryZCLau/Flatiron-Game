
    
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
        document.body.setAttribute("style", "background-image: url('backgrounds/flatiron3.jpg')")
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
        let stressLevel = document.querySelector("#stress-level")

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
        
        // loop for choices array
        // eventObj[0].choices.forEach((choice) => {
        //     let newChoiceLi = document.createElement("li")
        //     newChoiceLi.innerText = choice.option
        //     choicesUl.append(newChoiceLi)
        //     // add clickevent listener for ChoiceLi
        // })

        // fetch event/npc/choice
        // e1
        getEventsObj()
        .then((eventObj) => {
            // event
            eventString.innerText = eventObj[0].content
            // npc
            npcName.innerText = eventObj[0].npc.name
            npcImage.src = `${eventObj[0].npc.image}`
            npcDesc.innerText = eventObj[0].npc.description
            // choice
            choicesUl.innerHTML = ""
            // c1
            let choiceOne = document.createElement("li")
            choiceOne.innerText = eventObj[0].choices[0].option
            choicesUl.append(choiceOne)

            choiceOne.addEventListener("click", (evt) => {
                // e2
                getEventsObj()
                .then((eventObj) => {
                    // event
                    eventString.innerText = eventObj[1].content
                    // npc
                    npcName.innerText = eventObj[1].npc.name
                    npcImage.src = `${eventObj[1].npc.image}`
                    npcDesc.innerText = eventObj[1].npc.description
                    // choice
                    choicesUl.innerHTML = ""
                    // c2
                    let choiceOne = document.createElement("li")
                    choiceOne.innerText = eventObj[1].choices[0].option
                    choicesUl.append(choiceOne)
                    choiceOne.addEventListener("click", (evt) => {
                        // e3
                        getEventsObj()
                        .then((eventObj) => {
                            // event
                            eventString.innerText = eventObj[2].content
                            // npc
                            npcName.innerText = eventObj[2].npc.name
                            npcImage.src = `${eventObj[2].npc.image}`
                            npcDesc.innerText = eventObj[2].npc.description
                            // choice
                            choicesUl.innerHTML = ""
                            // c3
                            let choiceOne = document.createElement("li")
                            choiceOne.innerText = eventObj[2].choices[0].option
                            choicesUl.append(choiceOne)
                            choiceOne.addEventListener("click", (evt) => {
                                // e4
                                getEventsObj()
                                .then((eventObj) => {
                                    // event
                                    eventString.innerText = eventObj[3].content
                                    // npc
                                    npcName.innerText = eventObj[3].npc.name
                                    npcImage.src = `${eventObj[3].npc.image}`
                                    npcDesc.innerText = eventObj[3].npc.description
                                    // choice
                                    choicesUl.innerHTML = ""
                                    // c4
                                    let choiceOne = document.createElement("li")
                                    choiceOne.innerText = eventObj[3].choices[0].option
                                    choicesUl.append(choiceOne)
                                    choiceOne.addEventListener("click", (evt) => {
                                        // e6
                                        getEventsObj()
                                        .then((eventObj) => {
                                            // event
                                            eventString.innerText = eventObj[4].content
                                            // npc
                                            npcName.innerText = eventObj[4].npc.name
                                            npcImage.src = `${eventObj[4].npc.image}`
                                            npcDesc.innerText = eventObj[4].npc.description
                                            // choice
                                            choicesUl.innerHTML = ""
                                            // c6a
                                            let choiceOne = document.createElement("li")
                                            choiceOne.innerText = eventObj[4].choices[0].option
                                            choicesUl.append(choiceOne)
                                            choiceOne.addEventListener("click", (evt) => {
                                                // e7
                                                getEventsObj()
                                                .then((eventObj) => {
                                                    // event
                                                    eventString.innerText = eventObj[5].content
                                                    // npc
                                                    npcName.innerText = eventObj[5].npc.name
                                                    npcImage.src = `${eventObj[5].npc.image}`
                                                    npcDesc.innerText = eventObj[5].npc.description
                                                    // choice
                                                    choicesUl.innerHTML = ""
                                                    // c7
                                                    let choiceOne = document.createElement("li")
                                                    choiceOne.innerText = eventObj[5].choices[0].option
                                                    choicesUl.append(choiceOne)
                                                    choiceOne.addEventListener("click", (evt) => {
                                                        // e8
                                                        getEventsObj()
                                                        .then((eventObj) => {
                                                            // event
                                                            eventString.innerText = eventObj[6].content
                                                            // npc
                                                            npcName.innerText = eventObj[6].npc.name
                                                            npcImage.src = `${eventObj[6].npc.image}`
                                                            npcDesc.innerText = eventObj[6].npc.description
                                                            // choice
                                                            choicesUl.innerHTML = ""
                                                            // c8
                                                            let choiceOne = document.createElement("li")
                                                            choiceOne.innerText = eventObj[6].choices[0].option
                                                            choicesUl.append(choiceOne)
                                                            choiceOne.addEventListener("click", (evt) => {
                                                                // e9
                                                                getEventsObj()
                                                                .then((eventObj) => {
                                                                    // event
                                                                    eventString.innerText = eventObj[7].content
                                                                    // npc
                                                                    npcName.innerText = eventObj[7].npc.name
                                                                    npcImage.src = `${eventObj[7].npc.image}`
                                                                    npcDesc.innerText = eventObj[7].npc.description
                                                                    // choice
                                                                    choicesUl.innerHTML = ""
                                                                    // c9
                                                                    let choiceOne = document.createElement("li")
                                                                    choiceOne.innerText = eventObj[7].choices[0].option
                                                                    choicesUl.append(choiceOne)
                                                                    choiceOne.addEventListener("click", (evt) => {
                                                                        // e10
                                                                        getEventsObj()
                                                                        .then((eventObj) => {
                                                                            // event
                                                                            eventString.innerText = eventObj[8].content
                                                                            // npc
                                                                            npcName.innerText = eventObj[8].npc.name
                                                                            npcImage.src = `${eventObj[8].npc.image}`
                                                                            npcDesc.innerText = eventObj[8].npc.description
                                                                            // choice
                                                                            choicesUl.innerHTML = ""
                                                                            // c10a / get stress ball here
                                                                            let choiceOne = document.createElement("li")
                                                                            choiceOne.innerText = eventObj[8].choices[0].option
                                                                            choicesUl.append(choiceOne)
                                                                            choiceOne.addEventListener("click", (evt) => {
                                                                                // stressball logic here
                                                                                let stressBall = document.querySelector("#item2")
                                                                                stressBall.innerText = "[ Stress Ball ]"
                                                                                stressBall.addEventListener("click", (evt) => {
                                                                                    let stressNumber = stressLevel.innerHTML
                                                                                    if (stressNumber == 0) 
                                                                                    {stressLevel.innerHTML = stressNumber}
                                                                                    else
                                                                                    {stressNumber--;
                                                                                    stressLevel.innerHTML = stressNumber}
                                                                                })
                                                                                // e11
                                                                                getEventsObj()
                                                                                .then((eventObj) => {
                                                                                    // event
                                                                                    eventString.innerText = eventObj[9].content
                                                                                    // npc
                                                                                    npcName.innerText = eventObj[9].npc.name
                                                                                    npcImage.src = `${eventObj[9].npc.image}`
                                                                                    npcDesc.innerText = eventObj[9].npc.description
                                                                                    // choice
                                                                                    choicesUl.innerHTML = ""
                                                                                    // c11a
                                                                                    let choiceOne = document.createElement("li")
                                                                                    choiceOne.innerText = eventObj[9].choices[0].option
                                                                                    choicesUl.append(choiceOne)
                                                                                    choiceOne.addEventListener("click", (evt) => {
                                                                                        // e12
                                                                                        getEventsObj()
                                                                                        .then((eventObj) => {
                                                                                            // event
                                                                                            eventString.innerText = eventObj[10].content
                                                                                            // npc
                                                                                            npcName.innerText = eventObj[10].npc.name
                                                                                            npcImage.src = `${eventObj[10].npc.image}`
                                                                                            npcDesc.innerText = eventObj[10].npc.description
                                                                                            // choice
                                                                                            choicesUl.innerHTML = ""
                                                                                            // c12a
                                                                                            let choiceOne = document.createElement("li")
                                                                                            choiceOne.innerText = eventObj[10].choices[0].option
                                                                                            choicesUl.append(choiceOne)
                                                                                            choiceOne.addEventListener("click", (evt) => {
                                                                                                // e13
                                                                                                getEventsObj()
                                                                                                .then((eventObj) => {
                                                                                                    // event
                                                                                                    eventString.innerText = eventObj[11].content
                                                                                                    // npc
                                                                                                    npcName.innerText = eventObj[11].npc.name
                                                                                                    npcImage.src = `${eventObj[11].npc.image}`
                                                                                                    npcDesc.innerText = eventObj[11].npc.description
                                                                                                    // choice
                                                                                                    choicesUl.innerHTML = ""
                                                                                                    // c13
                                                                                                    let choiceOne = document.createElement("li")
                                                                                                    choiceOne.innerText = eventObj[11].choices[0].option
                                                                                                    choicesUl.append(choiceOne)
                                                                                                    choiceOne.addEventListener("click", (evt) => {
                                                                                                        // e14
                                                                                                        getEventsObj()
                                                                                                        .then((eventObj) => {
                                                                                                            // event
                                                                                                            eventString.innerText = eventObj[12].content
                                                                                                            // npc
                                                                                                            npcName.innerText = eventObj[12].npc.name
                                                                                                            npcImage.src = `${eventObj[12].npc.image}`
                                                                                                            npcDesc.innerText = eventObj[12].npc.description
                                                                                                            // choice
                                                                                                            choicesUl.innerHTML = ""
                                                                                                            // c14
                                                                                                            let choiceOne = document.createElement("li")
                                                                                                            choiceOne.innerText = eventObj[12].choices[0].option
                                                                                                            choicesUl.append(choiceOne)
                                                                                                            choiceOne.addEventListener("click", (evt) => {
                                                                                                                // e15
                                                                                                                getEventsObj()
                                                                                                                .then((eventObj) => {
                                                                                                                    // event
                                                                                                                    eventString.innerText = eventObj[13].content
                                                                                                                    // npc
                                                                                                                    npcName.innerText = eventObj[13].npc.name
                                                                                                                    npcImage.src = `${eventObj[13].npc.image}`
                                                                                                                    npcDesc.innerText = eventObj[13].npc.description
                                                                                                                    // choice
                                                                                                                    choicesUl.innerHTML = ""
                                                                                                                    // c15a
                                                                                                                    let choiceOne = document.createElement("li")
                                                                                                                    choiceOne.innerText = eventObj[13].choices[0].option
                                                                                                                    choicesUl.append(choiceOne)
                                                                                                                    choiceOne.addEventListener("click", (evt) => {
                                                                                                                        // e16
                                                                                                                        getEventsObj()
                                                                                                                        .then((eventObj) => {
                                                                                                                            // event
                                                                                                                            eventString.innerText = eventObj[14].content
                                                                                                                            // npc
                                                                                                                            npcName.innerText = eventObj[14].npc.name
                                                                                                                            npcImage.src = `${eventObj[14].npc.image}`
                                                                                                                            npcDesc.innerText = eventObj[14].npc.description
                                                                                                                            // choice
                                                                                                                            choicesUl.innerHTML = ""
                                                                                                                            // c16a
                                                                                                                            let choiceOne = document.createElement("li")
                                                                                                                            choiceOne.innerText = eventObj[14].choices[0].option
                                                                                                                            choicesUl.append(choiceOne)
                                                                                                                            choiceOne.addEventListener("click", (evt) => {
                                                                                                                                // e17
                                                                                                                                getEventsObj()
                                                                                                                                .then((eventObj) => {
                                                                                                                                    // event
                                                                                                                                    eventString.innerText = eventObj[15].content
                                                                                                                                    // npc
                                                                                                                                    npcName.innerText = eventObj[15].npc.name
                                                                                                                                    npcImage.src = `${eventObj[15].npc.image}`
                                                                                                                                    npcDesc.innerText = eventObj[15].npc.description
                                                                                                                                    // choice
                                                                                                                                    choicesUl.innerHTML = ""
                                                                                                                                    // c17
                                                                                                                                    let choiceOne = document.createElement("li")
                                                                                                                                    choiceOne.innerText = eventObj[15].choices[0].option
                                                                                                                                    choicesUl.append(choiceOne)
                                                                                                                                    choiceOne.addEventListener("click", (evt) => {
                                                                                                                                        // e18
                                                                                                                                        getEventsObj()
                                                                                                                                        .then((eventObj) => {
                                                                                                                                            // event
                                                                                                                                            eventString.innerText = eventObj[16].content
                                                                                                                                            // npc
                                                                                                                                            npcName.innerText = eventObj[16].npc.name
                                                                                                                                            npcImage.src = `${eventObj[16].npc.image}`
                                                                                                                                            npcDesc.innerText = eventObj[16].npc.description
                                                                                                                                            // choice
                                                                                                                                            choicesUl.innerHTML = ""
                                                                                                                                            // c19
                                                                                                                                            let choiceOne = document.createElement("li")
                                                                                                                                            choiceOne.innerText = eventObj[16].choices[0].option
                                                                                                                                            choicesUl.append(choiceOne)
                                                                                                                                            choiceOne.addEventListener("click", (evt) => {
                                                                                                                                                // e20
                                                                                                                                                getEventsObj()
                                                                                                                                                .then((eventObj) => {
                                                                                                                                                    // event
                                                                                                                                                    eventString.innerText = eventObj[17].content
                                                                                                                                                    // npc
                                                                                                                                                    npcName.innerText = eventObj[17].npc.name
                                                                                                                                                    npcImage.src = `${eventObj[17].npc.image}`
                                                                                                                                                    npcDesc.innerText = eventObj[17].npc.description
                                                                                                                                                    // choice
                                                                                                                                                    choicesUl.innerHTML = ""
                                                                                                                                                    // c20
                                                                                                                                                    let choiceOne = document.createElement("li")
                                                                                                                                                    choiceOne.innerText = eventObj[17].choices[0].option
                                                                                                                                                    choicesUl.append(choiceOne)
                                                                                                                                                    choiceOne.addEventListener("click", (evt) => {
                                                                                                                                                        // e21
                                                                                                                                                        getEventsObj()
                                                                                                                                                        .then((eventObj) => {
                                                                                                                                                            // event
                                                                                                                                                            eventString.innerText = eventObj[18].content
                                                                                                                                                            // npc
                                                                                                                                                            npcName.innerText = eventObj[18].npc.name
                                                                                                                                                            npcImage.src = `${eventObj[18].npc.image}`
                                                                                                                                                            npcDesc.innerText = eventObj[18].npc.description
                                                                                                                                                            // choice
                                                                                                                                                            choicesUl.innerHTML = ""
                                                                                                                                                            // c21a
                                                                                                                                                            let choiceOne = document.createElement("li")
                                                                                                                                                            choiceOne.innerText = eventObj[18].choices[0].option
                                                                                                                                                            choicesUl.append(choiceOne)
                                                                                                                                                            choiceOne.addEventListener("click", (evt) => {
                                                                                                                                                                // e22
                                                                                                                                                                getEventsObj()
                                                                                                                                                                .then((eventObj) => {
                                                                                                                                                                    // event
                                                                                                                                                                    eventString.innerText = eventObj[19].content
                                                                                                                                                                    // npc
                                                                                                                                                                    npcName.innerText = eventObj[19].npc.name
                                                                                                                                                                    npcImage.src = `${eventObj[19].npc.image}`
                                                                                                                                                                    npcDesc.innerText = eventObj[19].npc.description
                                                                                                                                                                    // choice
                                                                                                                                                                    choicesUl.innerHTML = ""
                                                                                                                                                                    // c22
                                                                                                                                                                    let choiceOne = document.createElement("li")
                                                                                                                                                                    choiceOne.innerText = eventObj[19].choices[0].option
                                                                                                                                                                    choicesUl.append(choiceOne)
                                                                                                                                                                    choiceOne.addEventListener("click", (evt) => {
                                                                                                                                                                        // e23
                                                                                                                                                                        getEventsObj()
                                                                                                                                                                        .then((eventObj) => {
                                                                                                                                                                            // event
                                                                                                                                                                            eventString.innerText = eventObj[20].content
                                                                                                                                                                            // npc
                                                                                                                                                                            npcName.innerText = eventObj[20].npc.name
                                                                                                                                                                            npcImage.src = `${eventObj[20].npc.image}`
                                                                                                                                                                            npcDesc.innerText = eventObj[20].npc.description
                                                                                                                                                                            // choice
                                                                                                                                                                            choicesUl.innerHTML = ""
                                                                                                                                                                            // c23a
                                                                                                                                                                            let choiceOne = document.createElement("li")
                                                                                                                                                                            choiceOne.innerText = eventObj[20].choices[0].option
                                                                                                                                                                            choicesUl.append(choiceOne)
                                                                                                                                                                            choiceOne.addEventListener("click", (evt) => {
                                                                                                                                                                                // e24
                                                                                                                                                                                getEventsObj()
                                                                                                                                                                                .then((eventObj) => {
                                                                                                                                                                                    // event
                                                                                                                                                                                    eventString.innerText = eventObj[21].content
                                                                                                                                                                                    // npc
                                                                                                                                                                                    npcName.innerText = eventObj[21].npc.name
                                                                                                                                                                                    npcImage.src = `${eventObj[21].npc.image}`
                                                                                                                                                                                    npcDesc.innerText = eventObj[21].npc.description
                                                                                                                                                                                    // choice
                                                                                                                                                                                    choicesUl.innerHTML = ""
                                                                                                                                                                                    // c24a
                                                                                                                                                                                    let choiceOne = document.createElement("li")
                                                                                                                                                                                    choiceOne.innerText = eventObj[21].choices[0].option
                                                                                                                                                                                    choicesUl.append(choiceOne)
                                                                                                                                                                                    choiceOne.addEventListener("click", (evt) => {
                                                                                                                                                                                        // e25
                                                                                                                                                                                        getEventsObj()
                                                                                                                                                                                        .then((eventObj) => {
                                                                                                                                                                                            // event
                                                                                                                                                                                            eventString.innerText = eventObj[22].content
                                                                                                                                                                                            // npc
                                                                                                                                                                                            npcName.innerText = eventObj[22].npc.name
                                                                                                                                                                                            npcImage.src = `${eventObj[22].npc.image}`
                                                                                                                                                                                            npcDesc.innerText = eventObj[22].npc.description
                                                                                                                                                                                            // choice
                                                                                                                                                                                            choicesUl.innerHTML = ""
                                                                                                                                                                                            // c25a
                                                                                                                                                                                            let choiceOne = document.createElement("li")
                                                                                                                                                                                            choiceOne.innerText = eventObj[22].choices[0].option
                                                                                                                                                                                            choicesUl.append(choiceOne)
                                                                                                                                                                                            choiceOne.addEventListener("click", (evt) => {
                                                                                                                                                                                                // e26
                                                                                                                                                                                                getEventsObj()
                                                                                                                                                                                                .then((eventObj) => {
                                                                                                                                                                                                    // event
                                                                                                                                                                                                    eventString.innerText = eventObj[23].content
                                                                                                                                                                                                    // npc
                                                                                                                                                                                                    npcName.innerText = eventObj[23].npc.name
                                                                                                                                                                                                    npcImage.src = `${eventObj[23].npc.image}`
                                                                                                                                                                                                    npcDesc.innerText = eventObj[23].npc.description
                                                                                                                                                                                                    // choice
                                                                                                                                                                                                    choicesUl.innerHTML = ""
                                                                                                                                                                                                    // c26
                                                                                                                                                                                                    let choiceOne = document.createElement("li")
                                                                                                                                                                                                    choiceOne.innerText = eventObj[23].choices[0].option
                                                                                                                                                                                                    choicesUl.append(choiceOne)
                                                                                                                                                                                                    choiceOne.addEventListener("click", (evt) => {
                                                                                                                                                                                                        // e27
                                                                                                                                                                                                        getEventsObj()
                                                                                                                                                                                                        .then((eventObj) => {
                                                                                                                                                                                                            // event
                                                                                                                                                                                                            eventString.innerText = eventObj[24].content
                                                                                                                                                                                                            // npc
                                                                                                                                                                                                            npcName.innerText = eventObj[24].npc.name
                                                                                                                                                                                                            npcImage.src = `${eventObj[24].npc.image}`
                                                                                                                                                                                                            npcDesc.innerText = eventObj[24].npc.description
                                                                                                                                                                                                            // choice
                                                                                                                                                                                                            choicesUl.innerHTML = ""
                                                                                                                                                                                                            // c27
                                                                                                                                                                                                            let choiceOne = document.createElement("li")
                                                                                                                                                                                                            choiceOne.innerText = eventObj[24].choices[0].option
                                                                                                                                                                                                            choicesUl.append(choiceOne)
                                                                                                                                                                                                            choiceOne.addEventListener("click", (evt) => {
                                                                                                                                                                                                                // e28
                                                                                                                                                                                                                getEventsObj()
                                                                                                                                                                                                                .then((eventObj) => {
                                                                                                                                                                                                                    // event
                                                                                                                                                                                                                    eventString.innerText = eventObj[25].content
                                                                                                                                                                                                                    // npc
                                                                                                                                                                                                                    npcName.innerText = eventObj[25].npc.name
                                                                                                                                                                                                                    npcImage.src = `${eventObj[25].npc.image}`
                                                                                                                                                                                                                    npcDesc.innerText = eventObj[25].npc.description
                                                                                                                                                                                                                    // choice
                                                                                                                                                                                                                    choicesUl.innerHTML = ""
                                                                                                                                                                                                                    // c28
                                                                                                                                                                                                                    let choiceOne = document.createElement("li")
                                                                                                                                                                                                                    choiceOne.innerText = eventObj[25].choices[0].option
                                                                                                                                                                                                                    choicesUl.append(choiceOne)
                                                                                                                                                                                                                    choiceOne.addEventListener("click", (evt) => {
                                                                                                                                                                                                                        // e29
                                                                                                                                                                                                                        getEventsObj()
                                                                                                                                                                                                                        .then((eventObj) => {
                                                                                                                                                                                                                            // event
                                                                                                                                                                                                                            eventString.innerText = eventObj[26].content
                                                                                                                                                                                                                            // npc
                                                                                                                                                                                                                            npcName.innerText = eventObj[26].npc.name
                                                                                                                                                                                                                            npcImage.src = `${eventObj[26].npc.image}`
                                                                                                                                                                                                                            npcDesc.innerText = eventObj[26].npc.description
                                                                                                                                                                                                                            // choice
                                                                                                                                                                                                                            choicesUl.innerHTML = ""
                                                                                                                                                                                                                            // c29a
                                                                                                                                                                                                                            let choiceOne = document.createElement("li")
                                                                                                                                                                                                                            choiceOne.innerText = eventObj[26].choices[0].option
                                                                                                                                                                                                                            choicesUl.append(choiceOne)
                                                                                                                                                                                                                            choiceOne.addEventListener("click", (evt) => {
                                                                                                                                                                                                                                // e30
                                                                                                                                                                                                                                getEventsObj()
                                                                                                                                                                                                                                .then((eventObj) => {
                                                                                                                                                                                                                                    // event
                                                                                                                                                                                                                                    eventString.innerText = eventObj[27].content
                                                                                                                                                                                                                                    // npc
                                                                                                                                                                                                                                    npcName.innerText = eventObj[27].npc.name
                                                                                                                                                                                                                                    npcImage.src = `${eventObj[27].npc.image}`
                                                                                                                                                                                                                                    npcDesc.innerText = eventObj[27].npc.description
                                                                                                                                                                                                                                    // choice
                                                                                                                                                                                                                                    choicesUl.innerHTML = ""
                                                                                                                                                                                                                                    // c30
                                                                                                                                                                                                                                    let choiceOne = document.createElement("li")
                                                                                                                                                                                                                                    choiceOne.innerText = eventObj[27].choices[0].option
                                                                                                                                                                                                                                    choicesUl.append(choiceOne)
                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                })
                                                                                                                                                                                                                            })
                                                                                                                                                                                                                            // c29b
                                                                                                                                                                                                                            let choiceTwo = document.createElement("li")
                                                                                                                                                                                                                            choiceTwo.innerText = eventObj[26].choices[1].option
                                                                                                                                                                                                                            choicesUl.prepend(choiceTwo)
                                                                                                                                                                                                                            // c29c
                                                                                                                                                                                                                            let choiceThree = document.createElement("li")
                                                                                                                                                                                                                            choiceThree.innerText = eventObj[26].choices[2].option
                                                                                                                                                                                                                            choicesUl.prepend(choiceThree)
                                                                                                                                                                                                                            // c29d
                                                                                                                                                                                                                            let choiceFour = document.createElement("li")
                                                                                                                                                                                                                            choiceFour.innerText = eventObj[26].choices[3].option
                                                                                                                                                                                                                            choicesUl.prepend(choiceFour)
                                                                                                                                                                                                                        })
                                                                                                                                                                                                                    })
                                                                                                                                                                                                                })
                                                                                                                                                                                                            })
                                                                                                                                                                                                        })
                                                                                                                                                                                                    })
                                                                                                                                                                                                })
                                                                                                                                                                                            })
                                                                                                                                                                                            // c25b

                                                                                                                                                                                        })
                                                                                                                                                                                    })
                                                                                                                                                                                    // c24b
                                                                                                                                                                                    let choiceTwo = document.createElement("li")
                                                                                                                                                                                    choiceTwo.innerText = eventObj[21].choices[1].option
                                                                                                                                                                                    choicesUl.prepend(choiceTwo)
                                                                                                                                                                                    // c24c
                                                                                                                                                                                    let choiceThree = document.createElement("li")
                                                                                                                                                                                    choiceThree.innerText = eventObj[21].choices[2].option
                                                                                                                                                                                    choicesUl.prepend(choiceThree)
                                                                                                                                                                                    // c24d
                                                                                                                                                                                    let choiceFour = document.createElement("li")
                                                                                                                                                                                    choiceFour.innerText = eventObj[21].choices[3].option
                                                                                                                                                                                    choicesUl.prepend(choiceFour)

                                                                                                                                                                                })
                                                                                                                                                                            })
                                                                                                                                                                            // c23b
                                                                                                                                                                            let choiceTwo = document.createElement("li")
                                                                                                                                                                            choiceTwo.innerText = eventObj[20].choices[1].option
                                                                                                                                                                            choicesUl.prepend(choiceTwo)
                                                                                                                                                                        })
                                                                                                                                                                    })
                                                                                                                                                                })
                                                                                                                                                            })
                                                                                                                                                            // c21b
                                                                                                                                                            let choiceTwo = document.createElement("li")
                                                                                                                                                            choiceTwo.innerText = eventObj[18].choices[1].option
                                                                                                                                                            choicesUl.prepend(choiceTwo)
                                                                                                                                                            // c21c
                                                                                                                                                            let choiceThree = document.createElement("li")
                                                                                                                                                            choiceThree.innerText = eventObj[18].choices[2].option
                                                                                                                                                            choicesUl.prepend(choiceThree)
                                                                                                                                                            // c21d
                                                                                                                                                            let choiceFour = document.createElement("li")
                                                                                                                                                            choiceFour.innerText = eventObj[18].choices[3].option
                                                                                                                                                            choicesUl.prepend(choiceFour)
                                                                                                                                                        })
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                            // c16b
                                                                                                                            let choiceTwo = document.createElement("li")
                                                                                                                            choiceTwo.innerText = eventObj[14].choices[1].option
                                                                                                                            choicesUl.prepend(choiceTwo)
                                                                                                                        })
                                                                                                                    })
                                                                                                                    // c15b
                                                                                                                    let choiceTwo = document.createElement("li")
                                                                                                                    choiceTwo.innerText = eventObj[13].choices[1].option
                                                                                                                    choicesUl.prepend(choiceTwo)
                                                                                                                    // c15c
                                                                                                                    let choiceThree = document.createElement("li")
                                                                                                                    choiceThree.innerText = eventObj[13].choices[2].option
                                                                                                                    choicesUl.prepend(choiceThree)
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })

                                                                                            // c12b
                                                                                            let choiceTwo = document.createElement("li")
                                                                                            choiceTwo.innerText = eventObj[10].choices[1].option
                                                                                            choicesUl.prepend(choiceTwo)
                                                                                            // c12c
                                                                                            let choiceThree = document.createElement("li")
                                                                                            choiceThree.innerText = eventObj[10].choices[2].option
                                                                                            choicesUl.prepend(choiceThree)
                                                                                            // c12d
                                                                                            let choiceFour = document.createElement("li")
                                                                                            choiceFour.innerText = eventObj[10].choices[3].option
                                                                                            choicesUl.prepend(choiceFour)
                                                                                        })
                                                                                    })
                                                                                    // c11b
                                                                                    let choiceTwo = document.createElement("li")
                                                                                    choiceTwo.innerText = eventObj[9].choices[1].option
                                                                                    choicesUl.prepend(choiceTwo)
                                                                                    
                                                                                })
                                                                            })

                                                                            // c10b
                                                                            let choiceTwo = document.createElement("li")
                                                                            choiceTwo.innerText = eventObj[8].choices[1].option
                                                                            choicesUl.prepend(choiceTwo)
                                                                        })
                                                                    })
                                                                })
                                                            })

                                                        })
                                                    })
                                                })
                                            })

                                            // c6b
                                            let choiceTwo = document.createElement("li")
                                            choiceTwo.innerText = eventObj[4].choices[1].option
                                            choicesUl.prepend(choiceTwo)
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
        // 
    });
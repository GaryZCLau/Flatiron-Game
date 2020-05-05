
    

// select area to replace
let mainDiv = document.querySelector('#main')

// select button for event listener
let startButton = document.querySelector('#start-game')

// replacement screen
let startSchool = document.querySelector('#gameplay').innerHTML;


// when button is clicked
startButton.addEventListener('click', function() {
    // replace it with gameplay inner html
        mainDiv.innerHTML = startSchool;

        let eventString = document.querySelector('#event')
        let npc = document.querySelector('#other-name')

    // get data from backend - seed data
    fetch('http://localhost:3000/events/npc')
    .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        
        eventString.innerText = data[1].content
        npc.innerText = data[1]
        console.log(data[1])

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

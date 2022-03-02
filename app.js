const prompt = require('prompt-sync')();
let username;
let playerReady;
const currentShip = [];
let enemyShips = [{
    name: "Grebulon Reconnaissance Ship",
    hull: Math.floor(Math.random() * (6  - 3) + 3),
    firePower: Math.floor(Math.random() * (4  - 2) + 2),
    
    //generates random number between .6 and .8 (no Mathfloor)
    accuracy: (Math.random() * (.8 - .6) + .6),
    },
    {
        name: "Omicron Attack Ship",
        hull: Math.floor(Math.random() * (6  - 3) + 3),
        firePower: Math.floor(Math.random() * (4  - 2) + 2),
        accuracy: (Math.random() * (.8 - .6) + .6),
    },
    {
        name: "Spaceball One",
        hull: Math.floor(Math.random() * (6  - 3) + 3),
        firePower: Math.floor(Math.random() * (4  - 2) + 2),
        accuracy: (Math.random() * (.8 - .6) + .6),
    },
    {
        name: "Thundercougarfalconbird",
        hull: Math.floor(Math.random() * (6  - 3) + 3),
        firePower: Math.floor(Math.random() * (4  - 2) + 2),
        accuracy: (Math.random() * (.8 - .6) + .6), 
    },
    {
        name: "Golgafinchan Ark Fleet Ship B",
        hull: Math.floor(Math.random() * (6  - 3) + 3),
        firePower: Math.floor(Math.random() * (4  - 2) + 2),
        accuracy: (Math.random() * (.8 - .6) + .6),
    },
    {
        name: "Hotblack Desiato's Limoship",
        hull: Math.floor(Math.random() * (6  - 3) + 3),
        firePower: Math.floor(Math.random() * (4  - 2) + 2),
        accuracy: (Math.random() * (.8 - .6) + .6),
    }
]
let playerShip = {
    name: "USS Schwarzenegger",
    hull: 20,
    firePower: 5,
    accuracy: .7,
}


//determines if shot fired hits target based on accuracy and randomness
function didItHit(firingShip){
    if (Math.random() < firingShip.accuracy){
        return true;
    }
    else{
        return false;
    }
}


function battleShip1(){
    let winningShip;
    currentShip.push(enemyShips[0]);
    console.log(`You head into battle against the ${enemyShips[0].name}!`);
    while(enemyShips[0].hull > 0 && playerShip.hull > 0){
        if(didItHit(playerShip) === true){
            enemyShips[0].hull -= playerShip.firePower;
            console.log(`The ${playerShip.name} fires and hits the ${enemyShips[0].name}.`);
            if(enemyShips[0].hull <= 0){
                winningShip = playerShip.name;
            }
        }
        else{
            if(didItHit(enemyShips[0]) === true){
                playerShip.hull -= enemyShips[0].firePower;
                console.log(`You fire! You missed. The ${enemyShips[0].name} fires and hits you.`);
                if(playerShip.hull <= 0){
                    winningShip = enemyShips[0].name;
                }
            }    
        }
    }
    if(winningShip === playerShip.name){
        console.log(`You have defeated the ${enemyShips[0].name}.`);
            if(doYouRetreat() === true){
                console.log("You retreat! The earth is doomed.");
            }
            else{
                battleShip2();
            }
        }
    else{
        console.log(`${enemyShips[0].name} has defeated you! The earth is doomed.`);
    }        
}


function battleShip2(){
    let winningShip;
    console.log(`You head into battle against the ${enemyShips[1].name}!`);
    while(enemyShips[1].hull > 0 && playerShip.hull > 0){
        if(didItHit(playerShip) === true){
            enemyShips[1].hull -= playerShip.firePower;
            console.log(`The ${playerShip.name} fires and hits the ${enemyShips[1].name}.`);
            if(enemyShips[1].hull <= 0){
                winningShip = playerShip.name;
            }
        }
        else{
            if(didItHit(enemyShips[0]) === true){
                playerShip.hull -= enemyShips[1].firePower;
                console.log(`You fire! You missed. The ${enemyShips[1].name} fires and hits you.`);
                if(playerShip.hull <= 0){
                    winningShip = enemyShips[1].name;
                }
            }    
        }
    }
    if(winningShip === playerShip.name){
        console.log(`You have defeated the ${enemyShips[1].name}.`);
            if(doYouRetreat() === true){
                console.log("You retreat! The earth is doomed.");
            }
            else{
                battleShip3();
            }
        }
    else{
        console.log(`${enemyShips[1].name} has defeated you! The earth is doomed.`);
    }        
}


function battleShip3(){
    let winningShip;
    console.log(`You head into battle against ${enemyShips[2].name}!`);
    while(enemyShips[2].hull > 0 && playerShip.hull > 0){
        if(didItHit(playerShip) === true){
            enemyShips[2].hull -= playerShip.firePower;
            console.log(`The ${playerShip.name} fires and hits ${enemyShips[2].name}.`);
            if(enemyShips[2].hull <= 0){
                winningShip = playerShip.name;
            }
        }
        else{
            if(didItHit(enemyShips[2]) === true){
                playerShip.hull -= enemyShips[0].firePower;
                console.log(`You fire! You missed. ${enemyShips[2].name} fires and hits you.`);
                if(playerShip.hull <= 0){
                    winningShip = enemyShips[2].name;
                }
            }    
        }
    }
    if(winningShip === playerShip.name){
        console.log(`You have defeated ${enemyShips[2].name}.`);
            if(doYouRetreat() === true){
                console.log("You retreat! The earth is doomed.");
            }
            else{
                battleShip4();
            }
        }
    else{
        console.log(`${enemyShips[2].name} has defeated you! The earth is doomed.`)
    }        
}


function battleShip4(){
    let winningShip;
    console.log(`You head into battle against the ${enemyShips[3].name}!`);
    while(enemyShips[3].hull > 0 && playerShip.hull > 0){
        if(didItHit(playerShip) === true){
            enemyShips[3].hull -= playerShip.firePower;
            console.log(`The ${playerShip.name} fires and hits the ${enemyShips[3].name}.`);
            if(enemyShips[3].hull <= 0){
                winningShip = playerShip.name;
            }
        }
        else{
            if(didItHit(enemyShips[3]) === true){
                playerShip.hull -= enemyShips[3].firePower;
                console.log(`You fire! You missed. The ${enemyShips[3].name} fires and hits you.`);
                if(playerShip.hull <= 0){
                    winningShip = enemyShips[3].name;
                }
            }    
        }
    }
    if(winningShip === playerShip.name){
        console.log(`You have defeated the ${enemyShips[3].name}.`);
            if(doYouRetreat() === true){
                console.log("You retreat! The earth is doomed.");
            }
            else{
                battleShip5();
            }
        }
    else{
        console.log(`${enemyShips[3].name} has defeated you! The earth is doomed.`);
    }        
}


function battleShip5(){
    let winningShip;
    console.log(`You head into battle against ${enemyShips[4].name}!`);
    while(enemyShips[4].hull > 0 && playerShip.hull > 0){
        if(didItHit(playerShip) === true){
            enemyShips[4].hull -= playerShip.firePower;
            console.log(`The ${playerShip.name} fires and hits ${enemyShips[4].name}.`);
            if(enemyShips[4].hull <= 0){
                winningShip = playerShip.name;
            }
        }
        else{
            if(didItHit(enemyShips[4]) === true){
                playerShip.hull -= enemyShips[4].firePower;
                console.log(`You fire! You missed. ${enemyShips[4].name} fires and hits you.`);
                if(playerShip.hull <= 0){
                    winningShip = enemyShips[4].name;
                }
            }    
        }
    }
    if(winningShip === playerShip.name){
        console.log(`You have defeated ${enemyShips[4].name}.`);
            if(doYouRetreat() === true){
                console.log(`You have defeated ${enemyShips[4].name}.`);
            }
            else{
                battleShip6();
            }
        }
    else{
        console.log(`${enemyShips[4].name} has defeated you! The earth is doomed.`);
    }        
}


function battleShip6(){
    let winningShip;
    console.log(`You head into battle against ${enemyShips[5].name}!`);
    while(enemyShips[5].hull > 0 && playerShip.hull > 0){
        if(didItHit(playerShip) === true){
            enemyShips[5].hull -= playerShip.firePower;
            console.log(`The ${playerShip.name} fires and hits ${enemyShips[5].name}.`);
            if(enemyShips[5].hull <= 0){
                winningShip = playerShip.name;
            }
        }
        else{
            if(didItHit(enemyShips[5]) === true){
                playerShip.hull -= enemyShips[5].firePower;
                console.log(`You fire! You missed. ${enemyShips[5].name} fires and hits you.`);
                if(playerShip.hull <= 0){
                    winningShip = enemyShips[5].name;
                }
            }    
        }
    }
    if(winningShip === playerShip.name){
        console.log(`You win! The ${playerShip.name} is victorius. Livestock and rectums everywhere are safe.`);
    }
    else{
        console.log(`You have been defeated. The earth is doomed.`)
    }
}


function askPlayerBegin(){
    while(playerReady !== true){
        console.log(`The earth is being invaded. If the alien ships make it to the surface, it will mean anal probes for all\nof humantiy. Are you ready to do your duty and go to battle?`)
        let response = prompt(`Please type [Y]es or [N]o:`).toUpperCase();
        if(response !== "Y" && response  !== "N"){
            console.log("I'm sorry. I didn't get that.");
        }
        else{
            if(response === "Y"){
                playerReady = true;
                battleShip1();
            }
            else if(response === "N"){
                console.log("Enjoy the proctology experiments.");
                playerReady = true;
            }
        }
    }
}


function greetPlayer(){
    console.log(`Welcome aboard the ${playerShip.name}, ${username}!`);   
    let ready = prompt(`Are you ready to defend the earth from the alien invaders? Please type [Y]es or [N]o. `).toUpperCase();
    if(ready === "Y"){
        console.log(`You go to battle with ${enemyShips[0].name}`)
    }
    else if(ready === "N"){
        console.log(`Whatever, it's literally your funeral.`)
    }
    else{
        console.log("I'm sorry. I didn't understand that.")
    }
}


function doYouRetreat(){
    let response = prompt("Do you retreat? Please type [Y]es or [N]o: ").toUpperCase();
    if(response === "Y"){
        return true;
    }
    else if(response === "N"){
        return false;
    }
    else{
        imSorry();
    }
}



//for incorrect player entries
function imSorry(){
    console.log("I'm sorry, I didn't get that.");
    doYouRetreat();
}


function greetPlayer(){
    console.log(`Welcome aboard the ${playerShip.name}, ${username}.`);
}


function getPlayerName(){
    username = prompt(`Please enter your name: `);
}


function beginGame(){
    getPlayerName();
    greetPlayer();
    askPlayerBegin();
}


beginGame();





let wood = 0;
let choppingPower = 1;

let axe = 0;
let axeCost = 15;

let stoneAxe = 0;
let stoneAxeCost = 100;

let ironAxe = 0;
let ironAxeCost = 500;

//gameloop
setInterval(function(){
    wood = wood + axe;
    wood = wood + stoneAxe * 5;
    wood = wood + ironAxe * 10
    document.getElementById("wood").innerHTML = wood;
    updateWoodPerSecond();
}, 1000);

setInterval(function(){
    saveGame();
},30000);

function saveGame(){
    let gameSave = {
        wood: wood,
        choppingPower: choppingPower,
        axe: axe,
        axeCost: axeCost,
        stoneAxe: stoneAxe,
        stoneAxeCost: stoneAxeCost,
        ironAxe: ironAxe,
        ironAxeCost: ironAxeCost
    };
    localStorage.setItem("gameSave",JSON.stringify(gameSave));
}

window.onload = function(){
    loadGame();
}

function loadGame(){
    let savedGame=JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.wood !== "undefined") wood = savedGame.wood;
    if (typeof savedGame.choppingPower !== "undefined") choppingPower = savedGame.choppingPower;
    if (typeof savedGame.axe !== "undefined") axe = savedGame.axe;
    if (typeof savedGame.axeCost !== "undefined") axeCost = savedGame.axeCost;
    if (typeof savedGame.stoneAxe !== "undefined") stoneaxe = savedGame.axe;
    if (typeof savedGame.stoneAxeCost !== "undefined") stoneAxeCost = savedGame.stoneAxeCost;
    if (typeof savedGame.ironAxe !== "undefined") ironaxe = savedGame.ironAxe;
    if (typeof savedGame.ironAxeCost !== "undefined") ironAxeCost = savedGame.ironAxeCost;
}

function updateWoodPerSecond(){
    woodPerSecond = axe + (stoneAxe * 5) + (ironAxe * 10);
   document.getElementById("woodPerSecond").innerHTML = woodPerSecond;
}

function getAxe(){
    if (wood >= axeCost){
        wood -= axeCost;
        axe += 1;
        axeCost = Math.round(axeCost * 1.1);

        document.getElementById("wood").innerHTML = wood;
        document.getElementById("axe").innerHTML = axe;
        document.getElementById("axeCost").innerHTML = axeCost;
    }
}

function getStoneAxe(){
    if (wood >= stoneAxeCost){
        wood -= stoneAxeCost;
        stoneAxe += 1;
        stoneAxeCost = Math.round(stoneAxeCost * 1.1);

        document.getElementById("wood").innerHTML = wood;
        document.getElementById("stoneAxe").innerHTML = stoneAxe;
        document.getElementById("stoneAxeCost").innerHTML = stoneAxeCost;
    }
}

function getIronAxe(){
    if (wood >= ironAxeCost){
        wood -= ironAxeCost;
        ironAxe += 1;
        ironAxeCost = Math.round(ironAxeCost * 1.1);

        document.getElementById("wood").innerHTML = wood;
        document.getElementById("ironAxe").innerHTML = ironAxe;
        document.getElementById("ironAxeCost").innerHTML = ironAxeCost;
    }
}


function getWood(amount) {
    wood += amount;
    document.getElementById("wood").innerHTML = wood;
}
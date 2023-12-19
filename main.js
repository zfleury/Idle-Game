let game = {
    wood: 0,
    totalWood: 0,
    totalClicks: 0,
    choppingPower: 1,
    version: 0.000,

    getWood: function(amount) {
        this.wood += amount;
        this.totalWood += amount;
        display.updateWood();
    },

    getWoodPerSecond: function(){
        let woodPerSecond = 0;
        for (i = 0; i < upgrade.name.length; i++){
            woodPerSecond += upgrade.income[i] * upgrade.amount[i];
        }
        return woodPerSecond;
    }
}

let upgrade = {
    name: [
        "Wood Axe",
        "Stone Axe",
        "Iron Axe"

    ],
    image: [
        "assets\woodaxe.png",
        "assets\stoneAxe.png",
        "assets\ironAxe.png"
    ],
    amount: [0,0,0],
    income:[
        1,
        5,
        10
    ],
    cost:[
        15,
        100,
        500
    ],

    purchase: function(index) {
        if (game.wood >= this.cost[index]){
            game.wood -= this.cost[index];
            this.amount[index]++;
            this.cost[index]= Math.ceil(this.cost[index] * 1.10)
            display.updateWood;
        }
    }
}

let display = {
    updateWood: function() {
        document.getElementById("wood").innerHTML = game.wood;
        document.getElementById("woodPerSecond").innerHTML = game.woodPerSecond();
    }
}

addLayer("p", {
    name: "Early Man", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D2691E",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "Cavemen", // Name of prestige currency
    baseResource: "intellegence", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1) 
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "E", description: "Become stupider, but gain Cavemen", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        rows: 2,
        cols: 5,
        11: {
            description: "Your cavemen invent fire, so get intelligence twice as fast",
            cost: new Decimal(1),
            title: "Fire"
        },
        12: {
            description: "Your cavemen are somehow getting smarter and invent a wheel, further multiplying your intelligence gain by 2.5",
            cost: new Decimal(3),
            title: "Wheel"
        },
        13: {
            description: "Wow, those cavemen are starting to hunt in pairs, this means you get more intelligence, particulary, a 3x multiplier",
            cost: new Decimal(25),
            title: "Hunting"
        },
        14: {
            description: "Your cavemen are becoming friends, and multiplying intelligence gain by 10! (friendship is magic)",
            cost: new Decimal(75),
            title: "Teamwork"
        },
        15: {
            description: "Your cavemen are loving each other alot and you get twice te intelligence because of it",
            cost: new Decimal(150),
            title: "Love"
        },
        21: {
            description: "The cavemen are learning to write, getting more intelligence based of your intelligence!",
            cost: new Decimal(225),
            title: "Knowledge"
        },
        22: {
            description: "Thats a good looking house, it also gives you 3x the knowledge",
            cost: new Decimal(500),
            title: "Construction"
        },
        23: {
            description: "Lets put those houses together, make a village, and get 1.1x intelligence",
            cost: new Decimal(750),
            title: "Village"
        },
        24: {
            description: "Take down a wooly mammoth,and get 2.5x knowledge",
            cost: new Decimal(1000),
            title: "Triumph"
        },
        25: {
            description: "Learn to move alot more, ripping off DI, and unlocking the next layer",
            cost: new Decimal(1500),
            title: "Travel"
    }
}})
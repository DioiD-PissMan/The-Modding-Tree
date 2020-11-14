addLayer("p", {
    name: "Early Man", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D2691E",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
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
        rows: 1,
        cols: 2,
        11: {
            description: "You invent fire, so get intelligence twice as fast",
            cost: new Decimal(1)
        },
        12: {
            description: "Your cavemen are somehow getting smarter and invent a wheel of stone, further multiplying your intelligence gain by 2.5",
            cost: new Decimal(3)
        },
        13: {
            description: "Wow, those cavemen are starting to hunt in pairs, this means you get more food, and increase your intelligence gain overtime, depending on your intelligence",
            cost: new Decimal(10)
        }
    }
})
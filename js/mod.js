let modInfo = {
	name: "The Historic Tree",
	id: "HistoricTree",
	author: "DioiD, the funny piss man",
	pointsName: "intellegence",
	discordName: "",
	discordLink: "",
	changelogLink: "https://github.com/Acamaeda/The-Modding-Tree/blob/master/changelog.md",
	initialStartPoints: new Decimal (5), // Used for hard resets and new players
	
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.12",
	name: "Cavemen, and thats it",
}

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if(hasUpgrade("p",11)) gain = gain.mul(2)
	if(hasUpgrade("p",12)) gain = gain.mul(2.5)
	if(hasUpgrade("p",13)) gain = gain.mul(3)
	if(hasUpgrade("p",14)) gain = gain.mul(10)
	if(hasUpgrade("p",15)) gain = gain.mul(2)
	if(hasUpgrade("p",21)) gain = gain.mul(player.points.cbrt()).max(1)
	if(hasUpgrade("p",22)) gain = gain.mul(3)
	if(hasUpgrade("p",23)) gain = gain.mul(1.1)
	if(hasUpgrade("p",24)) gain = gain.mul(2.5)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600000) // Default is 1 hour which is just arbitrarily large
}
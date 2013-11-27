// This is a comment. Hooray. Anywhoo, we need to first define our variables, so lets start by defining the map!
var mapArray = [
    [1, 1, 1, 1, 1],
    [1, 2.0, 2.01, 3.3, 1],
    [1, 3.3, 3.34, 4.2, 1],
    [1, 3.34, 4.25, 4.25, 1],
    [1, 1, 1, 1, 1]
];
//  The 1's are walls, 2's are villages, 3's are forests, and#00ff00 4's are caves. Neat-o. Now, we need to set up our location variables, so we know where we actually are! X and Y shall be those vars.
var xm = 1;
var ym = 1;
// Remember that arrays use 0 indexing.
var playerAction = " ";
var mapLocation = 0;
var mapLocationString = " ";
var randomVar = 0;
var promptMessage = "You wake up in the center of a village with a lot of chickens. You're also hungry. And you like chickens.";
var promptMessage2 = "Type in '/go(direction)' to move, '/fight' to start a fight, and '/exit' to exit the game.";
// These variables will be used in prompt commands and functions
function mobStats(HP, STR, MGC, LVL, XPR, DVP, OFA, mobName) {
    this.HP = HP;
    this.STR = STR;
    this.MGC = MGC;
    this.LVL = LVL;
    this XPR = XPR;
    this.DVP = DVP;
    this.OFA = OFA;
    this.mobName = mobName;
    this.HPchange = HPchange;

    function HPchange(newValue) {
        this.HP = newValue;
    }
    this.STRchange = STRchange;

    function STRchange(newValue) {
        this.STR = newValue;
    }
    this.MGCchange = MGCchange;

    function MGCchange(newValue) {
        this.MGC = newValue;
    }
    this.LVLchange = LVLchange;

    function LVLchange(newValue) {
        this.LVL = newValue;
    }
    this.XPRchange = XPRchange;

    function XPRchange(newValue) {
        this.XPR = newValue;
    }
    this.DVPchange = DVPchange;

    function DVPchange(newValue) {
        this.DVP = newValue;
    }
    this.OFAchange = OFAchange;

    function OFAchange(newValue) {
        this.OFA = newValue;
    }
    this.mobNamechange = mobNamechange;

    function mobNamechange(newValue) {
        this.mobName = newValue;
    }
}
// This sets up an object constructor, with properties as mob stats, and methods to change those stats. Hooray. 
var Player = new mobStats(10, 1, 1, 1, 0, 0, 0, "None");
var mob1 = new mobStats(0, 0, 0, 0, 0, 0, 0, "None");
// var mob2 = new mobStats ( 0, 0, 0, 0, 0, 0, 0, "None");
// These set up the player, and also empty mob stats slots which will be used in battle.
var Chicken = new mobStats(4, 1, 1, 1, 1, 0, 1, "Chicken");
var MechaChicken = new mobStats(17, 3, 3, 3, 3, 1, .2, "Mecha Chicken");
var Bat = new mobStats(11, 7, 4, 3, 4, 2, 1, "Bat");
var Bug = new mobStats(7, 2, 8, 3, 4, 3, 1, "Bug");
var Pixie = new mobStats(9, 0, 14, 5, 10, 4, .2, "Pixie");
var Troll = new mobStats(15, 10, 0, 5, 10, 5, .2, "Troll");
var Dwarf = new mobStats(8, 3, 2, 5, 6, 4, .2, "Dwarf")
// These set up all the mobs, which will be copied into the mob1 and mob2 objects to be used during battle. Oh what fun. The mob's XPR stat is the amount of experience gained, upon their defeat. Their DVP stat is their ID, and their OFA is the chance they'll appear in battle.
var FuncMove = function (directionParameter) {
    // outputLocation is a nested function. BIRD!
    var outputLocation = function () {
        mapLocation = Math.floor(mapArray[xm][ym]);
        for (var i = 2; i < 5; i++) {
            if (mapLocation === 2 && i === 2) {
                console.log("You are in a village.");
            } else if (mapLocation === 3 && i === 3) {
                console.log("You are in a forest.");
            } else if (mapLocation === 4 && i === 4) {
                console.log("You are in a cave.");
            }
        }
    }
    // This ends the nested function.
    var direction = directionParameter;
    var a = 0;
    switch (direction) {
    case '/gonorth':
        a = xm - 1;
        if (mapArray[a][ym] === 1) {
            console.log("A wall blocks your path.");
        } else {
            console.log("You moved north.");
            xm = a
            outputLocation();
        }
        break;
    case '/gosouth':
        a = xm + 1;
        if (mapArray[a][ym] === 1) {
            console.log("A wall blocks your path.");
        } else {
            console.log("You moved south.");
            xm = a
            outputLocation();
        }
        break;
    case '/goeast':
        a = ym + 1;
        if (mapArray[xm][a] === 1) {
            console.log("A wall blocks your path.");
        } else {
            console.log("You moved east.");
            ym = a
            outputLocation();
        }
        break;
    case '/gowest':
        a = ym - 1;
        if (mapArray[xm][a] === 1) {
            console.log("A wall blocks your path.");
        } else {
            console.log("You moved west.");
            ym = a
            outputLocation();
        }
        break;
    default:
        console.log("You didn't move anywhere.");
    }
}
// FuncMove's function now allows us to fully move across the map, and to also display where we are on the map. It's like Dora the Explorer, but for bigger kids.
var FuncFight = function () {
    var RandomValues = function () {
        randomVar = Math.random();
    }
    // Let's break this entire function down into some steps. Because if you try and step over a staircase with one bound, you're gonna break your back. Step 1: fill in the mob1 and mob2 object variables, these will be used in combat. Step 2: Include the actual battle engine, where the actual combat takes place. Step 3: Anything that should happen after the battle goes here. For now, we're only doing one mob per battle.
    var AssignMobs = function () {
        mapLocationString = mapLocation.toString();
        var Subtractand = mapLocation.length - 3
        for (var i = 0; i > 6; i++) {
            if (mapLocationString.charAt(3 - Subtracthand) === 0 && i = 0) {
                mob1 = Chicken;
            } else if (mapLocationString.charAt(3 - Subtracthand) === 1 && i = 1) {
                mob1 = MechaChicken;
            } else if (mapLocationString.charAt(3 - Subtracthand) === 2 && i = 2) {
                mob1 = Bat;
            } else if (mapLocationsString.charAt(3 - Subtracthand) === 3 && i = 3) {
                mob1 = Bug;
            } else if (mapLocationsString.charAt(3 - Subtracthand) === 4 && i = 4) {
                mob1 = Pixie;
            } else if (mapLocationsString.charAt(3 - Subtracthand) === 5 && i = 5) {
                mob1 = Troll;
            }
        }
    }
    if (mob1.HP === 0) {
        mapLocation = mapArray[xm][ym];
        if (mapLocation.length === 4) {
            RandomValues();
            if (randomVar > .79) {
                AssignMobs();
            }
        } else if (mapLocation.length === 3) {
            RandomValues();
            if (randomVar < 1) {
                AssignMobs();
            }
        }
    }
    console.log("You encountered an " + mob1.mobName + "!");
    var inBattle = true;
    while (inBattle) {
        var playerAction = prompt("Battle with /sword or /spell !");
        var r = Math.floor(Math.random() * 2 + 1);
        var mobAttack = Math.floor(Math.random() * 2 + 1);
        if (playerAction === "/sword") {
            var num = 10 * r * player.LVL * player.STR;
            var dem = (5 * mob1.STR + 2 * mob1.MGC) * mob1.LVL;
            var fract = num / dem / 1;
            mob1.HP -= Math.ceil(fract);
        } else if (playerAction === "/spell") {
            var num = 10 * r * player.LVL * player.MGC;
            var dem = (5 * mob1.MGC + 2 * mob1.STR) * mob1.LVL;
            var fract = num / dem / 1;
            mob1.HP -= Math.ceil(fract);
        }
        if (mobAttack === 1) {
            var num = 10 * r * mob1.LVL * mob1.STR;
            var dem = (5 * player.STR + 2 * player.MGC) * player.LVL;
            var fract = num / dem / 1;
            player.HP -= Math.ceil(fract);
        } else if (mobAttack === 2) {
            var num = 10 * r * mob1.LVL * mob1.MGC;
            var dem = (5 * player.MGC + 2 * player.STR) * player.LVL;
            var fract = num / dem / 1;
            player.HP -= Math.ceil(fract);
        }
        if (mob1.HP <= 0) {
            console.log("You have slayed the " + mob1.mobName + "!");
            inBattle = false;
        } else if (player.HP <= 0) {
            console.log("You died!");
            inBattle = false;
        }
        player.HP += 1;
    }
}
// This ends the entire battle engine. This will be upgraded.
var PlayingRPG = true;
while (PlayingRPG) {
    playerAction = " ";
    playerAction = prompt(promptMessage2);
    if (playerAction === "/gonorth" || playerAction === "/gosouth" || playerAction === "/goeast" || playerAction === "/gowest") {
        FuncMove(playerAction);
    } else if (playerAction === "/fight") {
        FuncFight();
    } else if (playerAction === "/exit") {
        PlayingRPG = false;
    }
}

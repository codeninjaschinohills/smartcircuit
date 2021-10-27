namespace SpriteKind {
    export const MenuButton = SpriteKind.create()
}
let menuOpen = true;

let currentLevel = 1;
let spacer = null



let goalPos1 = [149, 58]
let goalPos2 = [80, 43]
let goalPos3 = [149, 58]
let goalXArr = [spacer, goalPos1[0], goalPos2[0], goalPos3[0]]
let goalYArr = [spacer, goalPos1[1], goalPos2[1], goalPos3[1]]

let batteryPos1 = [21, 58]
let batteryPos2 = [21, 58]
let batteryPos3 = [21, 58]
let batteryXArr = [spacer, batteryPos1[0], batteryPos2[0], batteryPos3[0]]
let batteryYArr = [spacer, batteryPos1[1], batteryPos2[1], batteryPos3[1]]

let goalOn1 = assets.image`goalOn1`
let goalOn2 = assets.image`goalOn2`
//put in actual goal for level 3
let goalOn3 = assets.image`goalOn1`
let goalOnArr = [spacer, goalOn1, goalOn2, goalOn3]

let goalOff1 = assets.image`goalOff1`
let goalOff2 = assets.image`goalOff2`
//put in actual goal for level 3
let goalOff3 = assets.image`goalOff1`
let goalOffArr = [spacer, goalOff1, goalOff2, goalOff3]

let placedBlocks1 = assets.image`placedBlocksOverlay1`
let placedBlocks2 = assets.image`placedBlocksOverlay2`
let placedBlocks3 = assets.image`placedBlocksOverlay3`
let placedBlocksArr = [spacer, placedBlocks1, placedBlocks2, placedBlocks3]

let levLayout1 =
    [
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '->', '<>', '<>', '<>', '<>', '<>', '<>', 'G<', 'G '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '+>', '<>', '<>', '<>', '< ', '  ', '  ', 'G ', 'G '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ']
    ];
let levLayout2 = 
    [
        ['  ', 'v ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', 'v^', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '-^', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', 'G ', 'G ', '  ', '  ', '  ', '  '],
        ['  ', '+v', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '^v', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '^ ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ']
    ];
let levLayout3 = 
//put in actual level 3 layout here I didn't see it on Kyle's branch
    [
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '->', '<>', '<>', '<>', '<>', '<>', '<>', 'G<', 'G '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '+>', '<>', '<>', '<>', '< ', '  ', '  ', 'G ', 'G '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ']
    ];
let levLayoutArr = [spacer, levLayout1, levLayout2, levLayout3]

let switchLevel = function(levelNum: number){
    currentLevel = levelNum
    goal = sprites.create(goalOffArr[currentLevel], 0)
    goal.setImage(goalOffArr[levelNum]);
    goal.x = goalXArr[levelNum]
    goal.y = goalYArr[levelNum]
    battery = sprites.create(assets.image`batteryBlock`, 0)
    battery.x = batteryXArr[levelNum]
    battery.y = batteryYArr[levelNum]
    blockOverlay = sprites.create(placedBlocksArr[currentLevel], 0);
    blockOverlay.setImage(placedBlocksArr[levelNum])
    currentLayout = copyLayout(levLayoutArr[levelNum])
    //console.log(getLayoutString(currentLayout))
}


controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vertical && (curBlock.y - 32) >= 0) {
        curBlock.y -= 16
    } else if (!vertical && (curBlock.y - 16) > 0) {
        curBlock.y -= 16
    }
    if (selectorPanel == true) {
        if (vertical == true) {
            curBlock.setImage(assets.image`4BlockV`)
            curBlock.y = 76
            selectorPanel = false
            bottomOverlayTest.setImage(assets.image`bottomOverlay`)
        } else {
            curBlock.setImage(assets.image`4BlockH`)
            curBlock.y = 104
            selectorPanel = false
            bottomOverlayTest.setImage(assets.image`bottomOverlay`)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vertical == true && selectorPanel == false) {
        curBlock.setImage(assets.image`4BlockH`)
        vertical = false
        if(curBlock.x > 140){
            curBlock.x -= 48
        }
    } else if (selectorPanel == false) {
        curBlock.setImage(assets.image`4BlockV`)
        vertical = true
        if(curBlock.y > 80){
            curBlock.y -= 48
        }
    }
});

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vertical && selectorPanel == false) {
        testBlock = sprites.create(assets.image`4BlockV`, SpriteKind.Player)
        testBlock.z = 3
        testBlock.x = curBlock.x
        testBlock.y = curBlock.y
        //console.log(curBlock.x + "," + curBlock.y);
        //console.log();

        placedBlocks.push(testBlock)

        let layoutPos = blockToLayout(testBlock.x, testBlock.y)

        currentLayout[layoutPos.y + 0][layoutPos.x] += symbolWireSouth;
        currentLayout[layoutPos.y + 1][layoutPos.x] += symbolWireNorth + symbolWireSouth;
        currentLayout[layoutPos.y + 2][layoutPos.x] += symbolWireNorth + symbolWireSouth;
        currentLayout[layoutPos.y + 3][layoutPos.x] += symbolWireNorth;

    } else if (selectorPanel == false) {
        testBlock = sprites.create(assets.image`4BlockH`, SpriteKind.Player)
        testBlock.z = 3
        testBlock.x = curBlock.x
        testBlock.y = curBlock.y
        placedBlocks.push(testBlock)
        console.log(curBlock.x + "," + curBlock.y);

        let layoutPos = blockToLayout(testBlock.x, testBlock.y);
        //console.log(`sprite position=${testBlock.x},${testBlock.y}`);
        //console.log(`layout position=${layoutPos.x},${layoutPos.y}`);

        let wireWidth = 4;
        currentLayout[layoutPos.y][layoutPos.x + 0] += symbolWireEast;
        currentLayout[layoutPos.y][layoutPos.x + 1] += symbolWireEast + symbolWireWest;
        currentLayout[layoutPos.y][layoutPos.x + 2] += symbolWireEast + symbolWireWest;
        currentLayout[layoutPos.y][layoutPos.x + 3] += symbolWireWest;

        //console.log(getLayoutString(currentLayout));

        // symbolGoal = "G"

    }
    if (selectorPanel == true) {
        if (selectedButton == 1) {
            for (let i = 0; i <= placedBlocks.length - 1; i++) {
                placedBlocks[i].destroy()
            }
            //console.log(getLayoutString(currentLayout));
            currentLayout = copyLayout(levLayoutArr[currentLevel]);
            //console.log(getLayoutString(currentLayout));

            goal.setImage(goalOffArr[currentLevel])
            goal.x = goalXArr[currentLevel];
            goal.y = goalYArr[currentLevel];
            goal.z = 1;

            // TODO: How do we clear the currentLayout?
            // a hint is that there should be an easy way to reset it!
        } else {
            let positivePos = findSymbolInLayout(currentLayout, symbolPositive);
            let negativePos = findSymbolInLayout(currentLayout, symbolNegative);
            let negativePathCheck = pathTo(currentLayout, positivePos.x, positivePos.y, symbolGoal);
            let positivePathCheck = pathTo(currentLayout, negativePos.x, negativePos.y, symbolGoal);
            let shortCircuitCheck = pathTo(currentLayout, positivePos.x, positivePos.y, symbolNegative);

            if (positivePathCheck && negativePathCheck && !shortCircuitCheck) {
                console.log("Path Found Fully");
                goal.setImage(goalOnArr[currentLevel]);
                goal.x = goalXArr[currentLevel]
                goal.y = goalYArr[currentLevel];
                goal.z = 1;
                //Win code goes here

            } else if(positivePathCheck && negativePathCheck){
                console.log("Shortcircuit");
                //Shortcircuit fail goes here

            } else {
                console.log("Path Not Found");
                //Wire connection fail goes here
            }
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectorPanel == false) {
        if (vertical && (curBlock.x - 16) > 0) {
            curBlock.x -= 16;
        } else if ((curBlock.x - 32) > 0) {
            curBlock.x -= 16
        }
    } else {
        bottomOverlayTest.setImage(assets.image`bottomOverlay1`)
        selectedButton = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectorPanel == false) {
        if (vertical && (curBlock.x + 16) < 160) {
            curBlock.x += 16
        } else if ((curBlock.x + 32) < 160) {
            curBlock.x += 16
        }
    } else {
        bottomOverlayTest.setImage(assets.image`bottomOverlay2`)
        selectedButton = 2
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vertical == true) {
        if (curBlock.y + 16 < 90) {
            curBlock.y += 16
        } else {
            curBlock.setImage(assets.image`empty`)
            selectorPanel = true
            selectedButton = 2
            bottomOverlayTest.setImage(assets.image`bottomOverlay2`)
        }
    } else {
        if (curBlock.y + 16 < 106) {
            curBlock.y += 16
        } else {
            curBlock.setImage(assets.image`empty`)
            selectorPanel = true
            selectedButton = 2
            bottomOverlayTest.setImage(assets.image`bottomOverlay2`)
        }
    }
})

let placedBlocks: Sprite[] = []
let testBlock: Sprite = null
let selectorPanel = false
let bottomOverlayTest: Sprite = null
let vertical = false
let selectedButton = 0
let curBlock: Sprite = null
selectedButton = 2
let battery: Sprite = null;
let goal: Sprite = null;
//battery.x = 21
//battery.y = 58
//goal.x = 149
//goal.y = 58
//goal.z = 0;
vertical = true
//curBlock = sprites.create(assets.image`4BlockV`, SpriteKind.Player)
//bottomOverlayTest = sprites.create(assets.image`bottomOverlay`, SpriteKind.Player)
//bottomOverlayTest.z = 100
//curBlock.x = 8
//curBlock.y = 28
//curBlock.z = 3;
//scene.setBackgroundImage(assets.image`bg`)
let blockOverlay: Sprite = null
//blockOverlay.z = 2;



let layoutHeight = 7;
let layoutWidth = 10;

let symbolPositive = '+';
let symbolNegative = '-';
let symbolWireNorth = '^';
let symbolWireSouth = 'v';
let symbolWireEast = '>';
let symbolWireWest = '<';
let symbolGoal = 'G';
let symbolVisited = 'X';

// Copy and paste the empty layout to setup your own layout
let emptyLayout =
    [
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ']
    ];

// This layout matches this level
// Note how there can be two symbols in a spot, like a Goal and a Wire
let startingLayout =
    [
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '->', '<>', '<>', '<>', '<>', '<>', '<>', 'G<', 'G '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '+>', '<>', '<>', '<>', '< ', '  ', '  ', 'G ', 'G '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ']
    ];

let currentLayout = copyLayout(startingLayout);


// Returns true if there is a path by wire from 'startX', 'startY' layout coordinates
// to a spot in 'layout' containing all the 'endingSymbols'
function pathTo(layout: string[][], startX: number, startY: number, endingSymbols: string): boolean {
    // Calls the helper function below with a copy of 'layout' so we don't modify original
    return pathToHelper(copyLayout(layout), startX, startY, endingSymbols);
}

// The recursive function (meaning it calls itself) that determines if a path exists
function pathToHelper(layout: string[][], x: number, y: number, endingSymbols: string): boolean {
    // If we are off the grid in the x direction, then we are not at the goal
    if (x < 0 || x >= layoutWidth) {
        return false;
    }

    // If we are off the grid in the y direction, then we are not at the goal
    if (y < 0 || y >= layoutHeight) {
        return false;
    }

    let currentSymbols = layout[y][x];

    // If we have checked this spot before, don't check again!
    if (currentSymbols.indexOf(symbolVisited) != -1) {
        return false;
    }

    // Mark this spot as visited (add a 'X')
    layout[y][x] = currentSymbols + symbolVisited;

    // If this spot is our goal, then we made it!
    if (hasSymbols(endingSymbols, currentSymbols)) {
        return true;
    }

    // If we made it here, then we need to keep checking
    // See if a path exists from any adjacent spot to our goal
    // Remember we avoid rechecking spots by looking for the 'V'
    // markings we add as we go.

    let northCheck = false;
    let eastCheck = false;
    let southCheck = false;
    let westCheck = false;

    if (hasSymbols(symbolWireNorth, currentSymbols)) {
        northCheck = pathToHelper(layout, x, y - 1, endingSymbols);
    }

    if (hasSymbols(symbolWireSouth, currentSymbols)) {
        southCheck = pathToHelper(layout, x, y + 1, endingSymbols);
    }

    if (hasSymbols(symbolWireWest, currentSymbols)) {
        westCheck = pathToHelper(layout, x - 1, y, endingSymbols);
    }

    if (hasSymbols(symbolWireEast, currentSymbols)) {
        eastCheck = pathToHelper(layout, x + 1, y, endingSymbols);
    }

    // If any direction has a path, then return true
    return northCheck || southCheck || westCheck || eastCheck;
}

// Returns true if 'toCheck' contains all the characters found in 'required'
function hasSymbols(required: string, toCheck: string): boolean {
    for (let i = 0; i < required.length; i++) {
        if (toCheck.indexOf(required[i]) == -1) {
            return false;
        }
    }
    return true;
}

// Returns a copy of the 'layout' so you can make changes
// without modifying the original
function copyLayout(layout: string[][]): string[][] {
    let copyOfLayout = [];
    for (let y = 0; y < layoutHeight; y++) {
        let row = [];
        for (let x = 0; x < layoutWidth; x++) {
            row.push(layout[y][x]);
        }
        copyOfLayout.push(row);
    }
    return copyOfLayout;
}

// Returns the coordinates of the first 'sym' that is found
// Used to easily get coordinates of special spots like
// the positive and negative portions of the cirucit
function findSymbolInLayout(layout: string[][], sym: string) {
    for (let y = 0; y < layoutHeight; y++) {
        for (let x = 0; x < layoutWidth; x++) {
            if (hasSymbols(sym, layout[y][x])) {
                return { x: x, y: y };
            }
        }
    }
    return null;
}

// Converts a block's position on MakeCode screen to coordinates in a layout
function blockToLayout(blockX: number, blockY: number) {
    let gridSpacing = 16;
    // The returned object has a .x and .y property
    if (!vertical) {
        return {
            x: (blockX - 32) / gridSpacing,
            y: (blockY - 8) / gridSpacing
        };
    } else {
        return {
            x: (blockX - 8) / gridSpacing,
            y: (blockY - 28) / gridSpacing
        };
    }
};
// Takes a 'layout' and returns a string that can be printed for debugging
function getLayoutString(layout: string[][]) {
    let layoutString = '[\n';
    for (let y = 0; y < layoutHeight; y++) {
        layoutString += `${y}[`
        for (let x = 0; x < layoutWidth; x++) {
            layoutString += `'${padString(layout[y][x], 5)}', `
        }
        layoutString += ']\n'
    }
    layoutString += ']\n'
    return layoutString;
}

// A helper function that pads a string 's' with 'n' underscores
// Ensures spacing looks good for getLayoutString function
// Underscores were used because spaces don't print to the console well
function padString(s: string, n: number) {
    let newString = s;
    newString = newString.replaceAll(' ', '_');
    while (newString.length < n) {
        newString += '_';
    }
    return newString.split('').sort().join('');;
}

/*
let testLayout =
    [
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '->', '<>', '<>', '<>', '<>', '<>', '<>', 'G<', 'G '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '+>', '<>', '<>', '<>', '< ', '  ', '  ', 'G ', 'G '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
        ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ']
    ];
let pos = findSymbolInLayout(testLayout, '+');
if (pathTo(testLayout, pos.x, pos.y, symbolGoal)) {
    console.log("A PATH WAS FOUND!");
}
*/

//switchLevel(1)

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (area == 1) {
        if (levelsOpened == false) {
            StartButton.setImage(img`
                ................................
                ..5555555555555555555555555555..
                .588888888888888888888888888885.
                58888888888888888888888888888885
                58777788878888888888887887778885
                58788888878888888888887887777885
                58788888878888888888887887777785
                51777788777877788777877787777775
                51888788878878788788887887777715
                58888788878878788788887887777885
                58777788878877778788887887778885
                58888888888888888888888888888885
                58888888888888888888888888888885
                .588888888888888888888888888885.
                ..5555555555555555555555555555..
                ................................
                `)
            Credits.setImage(img`
                ................................
                ..8888888888888888888888888888..
                .888888888888888888888888888888.
                88888888888888888888888888888888
                88888555588888888888588885888888
                88888588888888888888585885888888
                88888588888888888888588855588888
                11888588885558555855585885888811
                11888588885888555858585885888811
                88888588885888588858585885888888
                88888555585888555855585885888888
                88888888888888888888888888888888
                88888888888888888888888888888888
                .888888888888888888888888888888.
                ..8888888888888888888888888888..
                ................................
                `)
            selected = 1
        }
        if (levelsOpened == true) {
            Level_1.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                .........111..........
                ........1fff1.........
                ........111f1.........
                ..........1f1.........
                ..........1f1.........
                .........11f11........
                ........1fffff1.......
                .........11111........
                ......................
                ......................
                ..111111111111111111..
                .11111111111111111111.
                11111ffffffffff1111111
                111ffffffffffffff11111
                11ffffffffffffffff1ff1
                11ffffddddddddffffff11
                11fddddddddddddddfff11
                11fddfffddddfffddf1ff1
                11fdddffddddffdddf11f1
                11fddddddddddddddf1111
                11fddddddddddddddf1111
                11ffffddddddddffff1111
                11ffffffffffffffff1111
                111ffffffffffffff11111
                .1111fffffffffff11111.
                ..111111111111111111..
                `)
            Level_2.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ........3333..........
                .......355553.........
                ........311153........
                .........31153........
                ........35553.........
                .......355113.........
                .......3555553........
                ........33333.........
                ......................
                ......................
                ..333333333333333333..
                .35555555555555555553.
                35555ffffffffff5555553
                355ffffffffffffff55553
                35ffffffffffffffff5ff3
                35ffffddddddddffffff53
                35fddddddddddddddfff53
                35fddfffddddfffddf5ff3
                35fdddffddddffdddf55f3
                35fddddddddddddddf5553
                35fddddddddddddddf5553
                35ffffddddddddffff5553
                35ffffffffffffffff5553
                355ffffffffffffff55553
                .3555fffffffffff55553.
                ..333333333333333333..
                `)
            Level_3.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ........11111.........
                .......14444411.......
                ........1111141.......
                ...........1141.......
                ..........14441.......
                ........1111141.......
                .......1444441........
                ........11111.........
                ......................
                ......................
                ..444444444444444444..
                .44444444444444444444.
                44444ffffffffff4444444
                444ffffffffffffff44444
                44ffffffffffffffff4ff4
                44ffffddddddddffffff44
                44fddddddddddddddfff44
                44fddfffddddfffddf4ff4
                44fdddffddddffdddf44f4
                44fddddddddddddddf4444
                44fddddddddddddddf4444
                44ffffddddddddffff4444
                44ffffffffffffffff4444
                444ffffffffffffff44444
                .4444fffffffffff44444.
                ..444444444444444444..
                `)
            StartButton.setImage(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                `)
            Credits.setImage(img`
                ................................
                ..8888888888888888888888888888..
                .888888888888888888888888888888.
                88888888888888888888888888888888
                88888555588888888888588885888888
                88888588888888888888585885888888
                88888588888888888888588855588888
                11888588885558555855585885888811
                11888588885888555858585885888811
                88888588885888588858585885888888
                88888555585888555855585885888888
                88888888888888888888888888888888
                88888888888888888888888888888888
                .888888888888888888888888888888.
                ..8888888888888888888888888888..
                ................................
                `)
            selected = 3
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Credits.setImage(img`
        ................................
        ..8888888888888888888888888888..
        .888888888888888888888888888888.
        88888888888888888888888888888888
        88888555588888888888588885888888
        88888588888888888888585885888888
        88888588888888888888588855588888
        11888588885558555855585885888811
        11888588885888555858585885888811
        88888588885888588858585885888888
        88888555585888555855585885888888
        88888888888888888888888888888888
        88888888888888888888888888888888
        .888888888888888888888888888888.
        ..8888888888888888888888888888..
        ................................
        `)
    StartButton.setImage(img`
        ................................
        ..8888888888888888888888888888..
        .888888888888888888888888888888.
        88888888888888888888888888888888
        88777788878888888888887887778888
        88788888878888888888887887777888
        88788888878888888888887887777788
        11777788777877788777877787777771
        11888788878878788788887887777711
        88888788878878788788887887777888
        88777788878877778788887887778888
        88888888888888888888888888888888
        88888888888888888888888888888888
        .888888888888888888888888888888.
        ..8888888888888888888888888888..
        ................................
        `)
    Credits.setPosition(StartButton.x, 80)
    Level_1.setImage(img`
        . 
        `)
    Level_2.setImage(img`
        . 
        `)
    Level_3.setImage(img`
        . 
        `)
    levelsOpened = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (area == 1) {
        if (selected == 2) {
            Credits.setImage(img`
                ..5555555555555555555555555555......5555555555555555555555555555555555555555555555......
                .588888888888888888888888888885....588888888888888888888888888888888888888888888885.....
                58885558888888888885858858888885..58888888888888888888888888888888888888888888888885....
                58885888888855588885888858888885..58555888888888888888888888888888888888888888888885....
                58885888555855588555858555888885..58588888888888888888888888888888888888888888888885....
                58885888588858888585858858888885..58555855585588888888888888888888888888888888888885....
                58885558588855588555858858888885..58588858585888888888888888888888888888888888888885....
                58888888888888888888888888888885..58588855585888888888888888888888888888888888888885....
                58555888888888888855888888888885..58888888888888888888888888888888888888888888888885....
                58555855588585855855888888888885..58888888888888888888888888888888888888888888888885....
                58558858588585858858888888888885..58555888888888888888888888888888588888888888888585....
                58585855558855855855888888888885..58588888888888888888885558558558888888888888888585....
                58888888888885888888888888888885..58588855585558555855585558588588585558555855588585....
                58888888888858888888888888888885..58588858585858585858885888858858585858585858588585....
                58888888888888888888888888888885..58555855585858555858885558558558585558585855558585....
                58555858588888558888888888888885..58888888888888885888888888888888888888888888888885....
                58585858885858558558888888888885..58888888888888555888888888888888888888888888888885....
                58585858585858588588888888888885..58888888888888888888888888888888888888888888888885....
                58555858588588558588888888888885..58555888888888855585888888885858558888888885588885....
                58888888888888888888888888888885..58585855585558858885888555885858558555855585588885....
                58585888885855888888888888888885..58555858585858858885558585885858588585858585888885....
                58558858585855888888888888888885..58585855585558855585858555585858558585855585588885....
                58558858585858888888888888888885..58888858885888888888888888888888888888888588888885....
                58585885585855888888888888888885..58888858885888888888888888888888888888855588888885....
                58888888588888888888888888888885..58888888888888888888888888888888888888888888888885....
                58888885888888888888888888888885..58555855585558588888888888888888888888888888888885....
                58888888888888888888888888888885..58885858588858588888888888888888888888888888888885....
                58555588888888888888888888888885..58555858585558588888888888888888888888888888888885....
                58858885558555858588888888888885..58588858585888588888888888888888888888888888888885....
                58858885858585858588888888888885..58555855585558588888888888888888888888888888888885....
                58858885558585885588888888888885..58888888888888888888888888888888888888888888888855....
                58888888888888888588888888888885...588888888888888888888888888888888888888888888885.....
                58888888888888885888888888888885....5555555555555555555555555555555555555555555555......
                .588888888888888888888888888885.........................................................
                ..5555555555555555555555555555..........................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                ........................................................................................
                `)
            tabOpen = 1
        }
        if (selected == 1) {
            Credits.setImage(img`
                ................................
                ..8888888888888888888888888888..
                .888888888888888888888888888888.
                88888888888888888888888888888888
                88888555588888888888588885888888
                88888588888888888888585885888888
                88888588888888888888588855588888
                11888588885558555855585885888811
                11888588885888555858585885888811
                88888588885888588858585885888888
                88888555585888555855585885888888
                88888888888888888888888888888888
                88888888888888888888888888888888
                .888888888888888888888888888888.
                ..8888888888888888888888888888..
                ................................
                `)
            Credits.setPosition(StartButton.x, 80)
            StartButton.setImage(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                `)
            Level_1.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                .........111..........
                ........1fff1.........
                ........111f1.........
                ..........1f1.........
                ..........1f1.........
                .........11f11........
                ........1fffff1.......
                .........11111........
                ......................
                ......................
                ..111111111111111111..
                .11111111111111111111.
                11111ffffffffff1111111
                111ffffffffffffff11111
                11ffffffffffffffff1ff1
                11ffffddddddddffffff11
                11fddddddddddddddfff11
                11fddfffddddfffddf1ff1
                11fdddffddddffdddf11f1
                11fddddddddddddddf1111
                11fddddddddddddddf1111
                11ffffddddddddffff1111
                11ffffffffffffffff1111
                111ffffffffffffff11111
                .1111fffffffffff11111.
                ..111111111111111111..
                `)
            Level_1.setPosition(55, StartButton.y - 10)
            Level_2.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ........1111..........
                .......155551.........
                ........111151........
                .........11151........
                ........15551.........
                .......155111.........
                .......1555551........
                ........11111.........
                ......................
                ......................
                ..555555555555555555..
                .55555555555555555555.
                55555ffffffffff5555555
                555ffffffffffffff55555
                55ffffffffffffffff5ff5
                55ffffddddddddffffff55
                55fddddddddddddddfff55
                55fddfffddddfffddf5ff5
                55fdddffddddffdddf55f5
                55fddddddddddddddf5555
                55fddddddddddddddf5555
                55ffffddddddddffff5555
                55ffffffffffffffff5555
                555ffffffffffffff55555
                .5555fffffffffff55555.
                ..555555555555555555..
                `)
            Level_2.y = StartButton.y - 25
            Level_2.x = StartButton.x
            Level_3.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ........11111.........
                .......14444411.......
                ........1111141.......
                ...........1141.......
                ..........14441.......
                ........1111141.......
                .......1444441........
                ........11111.........
                ......................
                ......................
                ..444444444444444444..
                .44444444444444444444.
                44444ffffffffff4444444
                444ffffffffffffff44444
                44ffffffffffffffff4ff4
                44ffffddddddddffffff44
                44fddddddddddddddfff44
                44fddfffddddfffddf4ff4
                44fdddffddddffdddf44f4
                44fddddddddddddddf4444
                44fddddddddddddddf4444
                44ffffddddddddffff4444
                44ffffffffffffffff4444
                444ffffffffffffff44444
                .4444fffffffffff44444.
                ..444444444444444444..
                `)
            Level_3.setPosition(105, StartButton.y - 10)
            levelsOpened = true
        }
        if (selected == 3) {
            menuOpen = false;
            //let placedBlocks: Sprite[] = []
            //let testBlock: Sprite = null
            //let selectorPanel = false
            //let bottomOverlayTest: Sprite = null
            //let vertical = false
            //let selectedButton = 0
            //let curBlock: Sprite = null
            //selectedButton = 2
            let battery = sprites.create(assets.image`batteryBlock`, 0)
            let goal = sprites.create(goalOffArr[currentLevel], 0)
            //battery.x = 21
            //battery.y = 58
            //goal.x = 149
            //goal.y = 58
            //goal.z = 0;
            vertical = true
            curBlock = sprites.create(assets.image`4BlockV`, SpriteKind.Player)
            bottomOverlayTest = sprites.create(assets.image`bottomOverlay`, SpriteKind.Player)
            bottomOverlayTest.z = 100
            //curBlock.x = 8
            //curBlock.y = 28
            //curBlock.z = 3;
            //scene.setBackgroundImage(assets.image`bg`)
            //let blockOverlay = sprites.create(placedBlocksArr[currentLevel], 0);
            //blockOverlay.z = 2;
            
            switchLevel(2);
        } else if (selected == 4) {
            menuOpen = false;
            let placedBlocks: Sprite[] = []
            let testBlock: Sprite = null
            let selectorPanel = false
            let bottomOverlayTest: Sprite = null
            let vertical = false
            let selectedButton = 0
            let curBlock: Sprite = null
            selectedButton = 2
            let battery = sprites.create(assets.image`batteryBlock`, 0)
            let goal = sprites.create(goalOffArr[currentLevel], 0)
            battery.x = 21
            battery.y = 58
            goal.x = 149
            goal.y = 58
            goal.z = 0;
            vertical = true
            curBlock = sprites.create(assets.image`4BlockV`, SpriteKind.Player)
            bottomOverlayTest = sprites.create(assets.image`bottomOverlay`, SpriteKind.Player)
            bottomOverlayTest.z = 100
            curBlock.x = 8
            curBlock.y = 28
            curBlock.z = 3;
            scene.setBackgroundImage(assets.image`bg`)
            //let blockOverlay = sprites.create(placedBlocksArr[currentLevel], 0);
            //blockOverlay.z = 2;
            switchLevel(1);
        } else if (selected == 5) {
            menuOpen = false;
            let placedBlocks: Sprite[] = []
            let testBlock: Sprite = null
            let selectorPanel = false
            let bottomOverlayTest: Sprite = null
            let vertical = false
            let selectedButton = 0
            let curBlock: Sprite = null
            selectedButton = 2
            let battery = sprites.create(assets.image`batteryBlock`, 0)
            let goal = sprites.create(goalOffArr[currentLevel], 0)
            battery.x = 21
            battery.y = 58
            goal.x = 149
            goal.y = 58
            goal.z = 0;
            vertical = true
            curBlock = sprites.create(assets.image`4BlockV`, SpriteKind.Player)
            bottomOverlayTest = sprites.create(assets.image`bottomOverlay`, SpriteKind.Player)
            bottomOverlayTest.z = 100
            curBlock.x = 8
            curBlock.y = 28
            curBlock.z = 3;
            scene.setBackgroundImage(assets.image`bg`)
            //let blockOverlay = sprites.create(placedBlocksArr[currentLevel], 0);
            //blockOverlay.z = 2;
            switchLevel(3);
        }
    }
    if (area == 2) {

    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (area == 1) {
        if (levelsOpened == true) {
            Level_1.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                .........333..........
                ........3fff3.........
                .........33f3.........
                ..........3f3.........
                ..........3f3.........
                .........33f33........
                ........3fffff3.......
                .........33333........
                ......................
                ......................
                ..333333333333333333..
                .31111111111111111113.
                31111ffffffffff1111113
                311ffffffffffffff11113
                31ffffffffffffffff1ff3
                31ffffddddddddffffff13
                31fddddddddddddddfff13
                31fddfffddddfffddf1ff3
                31fdddffddddffdddf11f3
                31fddddddddddddddf1113
                31fddddddddddddddf1113
                31ffffddddddddffff1113
                31ffffffffffffffff1113
                311ffffffffffffff11113
                .3111fffffffffff11113.
                ..333333333333333333..
                `)
            Level_3.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ........11111.........
                .......14444411.......
                ........1111141.......
                ...........1141.......
                ..........14441.......
                ........1111141.......
                .......1444441........
                ........11111.........
                ......................
                ......................
                ..444444444444444444..
                .44444444444444444444.
                44444ffffffffff4444444
                444ffffffffffffff44444
                44ffffffffffffffff4ff4
                44ffffddddddddffffff44
                44fddddddddddddddfff44
                44fddfffddddfffddf4ff4
                44fdddffddddffdddf44f4
                44fddddddddddddddf4444
                44fddddddddddddddf4444
                44ffffddddddddffff4444
                44ffffffffffffffff4444
                444ffffffffffffff44444
                .4444fffffffffff44444.
                ..444444444444444444..
                `)
            Credits.setImage(img`
                ................................
                ..8888888888888888888888888888..
                .888888888888888888888888888888.
                88888888888888888888888888888888
                88888555588888888888588885888888
                88888588888888888888585885888888
                88888588888888888888588855588888
                11888588885558555855585885888811
                11888588885888555858585885888811
                88888588885888588858585885888888
                88888555585888555855585885888888
                88888888888888888888888888888888
                88888888888888888888888888888888
                .888888888888888888888888888888.
                ..8888888888888888888888888888..
                ................................
                `)
            Level_2.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ........1111..........
                .......155551.........
                ........111151........
                .........11151........
                ........15551.........
                .......155111.........
                .......1555551........
                ........11111.........
                ......................
                ......................
                ..555555555555555555..
                .55555555555555555555.
                55555ffffffffff5555555
                555ffffffffffffff55555
                55ffffffffffffffff5ff5
                55ffffddddddddffffff55
                55fddddddddddddddfff55
                55fddfffddddfffddf5ff5
                55fdddffddddffdddf55f5
                55fddddddddddddddf5555
                55fddddddddddddddf5555
                55ffffddddddddffff5555
                55ffffffffffffffff5555
                555ffffffffffffff55555
                .5555fffffffffff55555.
                ..555555555555555555..
                `)
            StartButton.setImage(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                `)
            selected = 5
        }
    }
    if (area == 2) {
        Next_Level = sprites.create(img`
            ................................
            ..8888888888888888888888888888..
            .888888888888888888888888888888.
            88888888888888888888888888888888
            88888888888888888888888888888888
            88888888888888888888889988888888
            88888898898998989889889998888888
            11888899898998898899989999888811
            11888898998988898889889999888811
            88888898898998989889889998888888
            88888888888888888888889988888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            .888888888888888888888888888888.
            ..8888888888888888888888888888..
            ................................
            `, SpriteKind.Player)
        Restart = sprites.create(img`
            ................................
            ..5555555555555555555555555555..
            .588888888888888888888888888885.
            58888888888888888888888888888885
            58888888888888888888888888888885
            58888888888888888888888888888885
            588aaa8aa8aaa8aaa8aaa8aaa8aaa885
            518a8a8aa8a8888a88a8a8a8a88a8815
            518aa88a888a888a88aaa8aa888a8815
            588a8a8aa8aaa88a88a8a8a8a88a8885
            58888888888888888888888888888885
            58888888888888888888888888888885
            58888888888888888888888888888885
            .588888888888888888888888888885.
            ..5555555555555555555555555555..
            ................................
            `, SpriteKind.Player)
        MenuS = sprites.create(img`
            ................................
            ..8888888888888888888888888888..
            .888888888888888888888888888888.
            88888888888888888888888888888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            8888888f888f8fff8888888888888888
            1188888ff8ff8fff8fff8f8f88888811
            1188888f8f8f8ff88f8f8f8f88888811
            8888888f8f8f8fff8f8f8ffff8888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            .888888888888888888888888888888.
            ..8888888888888888888888888888..
            ................................
            `, SpriteKind.Player)
        Restart.setPosition(50, 60)
        Next_Level.setPosition(100, 60)
        MenuS.setPosition(75, 80)
        selectedSS = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (area == 1) {
        if (levelsOpened == true) {
            Level_1.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                .........111..........
                ........1fff1.........
                .........11f1.........
                ..........1f1.........
                ..........1f1.........
                .........11f11........
                ........1fffff1.......
                .........11111........
                ......................
                ......................
                ..111111111111111111..
                .11111111111111111111.
                11111ffffffffff1111111
                111ffffffffffffff11111
                11ffffffffffffffff1ff1
                11ffffddddddddffffff11
                11fddddddddddddddfff11
                11fddfffddddfffddf1ff1
                11fdddffddddffdddf11f1
                11fddddddddddddddf1111
                11fddddddddddddddf1111
                11ffffddddddddffff1111
                11ffffffffffffffff1111
                111ffffffffffffff11111
                .1111fffffffffff11111.
                ..111111111111111111..
                `)
            Level_3.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ........33333.........
                .......34444433.......
                ........3331143.......
                ...........3143.......
                ..........34443.......
                ........3311143.......
                .......3444443........
                ........33333.........
                ......................
                ......................
                ..333333333333333333..
                .34444444444444444443.
                34444ffffffffff4444443
                344ffffffffffffff44443
                34ffffffffffffffff4ff3
                34ffffddddddddffffff43
                34fddddddddddddddfff43
                34fddfffddddfffddf4ff3
                34fdddffddddffdddf44f3
                34fddddddddddddddf4443
                34fddddddddddddddf4443
                34ffffddddddddffff4443
                34ffffffffffffffff4443
                344ffffffffffffff44443
                .3444fffffffffff44443.
                ..333333333333333333..
                `)
            Credits.setImage(img`
                ................................
                ..8888888888888888888888888888..
                .888888888888888888888888888888.
                88888888888888888888888888888888
                88888555588888888888588885888888
                88888588888888888888585885888888
                88888588888888888888588855588888
                11888588885558555855585885888811
                11888588885888555858585885888811
                88888588885888588858585885888888
                88888555585888555855585885888888
                88888888888888888888888888888888
                88888888888888888888888888888888
                .888888888888888888888888888888.
                ..8888888888888888888888888888..
                ................................
                `)
            Level_2.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ........1111..........
                .......155551.........
                ........111151........
                .........11151........
                ........15551.........
                .......155111.........
                .......1555551........
                ........11111.........
                ......................
                ......................
                ..555555555555555555..
                .55555555555555555555.
                55555ffffffffff5555555
                555ffffffffffffff55555
                55ffffffffffffffff5ff5
                55ffffddddddddffffff55
                55fddddddddddddddfff55
                55fddfffddddfffddf5ff5
                55fdddffddddffdddf55f5
                55fddddddddddddddf5555
                55fddddddddddddddf5555
                55ffffddddddddffff5555
                55ffffffffffffffff5555
                555ffffffffffffff55555
                .5555fffffffffff55555.
                ..555555555555555555..
                `)
            StartButton.setImage(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                `)
            selected = 4
        }
    }
    if (area == 2) {
        Next_Level = sprites.create(img`
            ................................
            ..5555555555555555555555555555..
            .588888888888888888888888888885.
            58888888888888888888888888888885
            58888888888888888888888888888885
            58888888888888888888889988888885
            58888898898998989889889998888885
            51888899898998898899989999888815
            51888898998988898889889999888815
            58888898898998989889889998888885
            58888888888888888888889988888885
            58888888888888888888888888888885
            58888888888888888888888888888885
            .588888888888888888888888888885.
            ..5555555555555555555555555555..
            ................................
            `, SpriteKind.Player)
        Restart = sprites.create(img`
            ................................
            ..8888888888888888888888888888..
            .888888888888888888888888888888.
            88888888888888888888888888888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            888aaa8aa8aaa8aaa8aaa8aaa8aaa888
            118a8a8aa8a8888a88a8a8a8a88a8811
            118aa88a888a888a88aaa8aa888a8811
            888a8a8aa8aaa88a88a8a8a8a88a8888
            88888888888888888888888888888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            .888888888888888888888888888888.
            ..8888888888888888888888888888..
            ................................
            `, SpriteKind.Player)
        MenuS = sprites.create(img`
            ................................
            ..8888888888888888888888888888..
            .888888888888888888888888888888.
            88888888888888888888888888888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            8888888f888f8fff8888888888888888
            1188888ff8ff8fff8fff8f8f88888811
            1188888f8f8f8ff88f8f8f8f88888811
            8888888f8f8f8fff8f8f8ffff8888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            .888888888888888888888888888888.
            ..8888888888888888888888888888..
            ................................
            `, SpriteKind.Player)
        Restart.setPosition(50, 60)
        Next_Level.setPosition(100, 60)
        MenuS.setPosition(75, 80)
        selectedSS = 2
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (area == 1) {
        if (levelsOpened == false) {
            StartButton.setImage(img`
                ................................
                ..8888888888888888888888888888..
                .888888888888888888888888888888.
                88888888888888888888888888888888
                88777788878888888888887887778888
                88788888878888888888887887777888
                88788888878888888888887887777788
                11777788777877788777877787777771
                11888788878878788788887887777711
                88888788878878788788887887777888
                88777788878877778788887887778888
                88888888888888888888888888888888
                88888888888888888888888888888888
                .888888888888888888888888888888.
                ..8888888888888888888888888888..
                ................................
                `)
            Credits.setImage(img`
                ................................
                ..5555555555555555555555555555..
                .588888888888888888888888888885.
                58888888888888888888888888888885
                58888555588888888888588885888885
                58888588888888888888585885888885
                58888588888888888888588855588885
                51888588885558555855585885888815
                51888588885888555858585885888815
                58888588885888588858585885888885
                58888555585888555855585885888885
                58888888888888888888888888888885
                58888888888888888888888888888885
                .588888888888888888888888888885.
                ..5555555555555555555555555555..
                ................................
                `)
            selected = 2
        } else {
            StartButton.setImage(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                `)
            Credits.setImage(img`
                ................................
                ..5555555555555555555555555555..
                .588888888888888888888888888885.
                58888888888888888888888888888885
                58888555588888888888588885888885
                58888588888888888888585885888885
                58888588888888888888588855588885
                51888588885558555855585885888815
                51888588885888555858585885888815
                58888588885888588858585885888885
                58888555585888555855585885888885
                58888888888888888888888888888885
                58888888888888888888888888888885
                .588888888888888888888888888885.
                ..5555555555555555555555555555..
                ................................
                `)
            Level_1.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                .........111..........
                ........1fff1.........
                ........111f1.........
                ..........1f1.........
                ..........1f1.........
                .........11f11........
                ........1fffff1.......
                .........11111........
                ......................
                ......................
                ..111111111111111111..
                .11111111111111111111.
                11111ffffffffff1111111
                111ffffffffffffff11111
                11ffffffffffffffff1ff1
                11ffffddddddddffffff11
                11fddddddddddddddfff11
                11fddfffddddfffddf1ff1
                11fdddffddddffdddf11f1
                11fddddddddddddddf1111
                11fddddddddddddddf1111
                11ffffddddddddffff1111
                11ffffffffffffffff1111
                111ffffffffffffff11111
                .1111fffffffffff11111.
                ..111111111111111111..
                `)
            Level_2.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ........1111..........
                .......155551.........
                ........111151........
                .........11151........
                ........15551.........
                .......155111.........
                .......1555551........
                ........11111.........
                ......................
                ......................
                ..555555555555555555..
                .55555555555555555555.
                55555ffffffffff5555555
                555ffffffffffffff55555
                55ffffffffffffffff5ff5
                55ffffddddddddffffff55
                55fddddddddddddddfff55
                55fddfffddddfffddf5ff5
                55fdddffddddffdddf55f5
                55fddddddddddddddf5555
                55fddddddddddddddf5555
                55ffffddddddddffff5555
                55ffffffffffffffff5555
                555ffffffffffffff55555
                .5555fffffffffff55555.
                ..555555555555555555..
                `)
            Level_3.setImage(img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ........11111.........
                .......14444411.......
                ........1111141.......
                ...........1141.......
                ..........14441.......
                ........1111141.......
                .......1444441........
                ........11111.........
                ......................
                ......................
                ..444444444444444444..
                .44444444444444444444.
                44444ffffffffff4444444
                444ffffffffffffff44444
                44ffffffffffffffff4ff4
                44ffffddddddddffffff44
                44fddddddddddddddfff44
                44fddfffddddfffddf4ff4
                44fdddffddddffdddf44f4
                44fddddddddddddddf4444
                44fddddddddddddddf4444
                44ffffddddddddffff4444
                44ffffffffffffffff4444
                444ffffffffffffff44444
                .4444fffffffffff44444.
                ..444444444444444444..
                `)
            selected = 2
        }
    }
    if (area == 2) {
        Next_Level = sprites.create(img`
            ................................
            ..8888888888888888888888888888..
            .888888888888888888888888888888.
            88888888888888888888888888888888
            88888888888888888888888888888888
            88888888888888888888889988888888
            88888898898998989889889998888888
            11888899898998898899989999888811
            11888898998988898889889999888811
            88888898898998989889889998888888
            88888888888888888888889988888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            .888888888888888888888888888888.
            ..8888888888888888888888888888..
            ................................
            `, SpriteKind.Player)
        Restart = sprites.create(img`
            ................................
            ..8888888888888888888888888888..
            .888888888888888888888888888888.
            88888888888888888888888888888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            888aaa8aa8aaa8aaa8aaa8aaa8aaa888
            118a8a8aa8a8888a88a8a8a8a88a8811
            118aa88a888a888a88aaa8aa888a8811
            888a8a8aa8aaa88a88a8a8a8a88a8888
            88888888888888888888888888888888
            88888888888888888888888888888888
            88888888888888888888888888888888
            .888888888888888888888888888888.
            ..8888888888888888888888888888..
            ................................
            `, SpriteKind.Player)
        MenuS = sprites.create(img`
            ................................
            ..5555555555555555555555555555..
            .588888888888888888888888888885.
            58888888888888888888888888888885
            58888888888888888888888888888885
            58888888888888888888888888888885
            5888888f888f8fff8888888888888885
            5188888ff8ff8fff8fff8f8f88888815
            5188888f8f8f8ff88f8f8f8f88888815
            5888888f8f8f8fff8f8f8ffff8888885
            58888888888888888888888888888885
            58888888888888888888888888888885
            58888888888888888888888888888885
            .588888888888888888888888888885.
            ..5555555555555555555555555555..
            ................................
            `, SpriteKind.Player)
        Restart.setPosition(50, 60)
        Next_Level.setPosition(100, 60)
        MenuS.setPosition(75, 80)
        selectedSS = 3
    }
});
let selectedSS = 0
let tabOpen = 0
let MenuS: Sprite = null
let Restart: Sprite = null
let Next_Level: Sprite = null
let Good_job: Sprite = null
let Level_3: Sprite = null
let Level_2: Sprite = null
let Level_1: Sprite = null
let levelsOpened = false
let selected = 0
let Title: Sprite = null
let Credits: Sprite = null
let StartButton: Sprite = null
let area = 0

area = 1
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
if (area == 1) {
    StartButton = sprites.create(img`
        ................................
        ..8888888888888888888888888888..
        .888888888888888888888888888888.
        88888888888888888888888888888888
        88777788878888888888887887778888
        88788888878888888888887887777888
        88788888878888888888887887777788
        11777788777877788777877787777771
        11888788878878788788887887777711
        88888788878878788788887887777888
        88777788878877778788887887778888
        88888888888888888888888888888888
        88888888888888888888888888888888
        .888888888888888888888888888888.
        ..8888888888888888888888888888..
        ................................
        `, SpriteKind.MenuButton)
    Credits = sprites.create(img`
        ................................
        ..8888888888888888888888888888..
        .888888888888888888888888888888.
        88888888888888888888888888888888
        88888555588888888888588885888888
        88888588888888888888585885888888
        88888588888888888888588855588888
        11888588885558555855585885888811
        11888588885888555858585885888811
        88888588885888588858585885888888
        88888555585888555855585885888888
        88888888888888888888888888888888
        88888888888888888888888888888888
        .888888888888888888888888888888.
        ..8888888888888888888888888888..
        ................................
        `, SpriteKind.MenuButton)
    Title = sprites.create(img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ...............88888888.........................................
        ...............8................................................
        ...............8................................................
        ...............8........................8..8....................
        ...............8888888..8...............8..8....................
        .....................8..88888.888..888.888.8....................
        .....................8..8.8.8.858..8....8.......................
        ...............8888888..8.8.8.8888.8....8..5....................
        ................................................................
        ...............8888888..........................................
        ...............8................................................
        ...............8................................................
        ...............8.......5..............8..8..8...................
        ...............8.........................8..8...................
        ...............8.......8.888.888.8.8..8.888.8...................
        ...............8.......8.8...8...8.8..8..8......................
        ...............8888888.8.8...888.8888.8..8..5...................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `, SpriteKind.Player)
    Title.y = 10
    Credits.setPosition(StartButton.x, 80)
    selected = 1
    levelsOpened = false
    Level_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Level_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Level_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
if (area == 2) {
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        ddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11dddddddddddddd11ddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    Good_job = sprites.create(img`
        ...................................................................................
        ...................................................................................
        88888888..888888888..888888888..8888888.......88888888888..888888888..8888888...888
        81888818..818888818..818888818..81888818......81888188818..818888818..81888818..818
        88888888..888888888..888888888..88888888......88888888888..888888888..88888888..888
        888.......888...888..888...888..888..888..........888......888...888..888..888..888
        888.......888...888..888...888..888..888..........888......888...888..888..888..888
        888.......888...888..888...888..888..888..........888......888...888..8888888...888
        888.8888..888...888..888...888..888..888..........888......888...888..8888888...818
        888.8818..888...888..888...888..888..888..........888......888...888..888..888..888
        888.8888..888888888..888888888..888..888..........888......888888888..888..888.....
        88888888..888888888..888888888..88888888......8888888......888888888..88888888..888
        81888818..818888818..818888818..81888818......8188818......818888818..81888818..818
        88888888..888888888..888888888..8888888.......8888888......888888888..8888888...888
        ...................................................................................
        ...................................................................................
        `, SpriteKind.Player)
    Good_job.setPosition(75, 15)
    Next_Level = sprites.create(img`
        ................................
        ..8888888888888888888888888888..
        .888888888888888888888888888888.
        88888888888888888888888888888888
        88888888888888888888888888888888
        88888888888888888888889988888888
        88888898898998989889889998888888
        11888899898998898899989999888811
        11888898998988898889889999888811
        88888898898998989889889998888888
        88888888888888888888889988888888
        88888888888888888888888888888888
        88888888888888888888888888888888
        .888888888888888888888888888888.
        ..8888888888888888888888888888..
        ................................
        `, SpriteKind.Player)
    Next_Level.setPosition(100, 60)
    Restart = sprites.create(img`
        ................................
        ..8888888888888888888888888888..
        .888888888888888888888888888888.
        88888888888888888888888888888888
        88888888888888888888888888888888
        88888888888888888888888888888888
        888aaa8aa8aaa8aaa8aaa8aaa8aaa888
        118a8a8aa8a8888a88a8a8a8a88a8811
        118aa88a888a888a88aaa8aa888a8811
        888a8a8aa8aaa88a88a8a8a8a88a8888
        88888888888888888888888888888888
        88888888888888888888888888888888
        88888888888888888888888888888888
        .888888888888888888888888888888.
        ..8888888888888888888888888888..
        ................................
        `, SpriteKind.Player)
    Restart.setPosition(50, 60)
    MenuS = sprites.create(img`
        ................................
        ..8888888888888888888888888888..
        .888888888888888888888888888888.
        88888888888888888888888888888888
        88888888888888888888888888888888
        88888888888888888888888888888888
        8888888f888f8fff8888888888888888
        1188888ff8ff8fff8fff8f8f88888811
        1188888f8f8f8ff88f8f8f8f88888811
        8888888f8f8f8fff8f8f8ffff8888888
        88888888888888888888888888888888
        88888888888888888888888888888888
        88888888888888888888888888888888
        .888888888888888888888888888888.
        ..8888888888888888888888888888..
        ................................
        `, SpriteKind.Player)
    MenuS.z = 10;
    Restart.z = 10;
    Next_Level.z = 10;
    Good_job.z = 10;
    Level_3.z = 10;
    Level_2.z = 10;
    Title.z = 10;
    Credits.z = 10;
    StartButton.z = 10;
}
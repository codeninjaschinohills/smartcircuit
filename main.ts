let switchOn = false;

let switchBlock = sprites.create(assets.image`switchOff`, 0)
switchBlock.x = 96
switchBlock.y = 72
switchBlock.z = 5




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
                //placedBlocks[i].destroy()
            }
            console.log(getLayoutString(currentLayout));
            // currentLayout = copyLayout(startingLayout);
            console.log(getLayoutString(currentLayout));

            if(switchOn){
                switchOn = false
                let switchBlock = sprites.create(assets.image`switchOff`, 0)
                switchBlock.x = 96
                switchBlock.y = 72
                switchBlock.z = 5
            } else {
                switchOn = true
                let switchBlock = sprites.create(assets.image`switchOn`, 0)
                switchBlock.x = 96
                switchBlock.y = 72
                switchBlock.z = 5
            }

            let goal = sprites.create(assets.image`goalLightOff`, 0);
            goal.x = 149;
            goal.y = 58;
            goal.z = 1;

            // TODO: How do we clear the currentLayout?
            // a hint is that there should be an easy way to reset it!
        } else {
            let positivePos = findSymbolInLayout(currentLayout, symbolPositive);
            let negativePos = findSymbolInLayout(currentLayout, symbolNegative);
            let negativePathCheck = pathTo(currentLayout, positivePos.x, positivePos.y, symbolGoal);
            let positivePathCheck = pathTo(currentLayout, negativePos.x, negativePos.y, symbolGoal);
            let shortCircuitCheck = pathTo(currentLayout, positivePos.x, positivePos.y, symbolNegative);

            if (positivePathCheck && negativePathCheck && !shortCircuitCheck && switchOn) {
                console.log("Path Found Fully");
                let goal = sprites.create(assets.image`goalLightOn0`, 0);
                goal.x = 149;
                goal.y = 58;
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

let prePlacedBlocks = 1
let placedBlocks: Sprite[] = []
let testBlock: Sprite = null
let selectorPanel = false
let bottomOverlayTest: Sprite = null
let vertical = false
let selectedButton = 0
let curBlock: Sprite = null
selectedButton = 2
let battery = sprites.create(assets.image`batteryBlock`, 0)
let goal = sprites.create(assets.image`goalLightOff`, 0)
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
if (prePlacedBlocks == 1) {
    let blockOverlay = sprites.create(assets.image`placedBlocksOverlay`, 0);
    blockOverlay.z = 2;
}


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
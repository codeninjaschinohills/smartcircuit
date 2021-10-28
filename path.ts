// path.ts (Useful path functions)

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
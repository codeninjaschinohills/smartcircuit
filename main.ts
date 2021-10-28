namespace SpriteKind {
    export const MenuButton = SpriteKind.create()
}

let menuOpen = true;
let curButtonSelected = 1;
let currentLevel = 1;
let spacer = null
let switchOn = false;

let switchBlock = sprites.create(assets.image`Offswitch`, 0)
switchBlock.x = 100
switchBlock.y = 72
switchBlock.z = 5

let switchPlatform = sprites.create(assets.image`switchOff`, 0)
switchPlatform.x = 96
switchPlatform.y = 72
switchPlatform.z = 5

let levelHasSwitch = [false, false, false, true]

function setSwitch(value: boolean) {
    if (value) {
        switchOn = true
        switchBlock.setImage(assets.image`OnSwitch`)
        switchPlatform.setImage(assets.image`switchOn`)
    } else {
        switchOn = false
        switchBlock.setImage(assets.image`Offswitch`)
        switchPlatform.setImage(assets.image`switchOff`)
    }
}

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
let currentLayout = copyLayout(levLayout1);

let switchLevel = function (levelNum: number) {

    blockOverlay.setFlag(SpriteFlag.Invisible, false);
    curBlock.setFlag(SpriteFlag.Invisible, false);
    goal.setFlag(SpriteFlag.Invisible, false);
    battery.setFlag(SpriteFlag.Invisible, false);
    bottomOverlayTest.setFlag(SpriteFlag.Invisible, false);

    Title.setFlag(SpriteFlag.Invisible, true);
    StartButton.setFlag(SpriteFlag.Invisible, true);
    Credits.setFlag(SpriteFlag.Invisible, true);
    Level_1.setFlag(SpriteFlag.Invisible, true);
    Level_2.setFlag(SpriteFlag.Invisible, true);
    Level_3.setFlag(SpriteFlag.Invisible, true);
    Good_job.setFlag(SpriteFlag.Invisible, true)
    Next_Level.setFlag(SpriteFlag.Invisible, true)
    MenuS.setFlag(SpriteFlag.Invisible, true)
    Restart.setFlag(SpriteFlag.Invisible, true)


    currentLevel = levelNum
    goal.setImage(goalOffArr[levelNum]);
    goal.x = goalXArr[levelNum]
    goal.y = goalYArr[levelNum]
    battery.x = batteryXArr[levelNum]
    battery.y = batteryYArr[levelNum]
    setSwitch(false);

    let tempImg = placedBlocksArr[currentLevel]
    blockOverlay.setImage(tempImg)
    currentLayout = copyLayout(levLayoutArr[levelNum])
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!menuOpen) {
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
    } else {
        up();
    }
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!menuOpen) {
        if (vertical == true && selectorPanel == false) {
            curBlock.setImage(assets.image`4BlockH`)
            vertical = false
            if (curBlock.x > 140) {
                curBlock.x -= 48
            }
        } else if (selectorPanel == false) {
            curBlock.setImage(assets.image`4BlockV`)
            vertical = true
            if (curBlock.y > 80) {
                curBlock.y -= 48
            }
        }
    } else {
        onB();
    }
});

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!menuOpen) {
        if (vertical && selectorPanel == false) {
            testBlock = sprites.create(assets.image`4BlockV`, SpriteKind.Player)
            testBlock.z = 3
            testBlock.x = curBlock.x
            testBlock.y = curBlock.y

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

            let layoutPos = blockToLayout(testBlock.x, testBlock.y);

            let wireWidth = 4;
            currentLayout[layoutPos.y][layoutPos.x + 0] += symbolWireEast;
            currentLayout[layoutPos.y][layoutPos.x + 1] += symbolWireEast + symbolWireWest;
            currentLayout[layoutPos.y][layoutPos.x + 2] += symbolWireEast + symbolWireWest;
            currentLayout[layoutPos.y][layoutPos.x + 3] += symbolWireWest;

        }
        if (selectorPanel == true) {
            if (selectedButton == 1) {
                for (let i = 0; i <= placedBlocks.length - 1; i++) {
                    placedBlocks[i].destroy()
                }

                currentLayout = copyLayout(levLayoutArr[currentLevel]);

                goal.setImage(goalOffArr[currentLevel])
                goal.x = goalXArr[currentLevel];
                goal.y = goalYArr[currentLevel];
                goal.z = 1;
            } else if(selectedButton == 3) {
                let positivePos = findSymbolInLayout(currentLayout, symbolPositive);
                let negativePos = findSymbolInLayout(currentLayout, symbolNegative);
                let negativePathCheck = pathTo(currentLayout, positivePos.x, positivePos.y, symbolGoal);
                let positivePathCheck = pathTo(currentLayout, negativePos.x, negativePos.y, symbolGoal);
                let shortCircuitCheck = pathTo(currentLayout, positivePos.x, positivePos.y, symbolNegative);

                if (positivePathCheck && negativePathCheck && !shortCircuitCheck && (switchOn || !levelHasSwitch[currentLevel] )) {
                    console.log("Path Found Fully");
                    goal.setImage(goalOnArr[currentLevel]);
                    goal.x = goalXArr[currentLevel]
                    goal.y = goalYArr[currentLevel];
                    goal.z = 1;

                    pause(700)

                    for (let i = 0; i <= placedBlocks.length - 1; i++) {
                        placedBlocks[i].destroy()
                    }

                    MenuS.setFlag(SpriteFlag.Invisible, false);
                    Next_Level.setFlag(SpriteFlag.Invisible, false);
                    Restart.setFlag(SpriteFlag.Invisible, false);
                    Good_job.setFlag(SpriteFlag.Invisible, false);

                    switchBlock.setFlag(SpriteFlag.Invisible, true);
                    switchPlatform.setFlag(SpriteFlag.Invisible, true);

                    blockOverlay.setFlag(SpriteFlag.Invisible, true);
                    curBlock.setFlag(SpriteFlag.Invisible, true);
                    goal.setFlag(SpriteFlag.Invisible, true);
                    battery.setFlag(SpriteFlag.Invisible, true);
                    bottomOverlayTest.setFlag(SpriteFlag.Invisible, true);

                    menuOpen = true;
                    area = 2
                    down();

                } else if (positivePathCheck && negativePathCheck) {
                    console.log("Shortcircuit");
                    // Shortcircuit fail goes here
                } else {
                    console.log("Path Not Found");
                    // Wire connection fail goes here
                }
            } else if(selectedButton == 2){
                setSwitch(!switchOn)
            }
        }
    } else if (selectedSS == 1) {
        if (currentLevel == 3) {
            switchBlock.setFlag(SpriteFlag.Invisible, false);
            switchPlatform.setFlag(SpriteFlag.Invisible, false)
            switchBlock.setImage(assets.image`Offswitch`)
            switchPlatform.setImage(assets.image`switchOff`)
        }

        switchLevel(currentLevel)
        menuOpen = false
        selectedSS = 0
    } else if (selectedSS == 2) {
        if(currentLevel == 2){
            switchBlock.setFlag(SpriteFlag.Invisible, false);
            switchPlatform.setFlag(SpriteFlag.Invisible, false)
        }

        switchLevel(currentLevel + 1)
        menuOpen = false
        selectedSS = 0
    } else if (selectedSS == 3) {
        menuOpen = true
        area = 1
        left();
        selectedSS = 0
        MenuS.setFlag(SpriteFlag.Invisible, true);
        Next_Level.setFlag(SpriteFlag.Invisible, true)
        Restart.setFlag(SpriteFlag.Invisible, true)
        Good_job.setFlag(SpriteFlag.Invisible, true)

        Title.setFlag(SpriteFlag.Invisible, false);
        StartButton.setFlag(SpriteFlag.Invisible, false);
        Credits.setFlag(SpriteFlag.Invisible, false);
        Level_1.setFlag(SpriteFlag.Invisible, false);
        Level_2.setFlag(SpriteFlag.Invisible, false);
        Level_3.setFlag(SpriteFlag.Invisible, false);
    } else {
        onA();
    }
    
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!menuOpen) {
        if (selectorPanel == false) {
            if (vertical && (curBlock.x - 16) > 0) {
                curBlock.x -= 16;
            } else if ((curBlock.x - 32) > 0) {
                curBlock.x -= 16
            }
        } else if(selectedButton == 3){
            bottomOverlayTest.setImage(assets.image`bottomOverlay2`)
            selectedButton = 2
        } else {
            bottomOverlayTest.setImage(assets.image`bottomOverlay1`)
            selectedButton = 1
        }
    } else {
        left();
    }
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!menuOpen) {
        if (selectorPanel == false) {
            if (vertical && (curBlock.x + 16) < 160) {
                curBlock.x += 16
            } else if ((curBlock.x + 32) < 160) {
                curBlock.x += 16
            }
        } else if(selectedButton == 1){
            bottomOverlayTest.setImage(assets.image`bottomOverlay2`)
            selectedButton = 2
        } else {
            bottomOverlayTest.setImage(assets.image`bottomOverlay3`)
            selectedButton = 3
        }
    } else {
        right();
    }
})

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!menuOpen) {
        if (vertical == true) {
            if (curBlock.y + 16 < 90) {
                curBlock.y += 16
            } else {
                curBlock.setImage(assets.image`empty`)
                selectorPanel = true
                selectedButton = 3
                bottomOverlayTest.setImage(assets.image`bottomOverlay3`)
            }
        } else {
            if (curBlock.y + 16 < 106) {
                curBlock.y += 16
            } else {
                curBlock.setImage(assets.image`empty`)
                selectorPanel = true
                selectedButton = 3
                bottomOverlayTest.setImage(assets.image`bottomOverlay3`)
            }
        }
    } else {
        down();
    }
})

let placedBlocks: Sprite[] = []
let testBlock: Sprite = null
let selectorPanel = false
let bottomOverlayTest: Sprite = null
let vertical = false
let selectedButton = 0
let curBlock: Sprite = null
selectedButton = 3
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
let blockOverlay = sprites.create(placedBlocksArr[currentLevel], 0);
blockOverlay.z = 2;
blockOverlay.setFlag(SpriteFlag.Invisible, true);
curBlock.setFlag(SpriteFlag.Invisible, true);
goal.setFlag(SpriteFlag.Invisible, true);
battery.setFlag(SpriteFlag.Invisible, true);
//bottomOverlayTest.setFlag(SpriteFlag.Invisible, true);
switchBlock.setFlag(SpriteFlag.Invisible, true);
switchPlatform.setFlag(SpriteFlag.Invisible, true);

up();
namespace SpriteKind {
    export const MenuButton = SpriteKind.create()
}

let testVar = true

let menuOpen = true;

let curButtonSelected= 1;

let currentLevel = 1;
let spacer = null


let switchOn = true;

function setSwitch(value: boolean){
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

let switchBlock = sprites.create(assets.image`Offswitch`, 0)
switchBlock.x = 100
switchBlock.y = 72
switchBlock.z = 5

let switchPlatform = sprites.create(assets.image`switchOff`, 0)
switchPlatform.x = 96
switchPlatform.y = 72
switchPlatform.z = 5

let levelHasSwitch = [false, false, false, true]

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

    setSwitch(false);
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
    //goal = sprites.create(goalOffArr[currentLevel], 0)
    goal.setImage(goalOffArr[levelNum]);
    goal.x = goalXArr[levelNum]
    goal.y = goalYArr[levelNum]
    //battery = sprites.create(assets.image`batteryBlock`, 0)
    battery.x = batteryXArr[levelNum]
    battery.y = batteryYArr[levelNum]

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
                    //Win code goes here

                    pause(700)

                    for (let i = 0; i <= placedBlocks.length - 1; i++) {
                        placedBlocks[i].destroy()
                    }

                    MenuS.setFlag(SpriteFlag.Invisible, false);
                    Next_Level.setFlag(SpriteFlag.Invisible, false)
                    Restart.setFlag(SpriteFlag.Invisible, false)
                    Good_job.setFlag(SpriteFlag.Invisible, false)

                    switchBlock.setFlag(SpriteFlag.Invisible, true);
                    switchPlatform.setFlag(SpriteFlag.Invisible, true)

                    blockOverlay.setFlag(SpriteFlag.Invisible, true);
                    curBlock.setFlag(SpriteFlag.Invisible, true);
                    goal.setFlag(SpriteFlag.Invisible, true);
                    battery.setFlag(SpriteFlag.Invisible, true);
                    bottomOverlayTest.setFlag(SpriteFlag.Invisible, true);

                    menuOpen = true;
                    area = 2

                } else if (positivePathCheck && negativePathCheck) {
                    console.log("Shortcircuit");
                    //Shortcircuit fail goes here

                } else {
                    console.log("Path Not Found");
                    //Wire connection fail goes here
                }
            } else if(selectedButton == 2){
                setSwitch(!switchOn)
            }
        }
    } else if (selectedSS == 1) {
        //Restart.setFlag(SpriteFlag.Invisible, true)
        //Next_Level.setFlag(SpriteFlag.Invisible, true)
        //MenuS.setFlag(SpriteFlag.Invisible, true)

        if (currentLevel == 3) {
            switchBlock.setFlag(SpriteFlag.Invisible, false);
            switchPlatform.setFlag(SpriteFlag.Invisible, false)
            switchBlock.setImage(assets.image`Offswitch`)
            switchPlatform.setImage(assets.image`switchOff`)
        }

        switchLevel(currentLevel)
        menuOpen = false
        selectedSS = 0
        //console.log("1")
    } else if (selectedSS == 2) {
        //MenuS.setFlag(SpriteFlag.Invisible, true);
        //Next_Level.setFlag(SpriteFlag.Invisible, true)
        //Restart.setFlag(SpriteFlag.Invisible, true)

        if(currentLevel == 2){
            switchBlock.setFlag(SpriteFlag.Invisible, false);
            switchPlatform.setFlag(SpriteFlag.Invisible, false)
        }

        switchLevel(currentLevel + 1)
        menuOpen = false
        selectedSS = 0
        //console.log("2")
    } else if (selectedSS == 3) {
        console.log("3")
        menuOpen = true
        area = 1
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
bottomOverlayTest.setFlag(SpriteFlag.Invisible, true);
switchBlock.setFlag(SpriteFlag.Invisible, true);
switchPlatform.setFlag(SpriteFlag.Invisible, true)

let up = function () {
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
};
let onB = function () {
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
};
let onA = function () {
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

            console.log('3')

            blockOverlay.setFlag(SpriteFlag.Invisible, false);
            curBlock.setFlag(SpriteFlag.Invisible, false);
            goal.setFlag(SpriteFlag.Invisible, false);
            battery.setFlag(SpriteFlag.Invisible, false);
            bottomOverlayTest.setFlag(SpriteFlag.Invisible, false);
            /* Uncomment if you want Switch
            switchBlock.setFlag(SpriteFlag.Invisible, false);
            switchPlatform.setFlag(SpriteFlag.Invisible, false)
            */

            switchLevel(2);
        } else if (selected == 5) {
            menuOpen = false;

            console.log("5")

            blockOverlay.setFlag(SpriteFlag.Invisible, false);
            curBlock.setFlag(SpriteFlag.Invisible, false);
            goal.setFlag(SpriteFlag.Invisible, false);
            battery.setFlag(SpriteFlag.Invisible, false);
            bottomOverlayTest.setFlag(SpriteFlag.Invisible, false);
            /* Uncomment if you want Switch
            switchBlock.setFlag(SpriteFlag.Invisible, false);
            switchPlatform.setFlag(SpriteFlag.Invisible, false)
            */

            switchLevel(1);
        } else if (selected == 4) {
            menuOpen = false;

            console.log("4");

            blockOverlay.setFlag(SpriteFlag.Invisible, false);
            curBlock.setFlag(SpriteFlag.Invisible, false);
            goal.setFlag(SpriteFlag.Invisible, false);
            battery.setFlag(SpriteFlag.Invisible, false);
            bottomOverlayTest.setFlag(SpriteFlag.Invisible, false);

            switchBlock.setFlag(SpriteFlag.Invisible, false);
            switchPlatform.setFlag(SpriteFlag.Invisible, false)

            switchLevel(3);
        }

    }
    if (area == 2) {

    }
};
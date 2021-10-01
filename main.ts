controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vertical && (curBlock.y - 16) >= 0) {
        curBlock.y -= 16
    } else if ((curBlock.y - 16) > 0) {
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
    } else if (selectorPanel == false) {
        curBlock.setImage(assets.image`4BlockV`)
        vertical = true
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vertical && selectorPanel == false) {
        testBlock = sprites.create(assets.image`4BlockV`, SpriteKind.Player)
        testBlock.z = 1
        testBlock.x = curBlock.x
        testBlock.y = curBlock.y
        placedBlocks.push(testBlock)
    } else if (selectorPanel == false) {
        testBlock = sprites.create(assets.image`4BlockH`, SpriteKind.Player)
        testBlock.z = 1
        testBlock.x = curBlock.x
        testBlock.y = curBlock.y
        placedBlocks.push(testBlock)
    }
    if (selectorPanel == true) {
        if (selectedButton == 1) {
            for (let i = 0; i <= placedBlocks.length - 1; i++) {
                placedBlocks[i].destroy()
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
let goal = sprites.create(assets.image`goalThing`, 0)
battery.x = 21
battery.y = 58
goal.x = 149
goal.y = 58
vertical = true
curBlock = sprites.create(assets.image`4BlockV`, SpriteKind.Player)
bottomOverlayTest = sprites.create(assets.image`bottomOverlay`, SpriteKind.Player)
bottomOverlayTest.z = 100
curBlock.x = 8
curBlock.y = 28
curBlock.z = 1;
scene.setBackgroundImage(assets.image`bg`)
if (prePlacedBlocks == 1) {
    let blockOverlay = sprites.create(assets.image`placedBlocksOverlay`, 0);
}
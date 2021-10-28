// menu.ts (Code for handling game menus)

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

let left = function () {
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
        Next_Level.setImage(img`
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
            `)
        Restart.setImage(img`
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
            `)
        MenuS.setImage(img`
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
            `)
        Restart.setPosition(50, 60)
        Next_Level.setPosition(100, 60)
        MenuS.setPosition(75, 80)
        selectedSS = 1
    }
};

let right = function () {
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
        Next_Level.setImage(img`
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
            `)
        Restart.setImage(img`
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
            `)
        MenuS.setImage(img`
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
            `)
        Restart.setPosition(50, 60)
        Next_Level.setPosition(100, 60)
        MenuS.setPosition(75, 80)
        selectedSS = 2
    }
};
let down = function () {
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
        Next_Level.setImage(img`
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
            `)
        Restart.setImage(img`
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
            `)
        MenuS.setImage(img`
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
            `)
        Restart.setPosition(50, 60)
        Next_Level.setPosition(100, 60)
        MenuS.setPosition(75, 80)
        selectedSS = 3
    }
};

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

Restart.setFlag(SpriteFlag.Invisible, true)
Next_Level.setFlag(SpriteFlag.Invisible, true)
MenuS.setFlag(SpriteFlag.Invisible, true)
Good_job.setFlag(SpriteFlag.Invisible, true)

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
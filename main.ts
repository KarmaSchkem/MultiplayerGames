function Playertwo2 () {
    Playertwo = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(Playertwo)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar4.attachToSprite(Playertwo)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Playertwo)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.TopRight)
}
function Playerone2 () {
    Playerone = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Playerone)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(Playerone)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Playerone)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.TopLeft)
}
function Playerfour2 () {
    Playerfour = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    controller.player4.moveSprite(Playerfour)
    statusbar3 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar3.attachToSprite(Playerfour)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, Playerfour)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera4, splitScreen.CameraRegion.BottomRight)
}
function PlayerDeploy () {
    Playerone2()
    Playertwo2()
    Playerthree2()
    Playerfour2()
}
function Playerthree2 () {
    Playerthree = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    controller.player3.moveSprite(Playerthree)
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.attachToSprite(Playerthree)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, Playerthree)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera3, splitScreen.CameraRegion.BottomLeft)
}
let statusbar2: StatusBarSprite = null
let Playerthree: Sprite = null
let statusbar3: StatusBarSprite = null
let Playerfour: Sprite = null
let statusbar: StatusBarSprite = null
let Playerone: Sprite = null
let statusbar4: StatusBarSprite = null
let Playertwo: Sprite = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320 
    export const ARCADE_SCREEN_HEIGHT = 240
}
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`niveau2`)
PlayerDeploy()

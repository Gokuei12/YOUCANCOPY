scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeLifeBy(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Food, assets.tile`myTile2`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
})
scene.onOverlapTile(SpriteKind.Food, sprites.castle.tilePath5, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        1 1 1 . . . . . . . . . . . . . 
        1 1 1 1 . . 4 4 . . . . . . . . 
        . . 1 1 1 . 4 . . . . . . . . . 
        . . . 1 1 4 4 d d . . . . . . . 
        . . . . 4 4 d d d d . . . . . . 
        . 4 4 4 4 d d d d d . . . . . . 
        . 4 . . . . d d d d d . . . . . 
        . . . . . . d d d d d d . . . . 
        . . . . . . . d d d d d d . . . 
        . . . . . . . . d d d d d . . . 
        . . . . . . . . . d d d d d . . 
        . . . . . . . . . d d d d d . . 
        . . . . . . . . . . . d d d . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    if (Math.percentChance(20)) {
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile`)
        tiles.placeOnRandomTile(mySprite4, assets.tile`myTile`)
        tiles.placeOnRandomTile(mySprite5, assets.tile`myTile`)
        tiles.placeOnRandomTile(mySprite6, assets.tile`myTile`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.follow(mySprite, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile`)
    game.splash("(READ EVERYTHING) Congratulations you can now have a Life and Points Farmer for as long as you want Use The Key You Have And Go to the bottom Right Corner Block")
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite: Sprite = null
let mySprite3: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
info.setScore(5)
info.setLife(9)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . c c c c c 
    . . . . . . . . . c c 7 7 7 6 c 
    . . . . . . . . c c 7 7 7 c c . 
    . . . . . . . . c 6 7 7 c . . . 
    . . . . . . . . c 6 6 6 c . . . 
    . . . . . . . . c 6 6 6 c c . . 
    . . . c c c c c c c 6 6 6 c c . 
    . . c 6 7 7 7 7 6 c c 6 6 6 c . 
    . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
    c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
    c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
    f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
    f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
    . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
    . c 1 c f f 1 c 7 6 f 6 6 c c . 
    . c c c c c c c c c c c c . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . c c c c c 
    . . . . . . . . . c c 7 7 7 6 c 
    . . . . . . . . c c 7 7 7 c c . 
    . . . . . . . . c 6 7 7 c . . . 
    . . . . . . . . c 6 6 6 c . . . 
    . . . . . . . . c 6 6 6 c c . . 
    . . . c c c c c c c 6 6 6 c c . 
    . . c 6 7 7 7 7 6 c c 6 6 6 c . 
    . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
    c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
    c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
    f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
    f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
    . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
    . c 1 c f f 1 c 7 6 f 6 6 c c . 
    . c c c c c c c c c c c c . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
mySprite5 = sprites.create(img`
    . . . . . . . . . . . c c c c c 
    . . . . . . . . . c c 7 7 7 6 c 
    . . . . . . . . c c 7 7 7 c c . 
    . . . . . . . . c 6 7 7 c . . . 
    . . . . . . . . c 6 6 6 c . . . 
    . . . . . . . . c 6 6 6 c c . . 
    . . . c c c c c c c 6 6 6 c c . 
    . . c 6 7 7 7 7 6 c c 6 6 6 c . 
    . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
    c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
    c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
    f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
    f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
    . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
    . c 1 c f f 1 c 7 6 f 6 6 c c . 
    . c c c c c c c c c c c c . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
mySprite6 = sprites.create(img`
    . . . . . . . . . . . c c c c c 
    . . . . . . . . . c c 7 7 7 6 c 
    . . . . . . . . c c 7 7 7 c c . 
    . . . . . . . . c 6 7 7 c . . . 
    . . . . . . . . c 6 6 6 c . . . 
    . . . . . . . . c 6 6 6 c c . . 
    . . . c c c c c c c 6 6 6 c c . 
    . . c 6 7 7 7 7 6 c c 6 6 6 c . 
    . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
    c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
    c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
    f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
    f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
    . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
    . c 1 c f f 1 c 7 6 f 6 6 c c . 
    . c c c c c c c c c c c c . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(3, 13))
mySprite3.follow(mySprite)
mySprite4.follow(mySprite)
mySprite5.follow(mySprite)
mySprite6.follow(mySprite)

function rockCalcU () {
    userActionIMG = sprites.create(assets.image`rock`, SpriteKind.Projectile)
    userActionIMG.setPosition(30, 60)
    userActionIMG.setVelocity(100, 0)
    if (cpuAction == 1) {
        cpuActionIMG = sprites.create(assets.image`rock`, SpriteKind.Projectile)
        cpuActionIMG.setPosition(130, 60)
        cpuActionIMG.setVelocity(-100, 0)
        pause(1000)
        game.splash("TIE!")
    } else if (cpuAction == 2) {
        cpuActionIMG = sprites.create(assets.image`cpusciss`, SpriteKind.Projectile)
        cpuActionIMG.setPosition(130, 60)
        cpuActionIMG.setVelocity(-100, 0)
        pause(1000)
        game.splash("YOU WIN!")
        userWinner += 1
    } else {
        cpuActionIMG = sprites.createProjectileFromSide(assets.image`Paper`, -100, 0)
        cpuActionIMG.setPosition(130, 60)
        cpuActionIMG.setVelocity(-100, 0)
        pause(1000)
        game.splash("YOU LOSE!")
    }
}
function paperCalc () {
    userActionIMG = sprites.create(assets.image`Paper`, SpriteKind.Projectile)
    userActionIMG.setPosition(30, 60)
    userActionIMG.setVelocity(100, 0)
    if (cpuAction == 3) {
        cpuActionIMG = sprites.create(assets.image`Paper`, SpriteKind.Projectile)
        cpuActionIMG.setPosition(130, 60)
        cpuActionIMG.setVelocity(-100, 0)
        pause(1000)
        game.splash("TIE!")
    } else if (cpuAction == 1) {
        cpuActionIMG = sprites.create(assets.image`rock`, SpriteKind.Projectile)
        cpuActionIMG.setPosition(130, 60)
        cpuActionIMG.setVelocity(-100, 0)
        pause(1000)
        game.splash("YOU WIN!")
        userWinner += 1
    } else {
        cpuActionIMG = sprites.createProjectileFromSide(assets.image`cpusciss`, -100, 0)
        cpuActionIMG.setPosition(130, 60)
        cpuActionIMG.setVelocity(-100, 0)
        pause(1000)
        game.splash("YOU LOSE!")
    }
}
function scissorsCalc () {
    userActionIMG = sprites.create(assets.image`ysciss`, SpriteKind.Projectile)
    userActionIMG.setPosition(30, 60)
    userActionIMG.setVelocity(100, 0)
    if (cpuAction == 2) {
        cpuActionIMG = sprites.create(assets.image`cpusciss`, SpriteKind.Projectile)
        cpuActionIMG.setPosition(130, 60)
        cpuActionIMG.setVelocity(-100, 0)
        pause(1000)
        game.splash("TIE!")
    } else if (cpuAction == 3) {
        cpuActionIMG = sprites.create(assets.image`Paper`, SpriteKind.Projectile)
        cpuActionIMG.setPosition(130, 60)
        cpuActionIMG.setVelocity(-100, 0)
        pause(1000)
        game.splash("YOU WIN!")
        userWinner += 1
    } else {
        cpuActionIMG = sprites.createProjectileFromSide(assets.image`rock`, -100, 0)
        cpuActionIMG.setPosition(130, 60)
        cpuActionIMG.setVelocity(-100, 0)
        pause(1000)
        game.splash("YOU LOSE!")
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    music.pewPew.playUntilDone()
})
function totalAttempts (num: number) {
    return "YOU ARE THE CHAMP!         " + "It took you " + num + " attempts!"
}
let cpuActionIMG: Sprite = null
let userActionIMG: Sprite = null
let cpuAction = 0
let userAction = 0
let userWinner = 0
scene.setBackgroundImage(assets.image`bg`)
let userID = sprites.create(assets.image`you`, SpriteKind.Player)
userID.setPosition(30, 45)
let cpuID = sprites.create(assets.image`cpu`, SpriteKind.Player)
cpuID.setPosition(130, 45)
let userAttempts = 0
while (userWinner < 3) {
    userAction = game.askForNumber("", 1)
    if (userAction > 3 || userAction == 0) {
        game.splash("Invalid Input...")
        game.showLongText("1- Rock 2- Scissors 3- Paper", DialogLayout.Center)
        userAction = game.askForNumber("", 1)
    }
    cpuAction = randint(1, 3)
    userAttempts += 1
    if (userAction == 1) {
        rockCalcU()
    } else if (userAction == 2) {
        scissorsCalc()
    } else {
        paperCalc()
    }
}
game.showLongText(totalAttempts(userAttempts), DialogLayout.Center)
pause(100)
game.reset()

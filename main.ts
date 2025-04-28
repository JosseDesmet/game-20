input.onButtonPressed(Button.A, function () {
    Pong_1 = game.createSprite(1, 2)
})
let Pong_1: game.LedSprite = null
Pong_1 = game.createSprite(0, 2)
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    Pong_1 = game.createSprite(0, 2)
})

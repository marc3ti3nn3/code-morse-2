basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(50)
    }
    basic.pause(50)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(200)
    }
    basic.pause(50)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(50)
    }
    basic.pause(1000)
    basic.clearScreen()
})

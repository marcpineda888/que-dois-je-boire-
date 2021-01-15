let c = 0
input.onGesture(Gesture.Shake, function () {
    c = input.temperature()
    basic.showString("" + (c))
    if (c >= 20) {
        basic.showLeds(`
            # . . . #
            # . . . #
            . # # # .
            . . # . .
            . # # # .
            `)
    } else if (c < 20) {
        basic.showLeds(`
            . . # # #
            # # # # #
            # . # # #
            # # # # #
            . . # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})

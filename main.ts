basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Square)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        music.playMelody("B G B G B G B G ", 120)
    }
})

function Soud_Silen () {
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.InBackground)
}
basic.forever(function () {
    whaleysans.showNumber(input.temperature())
    basic.pause(5000)
    if (input.temperature() > 35) {
        basic.showString("Hot!")
        Soud_Silen()
    } else if (input.temperature() > 23) {
        basic.showString("OK")
    } else {
        basic.showString("Cold")
    }
    basic.clearScreen()
})

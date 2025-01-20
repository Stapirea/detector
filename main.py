def Soud_Silen():
    music.play(music.string_playable("C5 G B A F A C5 B ", 120),
        music.PlaybackMode.IN_BACKGROUND)

def on_forever():
    whaleysans.show_number(10)
    basic.pause(5000)
    if input.temperature() > 35:
        basic.show_string("Hot!")
    elif input.temperature() > 23:
        basic.show_string("OK")
    else:
        basic.show_string("Cold")
basic.forever(on_forever)

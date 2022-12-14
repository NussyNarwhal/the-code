input.onGesture(Gesture.FreeFall, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= 47; index++) {
        strip.setPixelColor(index, neopixel.rgb(randint(8, 47), randint(0, 47), randint(8, 47)))
        strip.show()
    }
})
let strip: neopixel.Strip = null
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
for (let index = 0; index <= 47; index++) {
    strip = neopixel.create(DigitalPin.P8, 48, NeoPixelMode.RGB)
    strip.setBrightness(100)
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(16)
}
for (let index = 0; index <= 47; index++) {
    strip = neopixel.create(DigitalPin.P8, 48, NeoPixelMode.RGB)
    strip.setBrightness(100)
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(16)
}
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P5) == 0) {
        for (let index = 0; index <= 47; index++) {
            strip.setPixelColor(index, neopixel.rgb(255, 255, 255))
            strip.show()
        }
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 30, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0 && pins.digitalReadPin(DigitalPin.P11) == 0) {
        strip.showRainbow(100, 120)
        strip.show()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 0, 255, 0, 30, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        strip.showRainbow(180, 200)
        strip.show()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 5000, 0, 255, 0, 30, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        strip.showRainbow(180, 200)
        strip.show()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 30, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        strip.showRainbow(231, 260)
        strip.show()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 927, 0, 255, 0, 30, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        strip.showRainbow(231, 260)
        strip.show()
    }
})
basic.forever(function () {
    for (let index = 0; index <= 47; index++) {
        strip.setPixelColor(index, neopixel.rgb(randint(8, 47), randint(0, 47), randint(8, 47)))
        strip.show()
    }
})

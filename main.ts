input.onButtonPressed(Button.A, function () {
    led.plot(x, y)
    if (x > 0 && x <= 4) {
        x += -1
        led.unplot(x + 1, y)
        led.plot(x, y)
    } else if (x == 0) {
        x = 4
        led.plot(x, y)
        led.unplot(0, y)
    }
})
input.onButtonPressed(Button.B, function () {
    led.plot(x, y)
    if (x >= 0 && x < 4) {
        x += 1
        led.unplot(x - 1, y)
        led.plot(x, y)
    } else if (x == 4) {
        x = 0
        led.plot(x, y)
        led.unplot(4, y)
    }
})
let y = 0
let x = 0
let phase = 1
x = 0
y = 0
led.plot(x, y)
basic.pause(500)
basic.forever(function () {
    if (phase == 1) {
        while (phase == 1) {
            if (y >= 0 && y < 4) {
                led.unplot(x, y)
                y += 1
            } else if (y == 4) {
                phase = 2
            }
            led.plot(x, y)
            if (y != 4) {
                basic.pause(500)
            }
            if (y == 4) {
                basic.pause(250)
            }
        }
    } else if (phase == 2) {
        while (phase == 2) {
            if (y > 0 && y <= 4) {
                led.unplot(x, y)
                y += -1
            } else if (y == 0) {
                phase = 1
            }
            led.plot(x, y)
            if (y != 0) {
                basic.pause(500)
            }
            if (y == 0) {
                basic.pause(250)
            }
        }
    }
})

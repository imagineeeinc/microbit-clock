/**
 * mode0-setting mode
 * 
 * mode1-display
 */
input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        if (settingplace == 0) {
            h1 = h1 + 1
        } else if (settingplace == 1) {
            h2 = h2 + 1
        } else if (settingplace == 2) {
            m1 = m1 + 1
        } else if (settingplace == 3) {
            m2 = m2 + 1
        }
    } else if (mode == 1) {
        show(true)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (mode == 1) {
        show(true)
    }
})
function timer () {
    basic.pause(60000)
    if (m2 + 1 == 10) {
        if (m1 + 1 == 6) {
            m1 = 0
            m2 = 0
            if (h2 + 1 == 4 && h1 == 2) {
                h1 = 0
                h2 = 0
                m1 = 0
                m2 = 0
            } else if (h2 + 1 == 10) {
                h1 = h1 + 1
                h2 = 0
            } else {
                h2 = h2 + 1
            }
        } else {
            m1 = m1 + 1
            m2 = 0
        }
    } else {
        m2 = m2 + 1
    }
}
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        if (settingplace < 3) {
            settingplace = settingplace + 1
        } else {
            mode = 1
            show(true)
        }
    } else if (mode == 1) {
        basic.showString("" + convertToText(input.temperature()) + "c")
    }
})
function setup () {
    h1 = 0
    h2 = 0
    m1 = 0
    m2 = 0
    mode = 0
    settingplace = 0
}
function show (force: boolean) {
    basic.showString("" + convertToText(h1) + convertToText(h2) + ":" + convertToText(m1) + convertToText(m2))
    basic.clearScreen()
}
let m2 = 0
let m1 = 0
let h2 = 0
let h1 = 0
let settingplace = 0
let mode = 0
setup()
basic.forever(function () {
    if (mode == 0) {
        if (settingplace == 0) {
            basic.showNumber(h1)
        } else if (settingplace == 1) {
            basic.showNumber(h2)
        } else if (settingplace == 2) {
            basic.showNumber(m1)
        } else {
            basic.showNumber(m2)
        }
    } else if (mode == 1) {
        timer()
    }
    if (2 < h1) {
        h1 = 0
    }
    if (2 == h1 && 3 < h2) {
        h2 = 0
    }
    if (9 < h2) {
        h2 = 0
    }
    if (5 < m1) {
        m1 = 0
    }
    if (9 < m2) {
        m2 = 0
    }
})

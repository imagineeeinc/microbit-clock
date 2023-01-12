buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    if (mode == 1) {
        if (serial_out == 0) {
            serial_out = 1
        } else {
            serial_out = 0
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        if (settingplace == 0) {
            h += 1
        } else if (settingplace == 1) {
            m += 1
        } else if (settingplace == 2) {
            ampm = 0
        }
    } else if (mode == 1) {
        basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMAMPM))
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (mode == 1) {
        basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMAMPM))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (mode == 0) {
        if (settingplace < 2) {
            settingplace += 1
        } else if (settingplace == 2) {
            mode = 1
            if (ampm == 0) {
                timeanddate.setTime(h, m, 0, timeanddate.MornNight.AM)
            } else if (ampm == 1) {
                timeanddate.setTime(h, m, 0, timeanddate.MornNight.PM)
            }
            basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMAMPM))
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        if (settingplace == 0) {
            h += -1
        } else if (settingplace == 1) {
            m += -1
        } else if (settingplace == 2) {
            ampm = 1
        }
    } else if (mode == 1) {
        degrees = input.temperature()
        basic.showString("" + degrees + "c")
    }
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    if (mode == 1) {
        if (ampm == 0) {
            timeanddate.setTime(parseFloat(serial.readLine().substr(0, 1)), parseFloat(serial.readLine().substr(2, 3)), 0, timeanddate.MornNight.AM)
        } else if (ampm == 1) {
            timeanddate.setTime(parseFloat(serial.readLine().substr(0, 1)), parseFloat(serial.readLine().substr(2, 3)), 0, timeanddate.MornNight.PM)
        }
    }
})
let degrees = 0
let ampm = 0
let m = 0
let h = 0
let settingplace = 0
let serial_out = 0
let mode = 0
mode = 0
serial_out = 0
basic.forever(function () {
    if (mode == 0) {
        if (settingplace == 0) {
            if (h < 0) {
                h = 0
            } else if (h > 12) {
                h = 12
            }
            basic.showNumber(h)
        } else if (settingplace == 1) {
            if (m < 0) {
                m = 0
            } else if (m > 59) {
                m = 59
            }
            basic.showNumber(m)
        } else if (settingplace == 2) {
            if (ampm == 0) {
                basic.showString("am")
            } else {
                basic.showString("pm")
            }
        }
    } else if (mode == 1) {
        if (serial_out == 1) {
            serial.writeString(timeanddate.time(timeanddate.TimeFormat.HMMSSAMPM))
        }
    }
})

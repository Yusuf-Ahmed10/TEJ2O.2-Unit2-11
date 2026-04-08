/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/

// variable
const number1: number = randint(0,99)

const number2: number = randint(0,99)

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// show number 1
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("#1: " + number1)
    basic.showIcon(IconNames.Happy)
})

// show number 2
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("#2: " + number2)
    basic.showIcon(IconNames.Happy)
})

// show which is greater and which is less
input.onGesture(Gesture.Shake, function () {
    if (number1 < number2) {
      basic.clearScreen()
      basic.showString(number1 + "<" + number2)
      basic.showIcon(IconNames.Sad)
    } else  {
    basic.clearScreen()
    basic.showString(number1 + ">" + number2)
    basic.showIcon(IconNames.Sad)
    } 
})
basic.showString('Hello, World!')

input.onButtonPressed(Button.A, function () {
    // Adiciona 1 à variável Entraram
    Entraram += 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . # # # .
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    // iremos parar a animação para não consumir tempo na apresentação dos dados
    led.stopAnimation()
    // criar efeito de pressionamento do botão
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.showString("Local")
    // mostra quantidade atual de pessoas no local
    basic.showNumber(Entraram - Sairam)
    basic.showString("Entraram")
    // mostra quantidade acumulada de pessoas que já entraram no ambiente
    basic.showNumber(Entraram)
    // criar efeito de pressionamento do botão
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . # # # .
        # # # # #
        `)
})
// Zerar variáveis ao ser pressionado A+B
input.onButtonPressed(Button.AB, function () {
    Entraram = 0
    Sairam = 0
    // simula pressionamento do botão
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        # # # # #
        `)
    // mostra Z (zerado)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . # # # .
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    // Adiciona 1 na variável Sairam
    Sairam += 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . # # # .
        # # # # #
        `)
})
let Sairam = 0
let Entraram = 0
// ENTRARAM acumula a quantidade de pessoas que ENTRARAM no local, Cada pessoa que entrar no local, será adicionado 1. Ao iniciar o micro:bit o valor sempre iniciará zerado
Entraram = 0
// SAIRAM acumula a quantidade de pessoas que saíram do local. Ao iniciar o micro:bit o valor sempre iniciará zerado
Sairam = 0
// Simula botão aguardando ser pressionado.
basic.showLeds(`
    . # # # .
    . . # . .
    . . . . .
    . # # # .
    # # # # #
    `)

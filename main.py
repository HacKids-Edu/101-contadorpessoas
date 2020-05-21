def on_button_pressed_a():
    basic.show_number(contar)
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_gesture_shake():
    global contar
    contar += 1
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
contar = 0
contar = 0
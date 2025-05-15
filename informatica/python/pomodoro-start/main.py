import tkinter
import time
import math
# ---------------------------- CONSTANTS ------------------------------- #
PINK = "#e2979c"
RED = "#e7305b"
GREEN = "#9bdeac"
YELLOW = "#f7f5dd"
FONT_NAME = "Courier"
WORK_MIN = 25
SHORT_BREAK_MIN = 5
LONG_BREAK_MIN = 20

reps = 1 
timer = None
# ---------------------------- TIMER RESET ------------------------------- # 
def reset():
    window.after_cancel(timer)
    canvas.itemconfig(timerText, text="00:00")
    labelTimer.config(text="Timer")
    labelCheck.config(text="")
    global reps
    reps = 0


# ---------------------------- TIMER MECHANISM ------------------------------- # 
def startTime():
    global reps

    if reps%8 == 0:
        countdown(LONG_BREAK_MIN*60)
        labelTimer.config(text="long break", fg=PINK)
    elif reps%2 == 0:
        countdown(SHORT_BREAK_MIN*60)
        labelTimer.config(text="short break", fg=PINK)
    else:
        countdown(WORK_MIN*60)
        labelTimer.config(text="WORK", fg=RED)
    reps += 1

# ---------------------------- COUNTDOWN MECHANISM ------------------------------- # 
def countdown(count):

    countMin = math.floor(count/60)
    countSec = count % 60  

    canvas.itemconfig(timerText, text=f"{str(countMin).rjust(2, '0')}:{str(countSec).rjust(2,'0')}")
    if count > 0:
        global timer
        timer = window.after(1000,countdown, count-1)
    else:
        startTime()
        mark = "✓" * (reps // 2)
        labelCheck.config(text=mark)


# ---------------------------- UI SETUP ------------------------------- #

window = tkinter.Tk()
window.title("timer")
#sito per le palet di colori: color hunt 
window.config(padx=100,pady=50, bg=YELLOW)

labelTimer = tkinter.Label(text="Timer", fg=GREEN, bg=YELLOW, font=(FONT_NAME,35,"bold"))
labelTimer.grid(row=0,column=1)

canvas = tkinter.Canvas(width=200, height=224, bg=YELLOW, highlightthickness=0)
tomatoImg = tkinter.PhotoImage(file="./tomato.png")
canvas.create_image(100,112, image=tomatoImg)
timerText = canvas.create_text(100,130, text="00:00", fill="white", font=(FONT_NAME,35,"bold"))

canvas.grid(row=1,column=1)

buttonStart = tkinter.Button(text="Start",bg=YELLOW, highlightthickness=0, command=startTime)
buttonStart.grid(row=2,column=0)

buttonReset = tkinter.Button(text="Reset",bg=YELLOW, highlightthickness=0, command=reset) #
buttonReset.grid(row=2,column=2)

labelCheck = tkinter.Label(fg=GREEN, bg=YELLOW, font=(FONT_NAME,20,"bold"))
labelCheck.grid(row=3,column=1)


window.mainloop() 
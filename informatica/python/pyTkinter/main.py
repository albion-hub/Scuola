import tkinter 

winodw = tkinter.Tk()
winodw.title("test")
winodw.minsize(500,300)

label = tkinter.Label(text="Test", font=("Arial", 100, "bold"))
label.grid(column=0, row=0)

inputStr = tkinter.Entry(width= 20)
inputStr.grid(column=3, row=2)

def bho():
    label.config(text=inputStr.get())

b = tkinter.Button( text ="Hello", command = bho)
b.grid(column=2, row=0)

b2 = tkinter.Button( text ="Hello", command = bho)
b2.grid(column=1, row=1)
winodw.mainloop()
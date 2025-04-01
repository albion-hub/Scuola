import tkinter 

winodw = tkinter.Tk()
winodw.title("test")
winodw.minsize(500,300)

label = tkinter.Label(text="Test", font=("Arial", 100, "bold"))
label.pack()

winodw.mainloop()
import tkinter 

def milesToKm():
    try:
        labelNum.config(text=f"{round(float(numInput.get())*1.6,2)}")
    except Exception as e:
        print(f"errore di tipo {e}")

winodw = tkinter.Tk()
winodw.title("test")
winodw.minsize(600,400)


numInput = tkinter.Entry(width=30)
numInput.insert(tkinter.END, string="0")
numInput.grid(column=1,row=0)

labelMiles = tkinter.Label(text="Miles")
labelMiles.grid(column=2,row=0)

labelTo = tkinter.Label(text="is equal to")
labelTo.grid(column=0,row=1)

labelNum = tkinter.Label(text="0")
labelNum.grid(column=1,row=1)

labelK = tkinter.Label(text="Km")
labelK.grid(column=2,row=1)

b = tkinter.Button(text="Click Me", command=milesToKm)

b.grid(column=1,row=2)

winodw.mainloop()

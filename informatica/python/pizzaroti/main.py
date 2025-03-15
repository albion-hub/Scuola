import turtle
import pandas
import time
data = pandas.read_csv("20_regioni.csv")
regioni = data.regione.to_list()
regioniIndovinate = []

screen = turtle.Screen()
screen.title("states")

image = "./italy-map.gif"
screen.addshape(image)
turtle.shape(image)

t = turtle.Turtle()
t.hideturtle()
t.penup()

while len(regioniIndovinate) != len(regioni):
    inputRegione = screen.textinput(title="indovina la regione", prompt="nome di una regione: ").title()
    
    if inputRegione in regioni and inputRegione not in regioniIndovinate:
        x,y = int(float(data[data.regione == inputRegione].x)),int(float(data[data.regione == inputRegione].y))
        t.goto(x, y)
        t.write(inputRegione, align="center", font=("Arial", 8, "normal"))
        regioniIndovinate.append(inputRegione)

screen.exitonclick()
t.write("Hai Vinto", align="center", font=("Arial", 100, "normal"))
time.sleep(5)
exit()
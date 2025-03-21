from turtle import Turtle
from math import cos,sin,radians

class LacnceteOre(Turtle):
    def __init__(self, shape = "classic", undobuffersize = 1000, visible = False):
        super().__init__(shape, undobuffersize, visible)
        self.x = -1
        self.y = -1

    def next(self):
        self.clear()
        self.setpos(0, 0)

        x = cos(radians(((self.x+1) * 30))) *300
        y = sin(radians(((self.y+1) * 30))) *300

        self.pendown() 
        self.goto(x, y)  
        self.penup()

        self.x += 1
        self.y += 1
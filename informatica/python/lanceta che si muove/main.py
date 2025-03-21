from turtle import Turtle, Screen
import math
from lanceteOre import LacnceteOre
import time

s = Screen()
s.tracer(0)

l = LacnceteOre()

for i in range(100):
    l.next()
    s.update()
    time.sleep(1)

s.exitonclick()
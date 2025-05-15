import math
def expand(expr):
    r = []
    n,ex = expr.split('^')   # a e b, ed esponente
    ex = int(ex)             #serve intero e non str
    n = n[1:-1]              #tolgo ()
    if ex == 0:             
        return '1'
    if ex == 1:
        return n
    y = 0
    for i in n:
        if i.isalpha():
            y = n.index(i)
            break
    if y == 0:
        a = 1
    elif n[y-1] == '-':
        a = -1
    else:
        a = int(n[:y])
    b = int(n[y+1:])
    for k in range(int(ex)+1):
        c = (math.factorial(int(ex)))/(math.factorial(k)*(math.factorial(int(ex)-k))) #float / Teorema del Binomio di Newton
        c = int(c)
        d = a**(ex-k)
        e = b**k
        coeficente = (c*(d)*(e))
        if (coeficente == 1 or coeficente == -1) and k != ex :
            if coeficente > 0:
                r.append(n[y]+'^'+ str(ex-k))
            else:
                r.append('-'+n[y]+'^'+ str(ex-k))
        elif k == ex:
            if coeficente > 0:
                r.append('+'+str(coeficente))
            else:
                r.append(str(coeficente))
        elif ex-k == 1:
            if coeficente > 0:
                r.append('+'+str(coeficente)+n[y])
            else:
                r.append(str(coeficente)+n[y])
        elif coeficente != '' and coeficente > 0 and k != 0: 
            r.append(('+'+str(coeficente)+n[y]+'^'+ str(ex-k)))    
        else:
            r.append((str(coeficente)+n[y]+'^'+ str(ex-k)))

    return (' '.join(r))

if __name__ == "__main__":
    expresion = input("inserisci un binorio nella forma dentro (): ")

    #print(expand(expresion))
    print(expand("(x+1)^2"))


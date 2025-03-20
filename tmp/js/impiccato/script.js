var parolaDaIndovinare;

window.onload = async function() {
    await fetch("/parole.json")
    .then(function(response){
        return response.text()
    })
    .then(function(data) {
        parolaDaIndovinare = (JSON.parse(data)["lista_parole"][Math.floor(Math.random() * 149) + 1]).toUpperCase();  
    })
    .catch(function(error) {
        console.error('Errore nel caricamento del file:', error); 
    });

    omino = new Omino()
    omino.addImmagine("immagini/HangMan_05.gif")
    omino.addImmagine("immagini/HangMan_06.gif")
    omino.addImmagine("immagini/HangMan_07.gif")
    omino.addImmagine("immagini/HangMan_08.gif")
    omino.addImmagine("immagini/HangMan_09.gif")
    omino.addImmagine("immagini/HangMan_10.gif")
    omino.addImmagine("immagini/HangMan_LOSE.gif")
    omino.addImmagine("immagini/HangMan_WIN.gif")

    //document.getElementById("OMINO").innerHTML= `<img src=${omino.immagineSuccesiva()} >`


    Tastiera()

};


class Omino{
    constructor(){
        this.immagini =  []
        this.index = -1
    }
    addImmagine(immagine){
        this.immagini.push(immagine)
    }

    immagineSuccesiva(){
        this.index += 1
        return this.immagini[this.index]
    }
}

function Tastiera(){
    div = document.getElementById("tastiera")
    div.innerHTML = '';

    for (let i = 65; i <= 90; i++) { 
        div.innerHTML += `<button id="${String.fromCharCode(i)}" onclick="check()">${String.fromCharCode(i)}</button>`;  
        document.getElementById(String.fromCharCode(i)).addEventListener("click",check)
    }
}

function check(){
    
}

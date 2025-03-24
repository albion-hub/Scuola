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

    liberta(){
        return this.immagini[this.immagini.length-1]
    }

    checkIndex(){
        if (this.index >= this.immagini.length -2) {
            return true;
        }
        return false;
    }
}

let parolaDaIndovinare;

let omino = new Omino()
omino.addImmagine("immagini/HangMan_05.gif")
omino.addImmagine("immagini/HangMan_06.gif")
omino.addImmagine("immagini/HangMan_07.gif")
omino.addImmagine("immagini/HangMan_08.gif")
omino.addImmagine("immagini/HangMan_09.gif")
omino.addImmagine("immagini/HangMan_10.gif")
omino.addImmagine("immagini/HangMan_LOSE.gif")
omino.addImmagine("immagini/HangMan_WIN.gif")


window.onload = async function() {
    await fetch("/parole.json")  //potevo usare altre funzione che permettevano di aprire il file ma volevo usare il fetch :)
        .then(function(response){
            return response.text()
        })
        .then(function(data) {
            parolaDaIndovinare = (JSON.parse(data)["lista_parole"][Math.floor(Math.random() * 149) + 1]).toUpperCase();  
        })
        .catch(function(error) {
            console.error('Errore nel caricamento del file:', error); 
        });

    document.getElementById("OMINO").innerHTML= `<img src=${omino.immagineSuccesiva()} >`
    Tastiera()
    displayParola()
    console.log(parolaDaIndovinare)
};

function Tastiera(){
    div = document.getElementById("tastiera")
    div.innerHTML = '';

    for (let i = 65; i <= 90; i++) { 
        div.innerHTML += `<button id="${String.fromCharCode(i)}" onclick="check(event)">${String.fromCharCode(i)}</button>`;  
        document.getElementById(String.fromCharCode(i)).addEventListener("click",check)
    }
}

function check(event){
    var flag = 0
    var lettere = (document.getElementById("parolaSegreta").textContent).split(" ")
    var secret = document.getElementById("parolaSegreta") 

    if(parolaDaIndovinare.includes(event.target.id)){
        parolaDaIndovinare.split('').forEach(function(lettera, index){ 
            if(lettera == event.target.id){
                flag = 1
                lettere[index] = lettera
                event.target.classList.add("giusto")
            }
        });
    }
    if (flag === 0){
        event.target.classList.add("clikato")
        if(omino.checkIndex()){
            setTimeout(function() {
                alert("hai perso :(");
                window.close();
            }, 1000); //1 sec
        }
        else{
            document.getElementById("OMINO").innerHTML= `<img src=${omino.immagineSuccesiva()} >`
        }
    }
    secret.innerHTML = lettere.join(" ")
    if (!lettere.includes("_")) {
        setTimeout(function() {
            alert("hai vinto :)");
            window.close();
        }, 1000); //1 sec
        document.getElementById("OMINO").innerHTML= `<img src=${omino.liberta()} >`
    }

    event.target.disabled = true;
}

function displayParola(){
    let secret = document.getElementById("parolaSegreta")
    secret.innerHTML = "_ ".repeat(parolaDaIndovinare.length)
}


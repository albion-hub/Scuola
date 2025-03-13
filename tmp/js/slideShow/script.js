class SlideShow {
    constructor(time) {
        this.time = time;
        this.immagini = [];
        this.index = 0;
        this.intervalId = null;  // Memorizza l'ID del setInterval
    }

    addImmagine(immagine) {
        this.immagini.push(immagine);
    }

    scorimentoAutomatico() {
        const div = document.getElementById("scorimento");
        this.intervalId = setInterval(() => {
            this.index = (this.index + 1) % this.immagini.length;
            div.innerHTML = `<img src="${this.immagini[this.index].getPath()}" alt="Slide" />`;
        }, this.time);
    }

    fermareScorimento() {
        clearInterval(this.intervalId); 
    }

    scoriAdestra() {
        const div = document.getElementById("scorimento");
        this.index = (this.index + 1) % this.immagini.length;
        div.innerHTML = `<img src="${this.immagini[this.index].getPath()}" alt="Slide" />`;
    }

    scoriAdsinistra() {
        const div = document.getElementById("scorimento");
        this.index = (this.index - 1 + this.immagini.length) % this.immagini.length;
        div.innerHTML = `<img src="${this.immagini[this.index].getPath()}" alt="Slide" />`;
    }
}

class Immagine {
    constructor(path, descrizione) {
        this.path = path;
        this.descrizione = descrizione;
    }

    getDescrizione() {
        return this.descrizione;
    }

    getPath() {
        return this.path;
    }
}

const immagini = new SlideShow(2000); 

document.addEventListener("DOMContentLoaded", function() {
    const immagine1 = new Immagine("https://images.unsplash.com/photo-1507371341162-763b5e419408?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0dW5ub3xlbnwwfHwwfHx8MA%3D%3D", "Autunno");
    const immagine2 = new Immagine("https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Inverno");
    const immagine3 = new Immagine("https://plus.unsplash.com/premium_photo-1681255761027-357cb6059c4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyfGVufDB8fDB8fHww", "Estate");

    immagini.addImmagine(immagine1);
    immagini.addImmagine(immagine2);
    immagini.addImmagine(immagine3);

    immagini.scorimentoAutomatico();
    
    document.getElementById("manuale").addEventListener("click", manuale)
    document.getElementById("automatico").addEventListener("click", automatico)
    
    document.getElementById("freciaDB").addEventListener("click", scoriAdestra)
    document.getElementById("freciaSB").addEventListener("click", scoriAdsinistra)

    document.getElementById('automatico').classList.add("frecceNo")
});


function manuale(){
    const frecciaS = document.getElementById('freciaS');
    const frecciaD = document.getElementById('freciaD');

    frecciaS.classList.remove("frecceNo")
    frecciaD.classList.remove("frecceNo")

    immagini.fermareScorimento()

    document.getElementById('manuale').classList.add("frecceNo")
    document.getElementById('automatico').classList.remove("frecceNo")
}

function automatico(){
    const frecciaS = document.getElementById('freciaS');
    const frecciaD = document.getElementById('freciaD');

    frecciaS.classList.add("frecceNo")
    frecciaD.classList.add("frecceNo")

    immagini.scorimentoAutomatico()

    document.getElementById('manuale').classList.remove("frecceNo")
    document.getElementById('automatico').classList.add("frecceNo")
}

function scoriAdestra(){
    immagini.scoriAdestra()
}

function scoriAdsinistra(){
    immagini.scoriAdsinistra()
}
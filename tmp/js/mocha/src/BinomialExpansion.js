function factorial(n) {
    if (n < 0) return NaN;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function expand(expr) {
    let risultato = [];
    let [base, esponente] = expr.split('^');
    esponente = parseInt(esponente);
    base = base.slice(1, -1);  // Rimuove le parentesi

    if (esponente === 0) return '1';
    if (esponente === 1) return base;

    let indiceLettera = 0;

    for (let i = 0; i < base.length; i++) {
        if (/[a-zA-Z]/.test(base[i])) {
            indiceLettera = i;
            break;
        }
    }

    let Coefficiente = 0;
    if (indiceLettera === 0) {
        Coefficiente = 1; 
    } else {
        let coeff = base.slice(0, indiceLettera);
        if (coeff === "" || coeff === "-") {
            Coefficiente = coeff === "-" ? -1 : 1;
        } else {
            Coefficiente = parseInt(coeff);
        }
    }

    let termineNoto = base.slice(indiceLettera + 1).trim();
    termineNoto = termineNoto === "" ? 1 : parseInt(termineNoto);

    // Espansione del binomio usando il teorema di Newton
    for (let k = 0; k <= esponente; k++) {
        let CoefficienteBinomiale = factorial(esponente) / (factorial(k) * factorial(esponente - k));
        let PotenzaCoefficiente = Math.pow(Coefficiente, esponente - k);
        let PotenzaTermineNoto = Math.pow(termineNoto, k);
        let coeficenteFinale = CoefficienteBinomiale * PotenzaCoefficiente * PotenzaTermineNoto;

        if (coeficenteFinale === 1 && k !== esponente) {
            risultato.push(base[indiceLettera] + '^' + (esponente - k));
        } else if (coeficenteFinale === -1 && k !== esponente) {
            risultato.push('-' + base[indiceLettera] + '^' + (esponente - k));
        } else if (k === esponente) {
            risultato.push(coeficenteFinale > 0 ? '+' + coeficenteFinale : coeficenteFinale);
        } else if (esponente - k === 1) {
            risultato.push(coeficenteFinale > 0 ? '+' + coeficenteFinale + base[indiceLettera] : coeficenteFinale + base[indiceLettera]);
        } else {
            risultato.push(coeficenteFinale > 0 ? '+' + coeficenteFinale + base[indiceLettera] + '^' + (esponente - k) : coeficenteFinale + base[indiceLettera] + '^' + (esponente - k));
        }
    }

    risultato = risultato.join(' ');
    if(risultato.slice(0,1) === "+"){
        return risultato.slice(1,risultato.length)
    }
    return risultato

}
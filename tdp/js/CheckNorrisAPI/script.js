document.addEventListener("DOMContentLoaded", function(){

    const categorie = document.getElementById("categorie")

    fetch('https://api.chucknorris.io/jokes/categories') //GET 
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                categorie.innerHTML += `<label>
                                            <input type="radio" name="categorie" value=${element}>
                                                ${element}
                                        </label><br>`
            });
        })
        .catch(error => {
          console.error('Errore:', error);
        });

})

function mostraFrase(){
    const categoriaScelta = document.querySelector('input[name="categorie"]:checked').value;
    const pFrase = document.getElementById("frase")

    fetch(`https://api.chucknorris.io/jokes/random?category=${categoriaScelta}`)
        .then(response => response.json())
        .then(data => {
            pFrase.innerHTML = `la tua frase: ${data.value}`
        })
        .catch(error => {
            console.error('Errore:', error);
        })
}

/* Übersicht der Drinks als HTTP-Anfrage */

function fetchData() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then(res => res.json())
    .then(data => {
        displayData(data.drinks);
        console.log(data.drinks);
    })
    .catch(error => {
        console.log('Abruf hat nicht funktioniert:', error)
    })
}

function displayData(data) {
    const drinkDiv = document.getElementById("drinks");

    data.forEach(drink => {
        const heading = document.createElement("h1");
        heading.innerHTML = drink.strCategory;
        drinkDiv.appendChild(heading);

      /*   const image = document.createElement("img");
        image.src = coffee.image;
        //kinder des div-containers
        coffeeDiv.appendChild(image) */
    })

   
}


/* Beispiel-Anfrage für den Drink margarita */

function fetchDataMargarita() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(dataMargarita => {
        displayDataMargarita(dataMargarita.drinks);
        console.log(dataMargarita.drinks);
    })
    .catch(error => {
        console.log('Abruf hat nicht funktioniert:', error)
    })
}

function displayDataMargarita(dataMargarita) {
    const drinkDiv = document.getElementById("drink-margarita");

    const heading = document.createElement("h1");
    heading.innerHTML = dataMargarita[0].strDrink;
    drinkDiv.appendChild(heading);

    const image = document.createElement("img");
    image.src = dataMargarita[0].strDrinkThumb;
    drinkDiv.appendChild(image);

    const description = document.createElement("p");
    description.innerHTML = dataMargarita[0].strInstructions;
    drinkDiv.appendChild(description);
}

/* Anfrage für den Drink pina colada */

function fetchDataPinaColada() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=pina colada')
    .then(res => res.json())
    .then(dataPinaColada => {
        displayDataMargarita(dataPinaColada.drinks);
        console.log(dataPinaColada.drinks);
    })
    .catch(error => {
        console.log('Abruf hat nicht funktioniert:', error)
    })
}

function displayDataPinaColada(dataPinaColada) {
    const drinkDiv = document.getElementById("drink-Pina Colada");

    const heading = document.createElement("h1");
    heading.innerHTML = dataPinaColada[0].strDrink;
    drinkDiv.appendChild(heading);

    const description = document.createElement("p");
    description.innerHTML = dataPinaColada[0].strInstructions;
    drinkDiv.appendChild(description);

}

/* Anfrage für den Drink mojito */

function fetchDataMojito() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
    .then(res => res.json())
    .then(dataMojito => {
        displayDataMargarita(dataMojito.drinks);
        console.log(dataMojito.drinks);
    })
    .catch(error => {
        console.log('Abruf hat nicht funktioniert:', error)
    })
}

function displayDataMojito(dataMojito) {
    const drinkDiv = document.getElementById("drink-mojito");

    const heading = document.createElement("h1");
    heading.innerHTML = dataMojito[0].strDrink;
    drinkDiv.appendChild(heading);

    const description = document.createElement("p");
    description.innerHTML = dataPinaColada[0].strInstructions;
    drinkDiv.appendChild(description);

}

/* Anfrage für den Drink gin tonic */

function fetchDataGinTonic() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin tonic')
    .then(res => res.json())
    .then(dataGinTonic => {
        displayDataMargarita(dataGinTonic.drinks);
        console.log(dataGinTonic.drinks);
    })
    .catch(error => {
        console.log('Abruf hat nicht funktioniert:', error)
    })
}

function displayDataGinTonic(dataGinTonic) {
    const drinkDiv = document.getElementById("drink-gintonic");

    const heading = document.createElement("h1");
    heading.innerHTML = dataGinTonic[0].strDrink;
    drinkDiv.appendChild(heading);

    const description = document.createElement("p");
    description.innerHTML = dataGinTonic[0].strInstructions;
    drinkDiv.appendChild(description);

}




/* allgemeiner JavaScript Aufruf für alle Events */

document.addEventListener("DOMContentLoaded", function() {
    fetchData();
    fetchDataPinaColada();
    fetchDataMojito();
    fetchDataGinTonic();
});



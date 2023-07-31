
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


/* allgemeiner JavaScript Aufruf für alle Events */

document.addEventListener("DOMContentLoaded", function() {
    fetchData();
    fetchDataMargarita();
});



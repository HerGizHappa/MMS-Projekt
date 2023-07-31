// JavaScript für die Website

// Funktion, um das Dropdown-Menü ein- und auszublenden
function toggleMenu() {
  var dropdownContent = document.getElementById("dropdown");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}
// Funktion, um die Zutaten schweben zu lassen
function floatIngredient(ingredient) {
  ingredient.style.animation = "float 3s ease-in-out infinite";
}

// Funktion zum Abrufen der Zubereitungsschritte von der API
function fetchPreparationSteps(cocktailName, cocktailId) {
  const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const cocktail = data.drinks[0];
      const steps = getCocktailPreparationSteps(cocktail);
      showSteps(steps, cocktailId);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Funktion zum Extrahieren der Zubereitungsschritte aus dem Cocktail-Objekt
function getCocktailPreparationSteps(cocktail) {
  const steps = [];
  for (let i = 1; i <= 15; i++) {
    const step = cocktail[`strInstructions${i}`];
    if (step && step.trim() !== '') {
      steps.push(step.trim());
    } else {
      // Wenn kein weiterer Schritt vorhanden ist, brechen wir die Schleife ab.
      break;
    }
  }
  return steps;
}

// Funktion zum Anzeigen der Zubereitungsschritte für einen Cocktail
function showSteps(cocktailSteps, cocktailId) {
  const stepsList = document.getElementById(cocktailId);

  // Zuerst leeren wir die Liste, um sicherzustellen, dass keine alten Schritte angezeigt werden.
  stepsList.innerHTML = '';

  // Füge jeden Zubereitungsschritt als Listenelement zur Liste hinzu
  cocktailSteps.forEach((step) => {
    const li = document.createElement('li');
    li.textContent = step;
    stepsList.appendChild(li);
  });
}

// Aufruf der Funktion zum Abrufen der Zubereitungsschritte für jeden Cocktail, wenn die Seite geladen ist
window.onload = function() {
  fetchPreparationSteps('Pina Colada', 'pinaColadaSteps');
  fetchPreparationSteps('Mojito', 'mojitoSteps');
  fetchPreparationSteps('Gin Tonic', 'ginTonicSteps');
};




// JavaScript-Code für die Aktion, wenn der Button geklickt wird.
document.getElementById("drinkButton1").addEventListener("click", function() {
  // Holt sich Bild-Element durch seine ID.
  var magic_bilder = document.getElementById("PinaColada_magic");

  if (magic_bilder.src.endsWith("cocktail_pinaColada_magic.jpg")) {
    magic_bilder.src = "newmagicpina.jpg"; // Pfad zum neuen Bild, z. B. bild2.jpg
    magic_bilder.alt = "newmagic_pina"; // Alternativer Text für das neue Bild
  } else {
    magic_bilder.src = "cocktail_pinaColada_magic.jpg"; // Pfad zum ursprünglichen Bild
    magic_bilder.alt = "Pina Colada-magic"; // Alternativer Text für das ursprüngliche Bild
  }
});


// JavaScript-Code für die Aktion, wenn der Button geklickt wird.
document.getElementById("drinkButton2").addEventListener("click", function() {
  // Holt sich Bild-Element durch seine ID.
  var magic_bilder = document.getElementById("Mojito_magic");

  if (magic_bilder.src.endsWith("cocktail_Mojito_magic.jpg")) {
    magic_bilder.src = "newmagicmojito.jpg"; // Pfad zum neuen Bild, z. B. bild2.jpg
    magic_bilder.alt = "newmagic_mojito"; // Alternativer Text für das neue Bild
  } else {
    magic_bilder.src = "cocktail_Mojito_magic.jpg"; // Pfad zum ursprünglichen Bild
    magic_bilder.alt = "Mojito-magic"; // Alternativer Text für das ursprüngliche Bild
  }
});

// JavaScript-Code für die Aktion, wenn der Button geklickt wird.
document.getElementById("drinkButton3").addEventListener("click", function() {
  // Holt sich Bild-Element durch seine ID.
  var magic_bilder = document.getElementById("GinTonic_magic");

  if (magic_bilder.src.endsWith("pic/cocktail_ginTonic_magic.jpg")) {
    magic_bilder.src = "pic/newmagicGinTonic.jpg"; // Pfad zum neuen Bild, z. B. bild2.jpg
    magic_bilder.alt = "newmagic_GinTonic"; // Alternativer Text für das neue Bild
  } else {
    magic_bilder.src = "pic/cocktail_ginTonic_magic.jpg"; // Pfad zum ursprünglichen Bild
    magic_bilder.alt = "Gin Tonic-magic"; // Alternativer Text für das ursprüngliche Bild
  }
}); 


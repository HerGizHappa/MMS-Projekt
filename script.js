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

// Funktion, um die Animation zu stoppen, wenn die Maus nicht mehr über dem Bild ist
function stopFloat(ingredient) {
  ingredient.style.animation = "";
}

// Funktion, um die API-Texte einzublenden
function showApiText(cocktailId) {
  var apiText = document.querySelector("#" + cocktailId + " .api-text");
  apiText.style.display = "block";
}

function hideApiText(cocktailId) {
  var apiText = document.querySelector("#" + cocktailId + " .api-text");
  apiText.style.display = "none";
}

// JavaScript-Code für die Aktion, wenn der Button geklickt wird.
document.getElementById("drinkButton1").addEventListener("click", function() {
  // Holen Sie sich das Bild-Element durch seine ID.
  var magic_bilder = document.getElementById("PinaColada_magic");

  // Überprüfen Sie das aktuelle Bild und ändern Sie die Bildquelle basierend darauf.
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
  // Holen Sie sich das Bild-Element durch seine ID.
  var magic_bilder = document.getElementById("Mojito_magic");

  // Überprüfen Sie das aktuelle Bild und ändern Sie die Bildquelle basierend darauf.
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
  // Holen Sie sich das Bild-Element durch seine ID.
  var magic_bilder = document.getElementById("GinTonic_magic");

  // Überprüfen Sie das aktuelle Bild und ändern Sie die Bildquelle basierend darauf.
  if (magic_bilder.src.endsWith("pic/cocktail_ginTonic_magic.jpg")) {
    magic_bilder.src = "pic/newmagicGinTonic.jpg"; // Pfad zum neuen Bild, z. B. bild2.jpg
    magic_bilder.alt = "newmagic_GinTonic"; // Alternativer Text für das neue Bild
  } else {
    magic_bilder.src = "pic/cocktail_ginTonic_magic.jpg"; // Pfad zum ursprünglichen Bild
    magic_bilder.alt = "Gin Tonic-magic"; // Alternativer Text für das ursprüngliche Bild
  }
});
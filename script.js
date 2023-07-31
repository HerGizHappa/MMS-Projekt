// JavaScript für die Website

// Funktion, um das Dropdown-Menü ein- und auszublenden
function toggleMenu() {
  var dropdownContent = document.getElementById("dropdown");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";

  // Funktion, um zum entsprechenden Abschnitt der Website zu scrollen
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // Funktion, um das Dropdown-Menü zu schließen, wenn ein Link angeklickt wird
  function closeDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = 'none';
  }

  // Funktion zum Toggle des Dropdown-Menüs
  function toggleMenu() {
    const dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  }

  // Event Listener für das Klicken auf die Links in der Navigation
  document.querySelectorAll('.menu-item a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSection = link.getAttribute('href').replace('#', '');
      scrollToSection(targetSection);
      closeDropdown();
    });
  });

  // Event Listener für das Klicken außerhalb des Dropdown-Menüs, um es zu schließen
  window.addEventListener('click', (event) => {
    const dropdown = document.getElementById('dropdown');
    if (!event.target.matches('.menu-icon') && dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    }
  });  
}
// Funktion, um die Zutaten schweben zu lassen
function floatIngredient(ingredient) {
  ingredient.style.animation = "float 3s ease-in-out infinite";
}


// Funktion, um die Animation zu stoppen, wenn die Maus nicht mehr über dem Bild ist
function stopFloat(ingredient) {
  ingredient.style.animation = ""; 
}
// Funktion, um die Zubereitung für einen einzelnen Cocktail abzurufen und anzuzeigen
function getCocktailInstructions(cocktailName, containerId) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
    .then(response => response.json())
    .then(data => {
      const cocktail = data.drinks[0];
      const container = document.getElementById(containerId);

      if (cocktail) {
        const instructions = cocktail.strInstructions;
        const cocktailInstructions = `
          <h2>${cocktail.strDrink}</h2>
          <p>${instructions}</p>
        `;
        container.innerHTML = cocktailInstructions;
      } else {
        container.innerHTML = "<p>Zubereitungsinformationen für diesen Cocktail sind nicht verfügbar.</p>";
      }
    })
    .catch(error => {
      console.error(`Fehler beim Abrufen der Zubereitungsinformationen für ${cocktailName}:`, error);
    });
}

// Aufruf der Funktionen, um die Zubereitung für die einzelnen Cocktails abzurufen, wenn das DOM geladen ist
document.addEventListener("DOMContentLoaded", () => {
  getCocktailInstructions("Pina Colada", "drink-pinacolada");
  getCocktailInstructions("Mojito", "drink-mojito");
  getCocktailInstructions("Gin Tonic", "drink-gintonic");
});




// JavaScript-Code für die Aktion, wenn der Button geklickt wird.
document.getElementById("drinkButton1").addEventListener("click", function() {
  // Holt sich Bild-Element durch seine ID.
  var magic_bilder = document.getElementById("PinaColada_magic");

  if (magic_bilder.src.endsWith("pic/cocktail_pinaColada_magic.JPG")) {
    magic_bilder.src = "pic/newmagicpina.JPG"; // Pfad zum neuen Bild, z. B. bild2.jpg
    magic_bilder.alt = "newmagic_pina"; // Alternativer Text für das neue Bild
  } else {
    magic_bilder.src = "pic/cocktail_pinaColada_magic.JPG"; // Pfad zum ursprünglichen Bild
    magic_bilder.alt = "Pina Colada-magic"; // Alternativer Text für das ursprüngliche Bild
  }
});

// JavaScript-Code für die Aktion, wenn der Button geklickt wird.
document.getElementById("drinkButton2").addEventListener("click", function() {
  // Holt sich Bild-Element durch seine ID.
  var magic_bilder = document.getElementById("Mojito_magic");

  if (magic_bilder.src.endsWith("pic/cocktail_Mojito_magic.JPG")) {
    magic_bilder.src = "pic/newmagicmojito.JPG"; // Pfad zum neuen Bild, z. B. bild2.jpg
    magic_bilder.alt = "newmagic_mojito"; // Alternativer Text für das neue Bild
  } else {
    magic_bilder.src = "pic/cocktail_Mojito_magic.JPG"; // Pfad zum ursprünglichen Bild
    magic_bilder.alt = "Mojito-magic"; // Alternativer Text für das ursprüngliche Bild
  }
});

// JavaScript-Code für die Aktion, wenn der Button geklickt wird.
document.getElementById("drinkButton3").addEventListener("click", function() {
  // Holt sich Bild-Element durch seine ID.
  var magic_bilder = document.getElementById("GinTonic_magic");

  if (magic_bilder.src.endsWith("pic/cocktail_ginTonic_magic.JPG")) {
    magic_bilder.src = "pic/newmagicGinTonic.JPG"; // Pfad zum neuen Bild, z. B. bild2.jpg
    magic_bilder.alt = "newmagic_GinTonic"; // Alternativer Text für das neue Bild
  } else {
    magic_bilder.src = "pic/cocktail_ginTonic_magic.JPG"; // Pfad zum ursprünglichen Bild
    magic_bilder.alt = "Gin Tonic-magic"; // Alternativer Text für das ursprüngliche Bild
  }
}); 

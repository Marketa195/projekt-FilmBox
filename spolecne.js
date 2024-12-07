// Funkce pro přepínání třídy
const zmenaTlacitka = () => {
    // Najdeme prvek s ID "menu-polozky"
    const polozkyTlacitka = document.querySelector('#menu-polozky');

    // Přepínáme třídu "show" (přidá/odebere)
    if (polozkyTlacitka.classList.contains('show')) {
        polozkyTlacitka.classList.remove('show');
    } else {
        polozkyTlacitka.classList.add('show');
    }
};

// Najdeme tlačítko s ID "menu-tlacitko"
const rozbaleniTlacitka = document.querySelector('#menu-tlacitko');

// Přidáme posluchač události "click"
rozbaleniTlacitka.addEventListener('click', zmenaTlacitka);

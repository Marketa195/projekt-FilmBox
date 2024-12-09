const zmenaTlacitka = () => {

    const polozkyTlacitka = document.querySelector("#menu-polozky");

    if (polozkyTlacitka.classList.contains("show")) {
        polozkyTlacitka.classList.remove("show");
    } else {
        polozkyTlacitka.classList.add("show");
    }
};

const rozbaleniTlacitka = document.querySelector("#menu-tlacitko");

rozbaleniTlacitka.addEventListener("click", zmenaTlacitka);

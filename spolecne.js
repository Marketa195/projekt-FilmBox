const zmenaTlacitka = () => {
    const polozkyTlacitka = document.querySelector("#menu-polozky");
    const rozbaleniTlacitka = document.querySelector("#menu-tlacitko");

    if (polozkyTlacitka.classList.contains("show")) {
        polozkyTlacitka.classList.remove("show");
        rozbaleniTlacitka.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        polozkyTlacitka.classList.add("show");
        rozbaleniTlacitka.innerHTML = '<i class="fas fa-xmark"></i>';
    }
};

const rozbaleniTlacitka = document.querySelector("#menu-tlacitko");

rozbaleniTlacitka.addEventListener("click", zmenaTlacitka);

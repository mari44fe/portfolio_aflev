window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    //registrer klik på menu knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toogle menu");

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult =
        document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        //menuen er nu skjult  -ændre til burger menu tegn
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        //menuen er nu vist -ændre menuknap til x

        document.querySelector("#menuknap").textContent = "˟";
    }

     scrollPuls();

}

function scrollPuls() {
    console.log("scrollPuls");

    document.querySelector("#scroll").classList.add("pulse");
}

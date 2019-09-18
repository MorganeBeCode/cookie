let affichage = document.querySelector("#affichage");
let clic = document.querySelector("#clic");
let score = 0;
let multiplier = document.querySelector("#multiplier");
let multiplicateur = 1;
let autoclic = document.querySelector("#autoclic");
let bonus = document.querySelector("#bonus");

clic.addEventListener("click", function () {
    score += multiplicateur;
    affichage.innerHTML = score;
})

function augmenterMultiplicateur() {
    if (score >= (50 * multiplicateur)) {
        score -= (50 * multiplicateur);
        multiplicateur++;
    }
}

autoclic.addEventListener("click", function () {
    if (score >= 500) {
        setInterval(function () { score += multiplicateur; affichage.innerHTML = score; }, 1000);
        autoclic.style.display = "none";
        let info = document.createElement("span");
        info.innerHTML = "Autoclick acheté";
        info.setAttribute("id", "info");
        document.querySelector(".grid-container").appendChild(info);
    }
})

multiplier.addEventListener("click", function () {
    augmenterMultiplicateur();
    multiplier.innerHTML = `Multiplicateur x${multiplicateur} <br /> coût : ${50 * multiplicateur}`;
    affichage.innerHTML = score;
})

let y = 30;
bonus.addEventListener("click", function () {
    if (score >= 5000) {
        let interval = setInterval(function () {
            score += (multiplicateur * 2);
            y--;
            affichage.innerHTML = score;
            bonus.innerHTML = y
        }, 1000);

        setTimeout(clearInterval(interval), 30000);
    }
})

document.querySelector("#cheat").addEventListener("click", function () {
    score += 1000;
    affichage.innerHTML = score;
})
let affichage = document.querySelector("#affichage");
let clic = document.querySelector("#clic");
let score = 0;
let multiplier = document.querySelector("#multiplier");
let multiplicateur = 1;
let autoclic = document.querySelector("#autoclic");
let bonus = document.querySelector("#bonus");
let autoclicPurchase = false;
let y = 30;

function check() {
    if (score < (50 * multiplicateur)) {
        multiplier.disabled = true;
    } else {
        multiplier.disabled = false;
    }
    if (score < 500 || autoclicPurchase == true) {
        autoclic.disabled = true;
    } else {
        autoclic.disabled = false;
    }
    if (score < 5000 || y < 30) {
        bonus.disabled = true;
    } else {
        bonus.disabled = false;
    }

}
check();

clic.addEventListener("click", function () {
    score += multiplicateur;
    affichage.innerHTML = score;
    check();
})

function augmenterMultiplicateur() {
    if (score >= (50 * multiplicateur)) {
        score -= (50 * multiplicateur);
        multiplicateur++;
    }
}

autoclic.addEventListener("click", function () {
    autoclicPurchase = true;
    setInterval(function () { check(); score += multiplicateur; affichage.innerHTML = score; }, 1000);
    autoclic.disabled = true;
    autoclic.innerHTML = "Autoclick acheté";
    check();
})

multiplier.addEventListener("click", function () {
    augmenterMultiplicateur();
    multiplier.innerHTML = `Multiplicateur x${(multiplicateur) + 1} <br /> coût : ${50 * multiplicateur}`;
    affichage.innerHTML = score;
    check();
})

function acheterBonus() {
    let interval = setInterval(function () {
        check();
        score += (multiplicateur * 2);
        bonus.innerHTML = y;
        affichage.innerHTML = score;
        bonus.disabled = true;
        y--;
        if (y == -1) {
            clearInterval(interval);
            bonus.innerHTML = "Acheter bonus 200% <br /> Coût : 5000";
            bonus.disabled = false;
            y = 30;
        }
    }, 1000);


}
bonus.addEventListener("click", function () {
    if (score >= 5000) {
        acheterBonus();
    }
})

let cheat = document.querySelector("#cheat");

cheat.addEventListener("click", function () {
    let mdp = prompt("Quel est le mot-de-passe ?");
    if (mdp == "bazinga") {
        document.querySelector(".grid-container").removeChild(cheat);
        let cheat2 = document.createElement("button");
        cheat2.setAttribute("id", "cheat2");
        cheat2.innerHTML = "cheat";
        document.querySelector(".grid-container").insertBefore(cheat2, autoclic);
        cheat2.addEventListener("click", function () {
            score += 1000;
            affichage.innerHTML = score;
            check();
        })
    }
})


const citationTexte = document.getElementById("citationTexte");
const citationAuteur = document.getElementById("citationAuteur");
const nouvelleCitation = document.getElementById("nouvelleCitation");

let currentIndex = 0;

citationTexte.addEventListener("animationend", () => {
    citationTexte.classList.remove("animate__animated", "animate__fadeIn");
    nouvelleCitation.disabled = false;
    nouvelleCitation.style.cursor = "pointer";
});

const quotes = [
    {
        texte: "Burge$$ un jour, Burge$$ toujours.", auteur: "Axolotl"
    },
    {
        texte: "It's time to bubububububurge$$", auteur: "Axolotl"
    },
    {
        texte: "Quand le lion chante, les poules cries", auteur: "Un sage"
    },
    {
        texte: "Si j'exiiiiste, si j'exiiiiste. C'est d'être faaaan, c'est d'être faaaan !", auteur: "Pascal Obistro"
    },
    {
        texte: "Crazy hair, don't care 💅💁‍♀️", auteur: "Jessica, 45 years old"
    },
    {
        texte: "Sensoriellement, c'est pas ouf", auteur: "Pupuce"
    },
    {
        texte: "Ca dépend tu vas à combien de miles par heure ?", auteur: "Un philosophe"
    }
]


function randomQuote() {
    const indexAleatoire = getRandomIndex();
    const selectedQuote = quotes[indexAleatoire];
    citationTexte.textContent = selectedQuote.texte;
    citationAuteur.textContent = selectedQuote.auteur;

    // Animate the quote text
    citationTexte.classList.add("animate__animated", "animate__fadeIn");
    nouvelleCitation.disabled = true;
    nouvelleCitation.style.cursor = "not-allowed";
}

function getRandomIndex() {
    let newIndex;

    // boucle pour s'assurer que le nouvel index est différent de l'index actuel
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentIndex);
    currentIndex = newIndex;
    return newIndex;
}

nouvelleCitation.addEventListener("click", randomQuote);
randomQuote();

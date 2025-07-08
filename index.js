const citationTexte = document.getElementById("citationTexte");
const citationAuteur = document.getElementById("citationAuteur");
const nouvelleCitation = document.getElementById("nouvelleCitation");

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
]


function randomQuote() {
    const indexAleatoire = Math.floor(Math.random() * quotes.length)
    const selectedQuote = quotes[indexAleatoire];
    citationTexte.textContent = selectedQuote.texte;
    citationAuteur.textContent = selectedQuote.auteur;
}

nouvelleCitation.addEventListener("click", randomQuote);
randomQuote();

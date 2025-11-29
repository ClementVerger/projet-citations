// Tableau de citations
const citations = [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
    "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. - Albert Schweitzer",
    "Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi. - Georges Clémenceau",
    "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui. - Franklin D. Roosevelt",
    "Fais de ta vie un rêve, et d'un rêve, une réalité. - Antoine de Saint-Exupéry"
];

// Fonction pour obtenir une citation aléatoire
function citationAleatoire() {
    const index = Math.floor(Math.random() * citations.length);
    return citations[index];
}

// Export du module
module.exports = citationAleatoire;
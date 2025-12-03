let produits = [
    {nom: "Stylo", prix: 1.5},
    {nom: "Cahier", prix: 3},
    {nom: "Gomme", prix: 0.8}
];

const table = document.createElement("table");
const tr1 = document.createElement("tr");
const thNom = document.createElement("th");
const thPrix = document.createElement("th");

tr1.appendChild(thNom);
tr1.appendChild(thPrix);
table.appendChild(tr1);

thNom.textContent = "Nom";
thPrix.textContent = "Prix";

for(let i = 0; i < produits.length; i++) {

    const tr2 = document.createElement("tr");
    const tdNom = document.createElement("td");
    const tdPrix = document.createElement("td");

    tdNom.textContent = produits[i].nom;
    tdPrix.textContent = produits[i].prix;

    tr2.appendChild(tdNom);
    tr2.appendChild(tdPrix);
    table.appendChild(tr2);
}

console.log(table);

const body = document.body;
body.appendChild(table);
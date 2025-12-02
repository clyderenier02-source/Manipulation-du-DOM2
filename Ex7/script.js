let nombres = [3, 8, 12, 5, 2];

const ul = document.getElementById("liste");

for(let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    
    if(nombre % 2 === 0) {
    const li = document.createElement("li");
    li.textContent = nombre;
    ul.appendChild(li);
    }
}
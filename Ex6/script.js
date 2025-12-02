let fruits = ["pomme", "banane", "orange"];
const ul = document.getElementById("liste-fruits")

for(let i = 0; i < fruits.length; i++) {
    const li = document.createElement("li");
    li.textContent = fruits[i];
    console.log(li);
    ul.appendChild(li)
}
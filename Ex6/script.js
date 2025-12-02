let fruits = ["pomme", "banane", "orange"];

for(let i = 0; i < fruits.length; i++) {
    const li = document.createElement("li");
    li.textContent = fruits[i];
    console.log(li);
}
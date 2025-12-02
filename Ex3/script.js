const p = document.querySelectorAll(".info");

for(let i = 0; i < p.length; i++) {
    p[i].textContent = "Modifié"
    console.log(p[i].textContent)
}

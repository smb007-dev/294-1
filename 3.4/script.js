const btnEl = document.getElementById("choose");

btnEl.addEventListener("click", () => {
    const liEls = document.querySelectorAll("#destinations li");
    liEls.forEach(li => li.classList.remove("highlight"));

    const randomIndex = Math.floor(Math.random() * liEls.length);
    const randomLi = liEls[randomIndex];
    randomLi.classList.add("highlight");

    const country = randomLi.querySelector(".country").innerText;
    const capital = randomLi.querySelector(".capital").innerText;

    alert("Dein nächstes Reiseziel: " + country + "\nHauptstadt: " + capital);
});
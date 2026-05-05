
const cards = document.querySelectorAll(".card, .intro-block, .outro-block");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});


cards.forEach(card => {
  card.addEventListener("click", () => {
    card.style.background = "#e0eadf";
  });
});
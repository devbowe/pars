const cardsPromo = document.querySelectorAll('[data-card="promo"]');
const buttonsClose = document.querySelectorAll('[data-button="close-promo"]');
const promoTerms = document.querySelectorAll(".promo-term");
const linkFormTerm = document.querySelectorAll(".term-promo-btn");

cardsPromo.forEach((card, i) => {
    card.addEventListener("click", (e) => {
        promoTerms[i].parentElement.classList.add("active");
    });
});

buttonsClose.forEach((button) => {
    const modal = button.parentElement.parentElement.parentElement;

    button.addEventListener("click", (e) => {
        modal.classList.remove("active");
    });
});

linkFormTerm.forEach((link) => {
    link.addEventListener("click", (e) => {
        link.parentElement.parentElement.parentElement.classList.remove(
            "active"
        );
    });
});

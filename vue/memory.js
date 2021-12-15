const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstcard, secondCard;


function flipCard() {
this.classList.toggle('flip');

if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstcard = this;
} else{
    hasFlippedCard= false;
secondCard = this;

if (firstcard.dataset.framework === secondCard.dataset.framework) {
    firstcard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
} else{
    setTimeout(() => {
    firstcard.classList.remove('flip');
    secondCard.classList.remove('flip');
} , 1500);
}

}
}

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


cards.forEach(card => card.addEventListener('click', flipCard))


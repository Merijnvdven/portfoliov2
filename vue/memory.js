const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstcard, secondCard;


function flipCard() {
this.classList.toggle('flip');

if (hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstcard = this;
} else{
    hasFlippedCard= false;
secondCard = this;

}
}

cards.forEach(card => card.addEventListener('click', flipCard))
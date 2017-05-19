class GameController {
    constructor(){
        console.log('Starting GameController...');

        let $ = document.querySelector.bind(document);

        this._cards = new Cards();
        this._deckcardsView  = new DeckCardsView($('#deck_cards'));
        this._deckcardsView.update(CardShuffle.shuffled(this._cards.deckOfCards));
        

    }
}
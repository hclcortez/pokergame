class GameController {
    constructor(){
        console.log('Starting GameController...');

        this._$ = document.querySelector.bind(document);

        this._turns = ['Hand','Flop','Turn','River'];
        this._turn = 0;
        this._tableCards = [];

        this._cards = new Cards();
        
        this._deckcardsView  = new DeckCardsView(this._$('#deck_cards'));
        this._tablecardsView = new TableCardsView(this._$('#table_cards'));
        this._turnView       = new TurnView(this._$('#btn_deal'));

        this._deckcards = CardShuffle.shuffled(this._cards.deckOfCards);
        this._deckcardsView.update(this._deckcards);
        this._turnView.update('Deal Cards');
        this.watch();
        this.dealCards();

    }

    dealCards(){
        console.log('Dealing cards');
    }

    watch(){
        this._$('#btn_deal').addEventListener('click',() => {
            switch(this._turns.shift()){
                case 'Hand':
                    console.log('Hand');
                    this._turnView.update(this._turns[0]);
                    let player1 = [];
                    player1.push(this._deckcards.shift());
                    player1.push(this._deckcards.shift());
                    console.log(player1);
                    break;

                case 'Flop':
                    console.log('Flop');
                    this._tableCards.push(this._deckcards.shift());
                    this._tableCards.push(this._deckcards.shift());
                    this._tableCards.push(this._deckcards.shift());
                    this._tablecardsView.update(this._tableCards);
                    this._turnView.update(this._turns[0]);
                    break;

                case 'Turn':
                    console.log('Turn');
                    this._tableCards.push(this._deckcards.shift());
                    this._tablecardsView.update(this._tableCards);
                    this._turnView.update(this._turns[0]);
                    break;

                case 'River':
                    console.log('River');
                    this._tableCards.push(this._deckcards.shift());
                    this._tablecardsView.update(this._tableCards);
                    this._turnView.update('Show Town');
                    break;

                default:
                    console.log('Show town is on the table');
            }
            this._deckcardsView.update(this._deckcards);
        });
    }
}
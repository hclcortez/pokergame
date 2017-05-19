class CardShuffle {
    constructor(){
        throw new Erro("CardShuffle doesn't Instantiated");
    }

    static shuffled(cards){
        for(let i = cards.length; i; i--){
            let j = Math.floor(Math.random()*i);
            let temp = cards[i -1];
            cards[i-1] = cards[j];
            cards[j] = temp;
        }
        return cards;
    }
}
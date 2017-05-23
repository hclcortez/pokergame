class Poker {
    
    constructor(){
        throw new Erro("CardShuffle doesn't Instantiated");
    }

    static flush(cards){
        console.log('Return flush');
        return cards.filter((item, index, array) => {
           return item.suit === array[0].suit;
        }).slice(0,5);
    }

    static pair(cards){
        console.log('Return flush');
        return cards.filter((item, index, array) => {
           return item.value === array[0].value;
        }).slice(0,2);
    }

    static fourOfKind(cards){
        console.log('Return flush');
        return cards.filter((item, index, array) => {
           return item.value === array[0].value;
        }).slice(0,4);
    }

}
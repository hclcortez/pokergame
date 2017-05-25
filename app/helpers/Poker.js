class Poker {
    
    constructor(){
        this._teste = function(){
            console.log('no');
        }
        throw new Erro("CardShuffle doesn't Instantiated");
    }

    static flush(cards){
        return cards.filter((item, index, array) => {
           return (item.suit === array[0].suit)
        }).slice(0,5);
    }

    static pair(cards){
        let pair = cards.filter((item, index, array) => {
           return item.value === array[0].value;
        }).slice(0,2);
        console.log(pair);
        return pair.concat(this.getSomeCardNotsuit(cards,pair[0].suit,3));

    }

    static fourOfKind(cards){
        return cards.filter((item, index, array) => {
           return item.value === array[0].value;
        }).slice(0,4);
    }

    static getSomeCardNotsuit(cards,suit,size){
        return cards.filter((element) => {
            return element.suit != suit;
        }).slice(0,size);
    }

}
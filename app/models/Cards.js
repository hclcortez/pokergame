class Cards {
    constructor(){
        console.log('Starting cards...');

        this._clubs = [
            {
                value : [2]
                ,suit : 'Club'
                ,image: 'assets/images/cards/2_of_clubs'
            }
            ,{
                value : 3
                ,suit : 'Club'
                ,image: 'assets/images/cards/3_of_clubs'
            }
            ,{
                value : 4
                ,suit : 'Club'
                ,image: 'assets/images/cards/4_of_clubs'
            }
            ,{
                value : 5
                ,suit : 'Club'
                ,image: 'assets/images/cards/5_of_clubs'
            }
            ,{
                value : 6
                ,suit : 'Club'
                ,image: 'assets/images/cards/6_of_clubs'
            }
            ,{
                value : 7
                ,suit : 'Club'
                ,image: 'assets/images/cards/7_of_clubs'
            }
            ,{
                value : 8
                ,suit : 'Club'
                ,image: 'assets/images/cards/8_of_clubs'
            }
            ,{
                value : 9
                ,suit : 'Club'
                ,image: 'assets/images/cards/9_of_clubs'
            }
            ,{
                value : 10
                ,suit : 'Club'
                ,image: 'assets/images/cards/10_of_clubs'
            }
            ,{
                value : 11
                ,suit : 'Club'
                ,image: 'assets/images/cards/jack_of_clubs'
            }
            ,{
                value : 12
                ,suit : 'Club'
                ,image: 'assets/images/cards/queen_of_clubs'
            }
            ,{
                value : 13
                ,suit : 'Club'
                ,image: 'assets/images/cards/king_of_clubs'
            }
            ,{
                value : 14
                ,suit : 'Club'
                ,image: 'assets/images/cards/ace_of_clubs'
            }
            
        ];

        this._spades = [
            {
                value : 2
                ,suit : 'Spade'
                ,image: 'assets/images/cards/2_of_spades'
            }
            ,{
                value : 3
                ,suit : 'Spade'
                ,image: 'assets/images/cards/3_of_spades'
            }
            ,{
                value : 4
                ,suit : 'Spade'
                ,image: 'assets/images/cards/4_of_spades'
            }
            ,{
                value : 5
                ,suit : 'Spade'
                ,image: 'assets/images/cards/5_of_spades'
            }
            ,{
                value : 6
                ,suit : 'Spade'
                ,image: 'assets/images/cards/6_of_spades'
            }
            ,{
                value : 7
                ,suit : 'Spade'
                ,image: 'assets/images/cards/7_of_spades'
            }
            ,{
                value : 8
                ,suit : 'Spade'
                ,image: 'assets/images/cards/8_of_spades'
            }
            ,{
                value : 9
                ,suit : 'Spade'
                ,image: 'assets/images/cards/9_of_spades'
            }
            ,{
                value : 10
                ,suit : 'Spade'
                ,image: 'assets/images/cards/10_of_spades'
            }
            ,{
                value : 11
                ,suit : 'Spade'
                ,image: 'assets/images/cards/jack_of_spades'
            }
            ,{
                value : 12
                ,suit : 'Spade'
                ,image: 'assets/images/cards/queen_of_spades'
            }
            ,{
                value : 13
                ,suit : 'Spade'
                ,image: 'assets/images/cards/king_of_spades'
            }
            ,{
                value : 14
                ,suit : 'Spade'
                ,image: 'assets/images/cards/ace_of_spades'
            }
            
        ];

        this._hearts = [
            {
                value : 2
                ,suit : 'Heart'
                ,image: 'assets/images/cards/2_of_hearts'
            }
            ,{
                value : 3
                ,suit : 'Heart'
                ,image: 'assets/images/cards/3_of_hearts'
            }
            ,{
                value : 4
                ,suit : 'Heart'
                ,image: 'assets/images/cards/4_of_hearts'
            }
            ,{
                value : 5
                ,suit : 'Heart'
                ,image: 'assets/images/cards/5_of_hearts'
            }
            ,{
                value : 6
                ,suit : 'Heart'
                ,image: 'assets/images/cards/6_of_hearts'
            }
            ,{
                value : 7
                ,suit : 'Heart'
                ,image: 'assets/images/cards/7_of_hearts'
            }
            ,{
                value : 8
                ,suit : 'Heart'
                ,image: 'assets/images/cards/8_of_hearts'
            }
            ,{
                value : 9
                ,suit : 'Heart'
                ,image: 'assets/images/cards/9_of_hearts'
            }
            ,{
                value : 10
                ,suit : 'Heart'
                ,image: 'assets/images/cards/10_of_hearts'
            }
            ,{
                value : 11
                ,suit : 'Heart'
                ,image: 'assets/images/cards/jack_of_hearts'
            }
            ,{
                value : 12
                ,suit : 'Heart'
                ,image: 'assets/images/cards/queen_of_hearts'
            }
            ,{
                value : 13
                ,suit : 'Heart'
                ,image: 'assets/images/cards/king_of_hearts'
            }
            ,{
                value : 14
                ,suit : 'Heart'
                ,image: 'assets/images/cards/ace_of_hearts'
            }
            
        ];

        this._diamonds = [
            {
                value : 2
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/2_of_diamonds'
            }
            ,{
                value : 3
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/3_of_diamonds'
            }
            ,{
                value : 4
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/4_of_diamonds'
            }
            ,{
                value : 5
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/5_of_diamonds'
            }
            ,{
                value : 6
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/6_of_diamonds'
            }
            ,{
                value : 7
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/7_of_diamonds'
            }
            ,{
                value : 8
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/8_of_diamonds'
            }
            ,{
                value : 9
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/9_of_diamonds'
            }
            ,{
                value : 10
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/10_of_diamonds'
            }
            ,{
                value : 11
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/jack_of_diamonds'
            }
            ,{
                value : 12
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/queen_of_diamonds'
            }
            ,{
                value : 13
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/king_of_diamonds'
            }
            ,{
                value : 14
                ,suit : 'Diamond'
                ,image: 'assets/images/cards/ace_of_diamonds'
            }
            
        ];
    }

    get  deckOfCards(){
        return [].concat(this._clubs.concat(this._spades.concat(this._hearts.concat(this._diamonds))));
    }

    get clubs(){
        console.log('Getting clubs');
        return this.deckOfCards.filter(card => {
            return card.suit == 'Club';
        });
        
    }

    get dimonds(){
        console.log('Getting dimonds');
        return this.deckOfCards.filter(card => {
            return card.suit == 'Diamond';
        });
    }

    get spades(){
        console.log('Getting spades');
        return this.deckOfCards.filter(card => {
            return card.suit == 'Spade';
        });
    }

    get hearts(){
        console.log('Getting hearts');
        return this.deckOfCards.filter(card => {
            return card.suit == 'Heart';
        });
    }
}
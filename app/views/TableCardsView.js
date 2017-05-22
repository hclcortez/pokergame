class TableCardsView extends View{
    constructor(element){
        super(element);
    }

    _template(model){
        return `
            <ul class="cards">
                ${model.map( n => `
                    <li>
                        <img class="card" src="${n.image}.png" alt="">
                    </li>
                `).join('')}
            </ul>
        `;
    }
}
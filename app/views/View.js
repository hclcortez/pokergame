class View {
    constructor(element){
        this._element = element;
    }

    _template(){
        throw new Erro('The method needs to be implemented.');
    }

    update(model){
        this._element.innerHTML = this._template(model);
    }
}
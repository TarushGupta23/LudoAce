export class Team {
    constructor(name, id, pieces, cards = []) {
        this.name = name;
        this.id = id;
        this.pieces = pieces;
        this.cards = cards;
    }
}
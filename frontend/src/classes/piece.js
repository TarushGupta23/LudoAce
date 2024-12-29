export class Piece {
    constructor(position, team, id, negativeRounds = 0, isAce = false) {
        this.position = position;
        this.team = team;
        this.id = id;
        this.negativeRounds = negativeRounds;
        this.isAce = isAce;
    }

    setPosition(position) { this.position = position; }
    getPosition() { return this.position; }
}
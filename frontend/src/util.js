import { Piece } from "./classes/piece.js"
import { Team } from "./classes/team.js"

export const boardArray = [
    49, 50, 51, 48, 52, 0, 47, 53, 1, 46, 54, 2, 45, 55, 3, 44, 56, 4,
    38, 39, 40, 41, 42, 43, 5, 6, 7, 8, 9, 10, 37, 57, 58, 59, 60, 61,
    66, 65, 64, 63, 62, 11, 36, 35, 34, 33, 32, 31, 17, 16, 15, 14, 13, 12,
    30, 71, 18, 29, 70, 19, 28, 69, 20, 27, 68, 21, 26, 67, 22, 25, 24, 23
]

export const defaultTeams = [
    new Team('Aliens', 'a', [
        new Piece(null, 'a', 0), new Piece(null, 'a', 1), new Piece(null, 'a', 2), new Piece(null, 'a', 3)
    ]),
    new Team('Machines', 'm', [
        new Piece(null, 'm', 0), new Piece(null, 'm', 1), new Piece(null, 'm', 2), new Piece(null, 'm', 3)
    ]),
    new Team('Demons', 'd', [
        new Piece(null, 'd', 0), new Piece(null, 'd', 1), new Piece(null, 'd', 2), new Piece(null, 'd', 3)
    ]),
    new Team('Creatures', 'c', [
        new Piece(null, 'c', 0), new Piece(null, 'c', 1), new Piece(null, 'c', 2), new Piece(null, 'c', 3)
    ]),
    new Team('Gods', 'g', [
        new Piece(null, 'g', 0), new Piece(null, 'g', 1), new Piece(null, 'g', 2), new Piece(null, 'g', 3)
    ]),
    new Team('Eyes', 'e', [
        new Piece(null, 'e', 0), new Piece(null, 'e', 1), new Piece(null, 'e', 2), new Piece(null, 'e', 3)
    ])
]
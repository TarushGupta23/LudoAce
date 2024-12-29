import { Card } from "./classes/card.js"
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

export const cards = {
    'a': [
        new Card('2', 2, 2, 'a'),
        new Card('3', 3, 3, 'a'),
        new Card('4', 4, 4, 'a'),
        new Card('5', 5, 5, 'a'),
        new Card('6', 6, 6, 'a'),
        new Card('7', 7, 7, 'a'),
        new Card('8', 8, 8, 'a'),
        new Card('9', 9, 9, 'a'),
        new Card('10', 10, 10, 'a'),
        new Card('J', 0, 11, 'a'),
        new Card('Q', 0, 12, 'a'),
        new Card('K', 0, 13, 'a'),
        new Card('A', 1, 14, 'a')
    ],
    'm': [
        new Card('2', 2, 2, 'm'),
        new Card('3', 3, 3, 'm'),
        new Card('4', 4, 4, 'm'),
        new Card('5', 5, 5, 'm'),
        new Card('6', 6, 6, 'm'),
        new Card('7', 7, 7, 'm'),
        new Card('8', 8, 8, 'm'),
        new Card('9', 9, 9, 'm'),
        new Card('10', 10, 10, 'm'),
        new Card('J', 0, 11, 'm'),
        new Card('Q', 0, 12, 'm'),
        new Card('K', 0, 13, 'm'),
        new Card('A', 1, 14, 'm')
    ],
    'd': [
        new Card('2', 2, 2, 'd'),
        new Card('3', 3, 3, 'd'),
        new Card('4', 4, 4, 'd'),
        new Card('5', 5, 5, 'd'),
        new Card('6', 6, 6, 'd'),
        new Card('7', 7, 7, 'd'),
        new Card('8', 8, 8, 'd'),
        new Card('9', 9, 9, 'd'),
        new Card('10', 10, 10, 'd'),
        new Card('J', 0, 11, 'd'),
        new Card('Q', 0, 12, 'd'),
        new Card('K', 0, 13, 'd'),
        new Card('A', 1, 14, 'd')
    ],
    'c': [
        new Card('2', 2, 2, 'c'),
        new Card('3', 3, 3, 'c'),
        new Card('4', 4, 4, 'c'),
        new Card('5', 5, 5, 'c'),
        new Card('6', 6, 6, 'c'),
        new Card('7', 7, 7, 'c'),
        new Card('8', 8, 8, 'c'),
        new Card('9', 9, 9, 'c'),
        new Card('10', 10, 10, 'c'),
        new Card('J', 0, 11, 'c'),
        new Card('Q', 0, 12, 'c'),
        new Card('K', 0, 13, 'c'),
        new Card('A', 1, 14, 'c')
    ],
    'g': [
        new Card('2', 2, 2, 'g'),
        new Card('3', 3, 3, 'g'),
        new Card('4', 4, 4, 'g'),
        new Card('5', 5, 5, 'g'),
        new Card('6', 6, 6, 'g'),
        new Card('7', 7, 7, 'g'),
        new Card('8', 8, 8, 'g'),
        new Card('9', 9, 9, 'g'),
        new Card('10', 10, 10, 'g'),
        new Card('J', 0, 11, 'g'),
        new Card('Q', 0, 12, 'g'),
        new Card('K', 0, 13, 'g'),
        new Card('A', 1, 14, 'g')
    ],
    'e': [
        new Card('2', 2, 2, 'e'),
        new Card('3', 3, 3, 'e'),
        new Card('4', 4, 4, 'e'),
        new Card('5', 5, 5, 'e'),
        new Card('6', 6, 6, 'e'),
        new Card('7', 7, 7, 'e'),
        new Card('8', 8, 8, 'e'),
        new Card('9', 9, 9, 'e'),
        new Card('10', 10, 10, 'e'),
        new Card('J', 0, 11, 'e'),
        new Card('Q', 0, 12, 'e'),
        new Card('K', 0, 13, 'e'),
        new Card('A', 1, 14, 'e')
    ]
}
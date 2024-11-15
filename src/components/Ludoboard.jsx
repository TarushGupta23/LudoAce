import React from "react";
import "./LudoBoard.css";
import { Pawn } from "./Pawn";
import { useState } from "react";

const LudoBoard = () => {
    const [pieces, setPieces] = useState([
        'r', 'r', 'r', 'r',
        'g', 'g', 'g', 'g',
        'b', 'b', 'b', 'b',
        'y', 'y', 'y', 'y',
    ])

    const [selectedDiv, setSelectedDiv] = useState(null);
    const [pIdx, setSelectedPIdx] = useState(null);

    const movePiece = (location) => {
        if (pIdx === null) {
            setSelectedDiv(location);
        } else {
            const newPieces = [...pieces];
            newPieces[pIdx] = location;
            setPieces(newPieces);
            setSelectedDiv(null);
            setSelectedPIdx(null);
        }
    }

    return (
        <section>

        <div className="board">
            <div className="homeSpace red" key='r' onClick={() => movePiece('r')}>
                { pieces.map((pos, index) => pos === 'r' && <Pawn index={index} />) }
            </div>
            <div className="homeSpace green" onClick={() => movePiece('g')}>
                { pieces.map((pos, index) => pos === 'g' && <Pawn index={index} />) }
            </div>
            <div className="homeSpace blue" onClick={() => movePiece('b')}>
                { pieces.map((pos, index) => pos === 'b' && <Pawn index={index} />) }
            </div>
            <div className="homeSpace yello" onClick={() => movePiece('y')}>
                { pieces.map((pos, index) => pos === 'y' && <Pawn index={index} />) }
            </div>

            <div className="winnerHome"></div>
            { // YELLOW
                new Array(18).fill(0).map((_, index) => {
                    if (index === 5) {
                        return <div className="cell yello" key={index+"y"} onClick={() => movePiece(index+'y')}>
                            { pieces.map((pos, i) => pos == (index+'y') && <Pawn index={i} />) }
                        </div>
                    }
                    if (index === 6) {
                        return <div className="savePt cell" key={index+"y"} onClick={() => movePiece(index+'y')}>
                            { pieces.map((pos, i) => pos == (index+'y') && <Pawn index={i} />) }
                        </div>
                    }
                    if (index > 2 && (index-1)%3 == 0) {
                        return <div className="cell yello" key={index+"y"} onClick={() => movePiece(index+'y')}>
                            { pieces.map((pos, i) => pos == (index+'y') && <Pawn index={i} />) }
                        </div>
                    }
                    return <div className="cell" key={index+"y"} onClick={() => movePiece(index+'y')}>
                        { pieces.map((pos, i) => pos == (index+'y') && <Pawn index={i} />) }
                    </div>
                })
            }

            { // WHITE ROW 1
                new Array(13).fill(0).map((_, index) => {
                    if (index === 1) {
                        return <div className="cell red" key={index+"h1"} onClick={() => movePiece(index+'h1')}>
                            { pieces.map((pos, i) => pos == (index+'h1') && <Pawn index={i} />) }
                        </div>
                    }
                    if (index === 9) {
                        return <div className="savePt cell" key={index+"h1"} onClick={() => movePiece(index+'h1')}>
                            { pieces.map((pos, i) => pos == (index+'h1') && <Pawn index={i} />) }
                        </div>
                    }
                    return <div className="cell" key={index+"h1"} onClick={() => movePiece(index+'h1')}>
                        { pieces.map((pos, i) => pos == (index+'h1') && <Pawn index={i} />) }
                    </div>
                })
            }
            { // RED
                new Array(5).fill(0).map((_, index) => {
                    return <div className="cell red" key={index+"r"} onClick={() => movePiece(index+'r')}>
                        { pieces.map((pos, i) => pos == (index+'r') && <Pawn index={i} />) }
                    </div>
                })
            }
            { // BLUE
                new Array(5).fill(0).map((_, index) => {
                    return <div className="cell blue" key={index+"b"} onClick={() => movePiece(index+'b')}>
                        { pieces.map((pos, i) => pos == (index+'b') && <Pawn index={i} />) }
                    </div>
                })
            }
            { // WHITE ROW 2
                new Array(13).fill(0).map((_, index) => {
                    if (index === 3) {
                        return <div className="savePt cell" key={index+"h2"} onClick={() => movePiece(index+'h2')}>
                            { pieces.map((pos, i) => pos == (index+'h2') && <Pawn index={i} />) }
                        </div>
                    }
                    if (index === 11) {
                        return <div className="cell blue" key={index+"h2"} onClick={() => movePiece(index+'h2')}>
                            { pieces.map((pos, i) => pos == (index+'h2') && <Pawn index={i} />) }
                        </div>
                    }
                    return <div className="cell" key={index+"h2"} onClick={() => movePiece(index+'h2')}>
                        { pieces.map((pos, i) => pos == (index+'h2') && <Pawn index={i} />) }
                    </div>
                })
            }
            { // GREEN
                new Array(18).fill(0).map((_, index) => {
                    if (index === 12) {
                        return <div className="cell green" key={index+"g"} onClick={() => movePiece(index+'g')}>
                            { pieces.map((pos, i) => pos == (index+'g') && <Pawn index={i} />) }
                        </div>
                    }
                    if (index === 11) {
                        return <div className="savePt cell" key={index+"g"} onClick={() => movePiece(index+'g')}>
                            { pieces.map((pos, i) => pos == (index+'g') && <Pawn index={i} />) }
                        </div>
                    }
                    if (index < 16 && (index-1)%3 == 0) {
                        return <div className="cell green" key={index+"g"} onClick={() => movePiece(index+'g')}>
                            { pieces.map((pos, i) => pos == (index+'g') && <Pawn index={i} />) }
                        </div>
                    }
                    return <div className="cell" key={index+"g"} onClick={() => movePiece(index+'g')}>
                        { pieces.map((pos, i) => pos == (index+'g') && <Pawn index={i} />) }
                    </div>
                })
            }
        </div>

        <div className="selection">
            {
                pieces.map((pos, i) => pos == selectedDiv && <li onClick={() => setSelectedPIdx(i)}>
                    <Pawn index={i} />
                </li>)
            }
        </div>

        </section>
    );
};

export default LudoBoard;
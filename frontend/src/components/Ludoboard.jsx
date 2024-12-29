import React, { useEffect } from "react";
import "./LudoBoard.css";
import { Pawn } from "./Pawn";
import { useState } from "react";
import axios from "axios";
import { boardArray } from "../util";
import { team1, team2, team3, team4, team5, team6 } from "../data.js";

const LudoBoard = () => {
    // useEffect(() => {
    //     axios.get('http://localhost:3200/')
    // })

    
    const [teams, setTeams] = useState([ team1, team2, team3, team4 ]);

    useEffect(() => {
        setTeams([ team1, team2, team3, team4 ]) // TODO: Get teams from server
    }, [])
    
    // const [pieces, setPieces] = useState([
    //     'r', 'r', 'r', 'r',
    //     'g', 'g', 'g', 'g',
    //     'b', 'b', 'b', 'b',
    //     'y', 'y', 'y', 'y',
    // ])

    // const [selectedDiv, setSelectedDiv] = useState(null);
    // const [pIdx, setSelectedPIdx] = useState(null);

    // const movePiece = (location) => {
        // if (pIdx === null) {
        //     setSelectedDiv(location);
        // } else {
        //     const newPieces = [...pieces];
        //     newPieces[pIdx] = location;
        //     setPieces(newPieces);
        //     setSelectedDiv(null);
        //     setSelectedPIdx(null);
        // }
    // }

    const boardMapper = (row) => {
        // HOMESPACE OPENINGS
        if (row === 0) {
            return <div className={`cell bg-${teams[0].id}`} key={row}> {row} </div>
        }
        if (row === 39) {
            return <div className={`cell bg-${teams[1].id}`} key={row}> {row} </div>
        }
        if (row === 26) {
            return <div className={`cell bg-${teams[2].id}`} key={row}> {row} </div>
        }
        if (row === 13) {
            return <div className={`cell bg-${teams[3].id}`} key={row}> {row} </div>
        }

        // WINNER HOMESPACE PATH
        if (row >= 67) {
            return <div className={`cell bg-${teams[2].id}`} key={row}> {row} </div>
        } 
        if (row >= 62) {
            return <div className={`cell bg-${teams[3].id}`} key={row}> {row} </div>
        } 
        if (row >= 57) {
            return <div className={`cell bg-${teams[1].id}`} key={row}> {row} </div>
        } 
        if (row >= 52) {
            return <div className={`cell bg-${teams[0].id}`} key={row}> {row} </div>
        } 

        // SAVE POINTS
        if (row === 47 || row === 34 || row === 8 || row === 21) {
            return <div className={`cell save-point`} key={row}> {row} </div>
        }
        return <div className="cell" key={row}> { row } </div>
    }

    return (
        <section id="page">

        <div className="board">
            <div className={`homeSpace bg-${teams[0].id}`} id="h-0" key="h-0"> h-0 </div>
            <div className={`homeSpace bg-${teams[1].id}`} id="h-1" key="h-1"> h-1 </div>
            <div className={`homeSpace bg-${teams[2].id}`} id="h-2" key="h-2"> h-2 </div>
            <div className={`homeSpace bg-${teams[3].id}`} id="h-3" key="h-3"> h-3 </div>

            <div className="winnerHome"></div>
            {
                boardArray.map(boardMapper)
            }
        {
            /* { // YELLOW
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
            } */
        }
        </div>

        <div className="selection">
            {/* {
                pieces.map((pos, i) => pos == selectedDiv && <li onClick={() => setSelectedPIdx(i)}>
                    <Pawn index={i} />
                </li>)
            } */}
        </div>

        </section>
    );
};

export default LudoBoard;
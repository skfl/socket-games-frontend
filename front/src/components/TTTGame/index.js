import React, { useState, useEffect } from 'react';
import styles from './TicTacToeGame.module.scss';
import {useUser} from "../../lib/customHooks";

const TicTacToeGame = () => {
    const [board, setBoard] = useState(Array(9).fill(''));
    const user = useUser()
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        checkWinner();
        if (player === 'O' && !winner) {
            makeBotMove();
        }
    }, [board, player, winner]);

    const makeMove = (index) => {
        if (board[index] === '' && !winner) {
            const newBoard = [...board];
            newBoard[index] = player;
            setBoard(newBoard);
            setPlayer(player === 'X' ? 'O' : 'X');
        }
    };

    const makeBotMove = () => {
        const availableMoves = board.reduce((acc, value, index) => {
            if (value === '') {
                acc.push(index);
            }
            return acc;
        }, []);

        if (availableMoves.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableMoves.length);
            const botMoveIndex = availableMoves[randomIndex];
            setTimeout(() => {
                makeMove(botMoveIndex);
            }, 500); // Introduce a delay to simulate the bot's "thinking" time
        }
    };

    const checkWinner = () => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                break;
            }
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(''));
        setPlayer('X');
        setWinner(null);
    };

    const renderCell = (index) => {
        return (
            <div
                key={index}
                className={styles.cell}
                onClick={() => makeMove(index)}
            >
                {board[index]}
            </div>
        );
    };

    return (
        <div className={styles['tic-tac-toe']}>
            <div className={styles.board}>
                {board.map((_, index) => renderCell(index))}
            </div>
            {winner && (
                <div className={styles.winner}>Winner: {winner === 'X' ? user.user.username : "BOT"}</div>
            )}
            {!winner && board.every(cell => cell !== '') && (
                <div className={styles.draw}>It's a draw!</div>
            )}
            <button className={styles['reset-button']} onClick={resetGame}>
                Reset Game
            </button>
        </div>
    );
};

export default TicTacToeGame;

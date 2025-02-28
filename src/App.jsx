
import { useState } from 'react'
import './App.css'

function App() {
  const [gameState, setGameState] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState('X')

  const checkWinner = (newGameState) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (newGameState[a] && newGameState[a] === newGameState[b] && newGameState[a] === newGameState[c]) {
        return newGameState[a]
      }
    }
    return null;
  }


  return (
    <>
      <div className='container'>
        <h1>Sea Chess (Tic-Tac-Toe)</h1>
        <div className='board'>

        </div>
        <h2>Next Player: </h2>
        <button className='reset'>Reset Game</button>
      </div>
    </>
  )
}

export default App

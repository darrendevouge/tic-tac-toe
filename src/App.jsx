import Player from './components/Player.jsx';

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li><Player name="Player 1" symbol="X"/></li>
          <li><Player name="Player 2" symbol="O"/></li>
        </ol>
        GAME BOARD
      </div>
    </main>
  )
}

export default App

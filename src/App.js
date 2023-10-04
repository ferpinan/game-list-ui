import './App.css';
import FetchGames from "./hooks/FetchGames";
import Game from "./Game/Game";

function App() {
  const games = FetchGames();
  console.log(games);

  return (
    <div className="App">
        {games.map((game, index) => (
          <Game data={game} key={"game"+index}/>
        ))}
    </div>
  );
}

export default App;

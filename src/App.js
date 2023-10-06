import './App.css';
import FetchGames from "./hooks/FetchGames";
import Game from "./Game/Game";
import CompleteInfo from "./CompleteInfo/CompleteInfo";
import { useState } from 'react';

function App() {
  const [selectedGames, setSelectedGames] = useState([]);


  let games = FetchGames();
  games = games.map(game => game.response.data.boxDetails[0])
  console.log(games);

  const onGameClick = (sku) => {
    const games = [...selectedGames];
    const index = games.indexOf(sku);

      if (index !== -1) {
        games.splice(index, 1);
      } else {
        games.push(sku);
      }
      setSelectedGames(games);
  }

  const isGameSelected = sku => {
    return selectedGames.indexOf(sku) >= 0
  };
  console.log(selectedGames);

  return (
    <div className="App">
        <CompleteInfo games={games.filter(game => selectedGames.indexOf(game.boxId)>=0)} />
        <div className="games">
        {games.map((game, index) => (
          <Game data={game} key={"game"+index} onClick={onGameClick} isSelected={isGameSelected(game.boxId)}/>
        ))}
        </div>
    </div>
  );
}

export default App;

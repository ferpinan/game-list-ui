import './Game.css';
import PropTypes from "prop-types";

function Game(props) {

  const game = props.data.response.data.boxDetails[0];

  return (
    <div className="game">
        <img src={game.imageUrls.small} alt={game.boxName} />
        <p>{game.boxName}</p>
        <p>{game.boxId}</p>
        <p>{game.categoryName}</p>
        <p>Compra: {game.cashPrice}</p>
        <p>Vale: {game.exchangePrice}</p>
        <p>Venta: {game.sellPrice}</p>
    </div>
  );
}

Game.propTypes = {
	data: PropTypes.object
};

export default Game;

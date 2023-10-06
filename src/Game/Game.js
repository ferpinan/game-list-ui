import './Game.css';
import PropTypes from "prop-types";

function Game(props) {

  const game = props.data;

  return (
    <div className={`game ${props.isSelected ? "selected" : ""}`} onClick={() => props.onClick(game.boxId)} >
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
	data: PropTypes.object,
	onClick: PropTypes.func,
	isSelected: PropTypes.bool
};

export default Game;

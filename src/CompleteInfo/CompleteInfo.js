import './CompleteInfo.css';
import PropTypes from "prop-types";

function CompleteInfo(props) {

  const games = props.games;

  const vales = games.reduce((accumulator, game) => accumulator + game.exchangePrice, 0);

  return (
    <div className={`complete-info `} >
        <p> Hello {vales}</p>
    </div>
  );
}

CompleteInfo.propTypes = {
	games: PropTypes.array
};

export default CompleteInfo;

import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {addFavorite, removeFavorite} from "../redux/actions/actions";
import {useState, useEffect} from "react";

// import style from "./card.module.css";

function Card(props) {
  const navigate = useNavigate();
  // const location = useLocation()
  const {character, onClose, favorites, addFavorite, removeFavorite} = props;
  const [isFav, setFav] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);

  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === character.id) {
        setFav(true);
      }
    });
  }, [favorites]);

  function handleFavorite(character) {
    if (!isFav) {
      addFavorite(character); //{}
      setFav(true);
    } else {
      removeFavorite(character); //id
      setFav(false);
    }
  }

  return (
    <div className={style.cardContainer}>
      <div className={style.main}>
        <img
          className={style.image} src={character.image} alt={name} onClick={navigateHandler}/>
          <button
          className={`${style.button} ${style.favorite} ${isFav ? style.favorited : ''}`}
          onClick={() => {
            handleFavorite(character.id);
          }}
        >
          {/* Mostrar el corazón solo cuando sea favorito */}
          {isFav ? '❤️' : '🤍'}
        </button>
        <div>
          {closeBtn && (
            <button
            className={`${style.button} ${style.close}`}
            onClick={() => {
              onClose(character.id);
            }}
          >
            X
          </button>
          )}
          <h2 className={style.character}>Name: {character.name}</h2>
        </div>

        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

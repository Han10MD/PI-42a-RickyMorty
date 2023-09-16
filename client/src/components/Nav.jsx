import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";

import style from "./nav.module.css";

function Nav({onSearch, randomize}) {
  return (
    <div className={style.navContainer}>
      <div>
            <Link to='/about'>
                <button className={style.buton}>
                    <span>About</span>
                </button>
            </Link>

            <Link to='/home'>
                <button className={style.buton}>
                <span>Home</span>
                </button>
            </Link>

            <Link to= '/favorites'>
                <button className={style.buton}>
                <span>Favorites</span>
                </button>
            </Link>
      </div>

      <SearchBar onSearch={onSearch} />
      <button onClick={randomize}>ADD RANDOM</button>
    </div>
  );
}

export default Nav;

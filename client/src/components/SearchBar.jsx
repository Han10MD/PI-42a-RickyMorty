import {useState} from "react";
import style from "../components/SearchBar.module.css"

export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  function changeHandler(event) {
    setId(event.target.value);
  }

  return (
    <div className={style.div}>
      <input className={style.input}
        type="search"
        onChange={changeHandler}
        value={id}
        placeholder="Search Character"
      />
      <button class={style.btn}
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}

import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";
import "./style.css";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonsThunk(input));
    setInput("");
  };

  return (
    <div className="searchDiv">
      <h2>Busque seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
          placeholder="ex.: Koromon"
        ></input>
        <button onClick={() => handleSearch()}>Pesquisar</button>
      </div>
    </div>
  );
};

export default Search;

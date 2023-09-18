import { useState } from "react";
import { ContainerSearch } from "./style";

function SearchBar({ getCity }) {
  const [searchValue, setSearchValue] = useState("");

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSerach(event) {
    event.preventDefault();
    getCity(searchValue);
  }

  return (
    <ContainerSearch>
      <form onSubmit={handleSerach}>
        <input
          type="text"
          placeholder="Quer saber o clima de qual cidade?"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button>Buscar</button>
      </form>
    </ContainerSearch>
  );
}

export default SearchBar;

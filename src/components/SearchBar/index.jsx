import { ContainerSearch } from "./style";

function SearchBar() {
  return (
    <ContainerSearch>
      <input type="text" placeholder="Quer saber o clima de qual cidade?" />
      <button>Buscar</button>
    </ContainerSearch>
  );
}

export default SearchBar;

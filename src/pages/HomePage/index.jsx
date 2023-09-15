import Header from "../../components/Header/index";
import SearchBar from "../../components/SearchBar/index";
import ChangeBar from "../../components/ChangeBar/index";
import { ContainerHome } from "./style";

function HomePage() {
  return (
    <ContainerHome>
      <Header />
      <SearchBar />
      <ChangeBar />
    </ContainerHome>
  );
}

export default HomePage;

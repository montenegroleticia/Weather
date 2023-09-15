import { ContainerHome } from "./style";
import Header from "../../components/Header/index";
import SearchBar from "../../components/SearchBar/index";
import ChangeBar from "../../components/ChangeBar/index";
import Graphic from "../../components/Graphic";

function HomePage() {
  return (
    <ContainerHome>
      <Header />
      <SearchBar />
      <ChangeBar />
      <Graphic />
    </ContainerHome>
  );
}

export default HomePage;

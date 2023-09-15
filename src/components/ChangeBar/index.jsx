import { ContainerChangeBar, ContainerLeft, ContainerRight } from "./style";

function ChangeBar() {
  return (
    <ContainerChangeBar>
      <ContainerLeft>
        <h3>Agora:</h3>
        <div>
          <p>Mínima: </p>
          <p>Máxima: </p>
        </div>
      </ContainerLeft>
      <ContainerRight>
        <p>Nublado</p>
        <h1>°C</h1>
      </ContainerRight>
    </ContainerChangeBar>
  );
}

export default ChangeBar;

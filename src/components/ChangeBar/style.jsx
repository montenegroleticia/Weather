import styled from "styled-components";

export const ContainerChangeBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 390px;
  height: 80px;
  border-radius: 16px;
  background-color: #fff;
  padding: 16px;
  margin: 40px;

  font-family: "Jua";
  color: darkcyan;
`;

export const ContainerLeft = styled.div`
  div {
    margin-top: 16px;
  }
  h3 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
`;

export const ContainerRight = styled.div`
  p {
    text-align: end;
    font-size: 16px;
  }
  h1 {
    font-size: 40px;
  }
`;

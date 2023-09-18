import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 250px;
    height: 24px;
    border-radius: 8px;
    border: transparent;
    padding: 8px;
    outline: none;
    font-family: "Jua";
    font-size: 16px;
    margin-right: 8px;
    &::placeholder {
      color: darkcyan;
    }
  }
  button {
    width: 80px;
    height: 40px;
    border-radius: 8px;
    border: transparent;
    font-family: "Jua";
    color: #fff;
    font-size: 16px;
    background-color: #64c3cc;
    &:hover {
      background-color: #63ced8;
    }
  }
`;

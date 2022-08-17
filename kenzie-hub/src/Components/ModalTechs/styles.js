import styled from "styled-components";

export const ContainerGeneral = styled.div`
  position: fixed;
  width: 100%;
  min-height: 74vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  margin-top: 100px;
`;

export const ContainerModal = styled.div`
  width: 369px;
  height: 342px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212529;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    gap: 18px;

    label {
      text-align: start;
      font-size: 13px;
      font-weight: 400;
      color: #f8f9fa;
      margin-left: 18px;
    }
    input {
      margin: 0 auto;
      width: 329px;
      height: 48px;
      background-color: #343b41;
      border: none;
      color: #f8f9fa;
    }
    select {
      margin: 0 auto;
      width: 329px;
      height: 48px;
      background-color: #343b41;
      border: none;
      color: #f8f9fa;
    }
    button {
      width: 329px;
      height: 48px;
      background-color: #ff577f;
      margin: 6px auto 0px auto;
      color: #f8f9fa;
      cursor: pointer;
    }
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #343b41;
  border-radius: 4px 4px 0px 0px;

  h4 {
    font-size: 15px;
    font-weight: 700;
    color: #f8f9fa;
    margin-left: 15px;
  }

  button {
    background-color: transparent;
    border: none;
    color: #868e96;
    margin-right: 6px;
    cursor: pointer;
  }
`;

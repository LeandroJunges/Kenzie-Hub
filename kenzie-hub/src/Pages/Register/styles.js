import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    text-align: start;
    margin-left: 10px;
    margin-bottom: 8px;
    margin-top: 0;
  }
  input {
    padding: 10px;
    width: 329.93px;
    margin: 0 auto;
    background-color: #343b41;
    border: none;
    color: #fff;
  }
  select {
    padding: 10px;
    width: 345px;
    margin: 0 auto;
    background-color: #343b41;
    border: none;
    color: #868e96;
  }
  option {
    color: #868e96;
  }
  button {
    width: 326px;
    height: 48px;
    border-radius: 4px;
    background-color: #59323f;
    margin: 0 auto 20px auto;
    color: #fff;
    border: none;
  }
`;

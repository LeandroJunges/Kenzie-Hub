import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 16px;
    text-align: start;
    margin-left: 20px;
    margin-bottom: 8px;
    margin-top: 0;
  }
  input {
    padding: 10px;
    width: 306px;
    margin: 0 auto;
    background-color: #343b41;
    color: #fff;
    border: none;
  }

  button {
    width: 324px;
    height: 48px;
    border-radius: 4px;
    background-color: #ff577f;
    margin: 10px auto 20px auto;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  p {
    font-size: 14px;
  }
  a {
    text-decoration: none;
    background-color: #868e96;
    padding: 10px;
    width: 306px;
    margin: 20px auto;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const Header = styled.div`
  width: 370px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #ff577f;
    font-size: 26px;
  }
  button {
    width: 68px;
    height: 40px;
    background-color: #212529;
    border-radius: 4px;
    color: #f8f9fa;
    border: none;
    cursor: pointer;
  }
`;

export const HeaderLogin = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    color: #ff577f;
    font-size: 26px;
  }
`;

export const HeaderDash = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 40px auto 20px auto;

  h1 {
    color: #ff577f;
    font-size: 26px;
  }
  button {
    width: 68px;
    height: 40px;
    background-color: #212529;
    border-radius: 4px;
    color: #f8f9fa;
    border: none;
    cursor: pointer;
  }
`;

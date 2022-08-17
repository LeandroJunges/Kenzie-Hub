import styled from "styled-components";

export const ContainerDashboard = styled.div`
  width: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 26px;
  }
  span {
    font-size: 20px;
  }
`;

export const ContainerContent = styled.div`
  width: 80%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  button {
    font-size: 20px;
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;
// const translateXAnimationFrom = keyframes`
//   0% {
//     background: transparent;
//     transform: translateX(120%);
//   }
//   95% {
//     transform: translateX(-20px);
//   }
//   100% {
//     transform: translateX(0);
//   }
// `;

export const ContainerList = styled.ul`
  min-width: 80%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;
  overflow: auto;

  li {
    display: flex;
    width: 95%;
    justify-content: space-between;
    box-shadow: 0px 6px 20px 0px #80808070;
    gap: 10px;

    /* margin-top: 20px; */
  }
  .containerTech {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
  }
  .btnTrash {
    background-color: transparent;
    border: none;
    color: #fff;
    margin-left: 25px;
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  margin: 15px;
  width: 79vw;
  background-color: #161a1d;
  button {
    width: 55px;
    height: 35px;
    background-color: transparent;
    color: #ff8c00;
    font-size: 30px;
  }
  h3{
    font-size:25px;
  }
  .wraper {
    margin: 10px auto;
    background-color: #161a1d;
    padding: 20px;
    display: flex;
    gap: 25px;
  }
  .dias-da-semana {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    background-color: #161a1d;
    color: white;
    text-align: center;
    padding: 5px;
  }

  .dias-da-semana > span {
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
  }

  .dias-da-semana > span:hover {
    border-color: #ff8c00;
  }

  #numbers-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    background-color: #161a1d;
    cursor: pointer;
  }

  #numbers-container span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    color: white;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: background-color 0.3s, border-color 0.3s;
  }

  #numbers-container span:hover {
    background-color: #242c32;
  }

  /* Estilizar os números para os fins de semana */
  #numbers-container span.fim-de-semana {
    color: #ff8c00;
  }

  /* Efeito de opacidade para os três primeiros e os três últimos dias do mês */
  #numbers-container span:nth-child(-n + 3),
  #numbers-container span:nth-last-child(-n + 3) {
    opacity: 0.2;
  }

  #contenedor-de-numeros span.dia-atual {
  background-color: #2e95d3;
}

`;

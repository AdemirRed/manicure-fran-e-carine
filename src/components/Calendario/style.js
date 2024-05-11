import styled from "styled-components";

export const Container = styled.div`
  /* Margem ao redor do calendário */
  margin: 15px;
  /* Cor de fundo do calendário */
  background-color: #161a1d;

  /* Estilos para os botões de navegação do calendário */
  button {
    width: 55px;
    height: 35px;
    background-color: transparent;
    color: #ff8c00;
    font-size: 30px;
  }

  /* Estilos para o título do calendário */
  h3 {
    font-size: 25px;
  }

  /* Estilos para o wrapper que contém os botões de navegação e o título */
  .wraper {
    display: flex;
    justify-content: center;
    background-color: #161a1d;
    padding: 20px;
    gap: 25px;
  }

  /* Estilos para os dias da semana (domingo a sábado) */
  .dias-da-semana {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    background-color: #161a1d;
    color: white;
    text-align: center;
    padding: 5px;
  }

  /* Estilos para os dias da semana ao passar o mouse */
  .dias-da-semana > span {
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
  }

  /* Estilos para destacar o dia da semana ao passar o mouse */
  .dias-da-semana > span:hover {
    border-color: #ff8c00;
  }

  /* Estilos para o container principal dos números (dias) do calendário */
  #numbers-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    background-color: #161a1d;
    cursor: pointer;
    width: 85.5vw;
    height: 85.5vh;
    border: 2px solid #ff8c00; /* Cor e espessura da borda */
}


  /* Estilos para os números (dias) do calendário */
  #numbers-container div {
    display: flex;
    justify-content: flex-start; /* Alinhamento do conteúdo à esquerda */
    align-items: flex-start; /* Alinhamento do conteúdo ao topo */
    color: white;
    transition: background-color 0.3s, border-color 0.3s;
    font-size: 16px; /* Ajuste o tamanho da fonte conforme necessário */
    background-color: #161a1d;
    border: 2px solid #ff8c00; /* Cor e espessura da borda */
    padding: 5px; /* Adiciona um espaço interno ao redor do número */
}


  /* Estilos para os números (dias) do calendário ao passar o mouse */
  #numbers-container div:hover {
    background-color: rgb(183, 71, 44); /* Cor de fundo ao passar o mouse */
  }

  /* Estilos para os números (dias) que representam o fim de semana */
  #numbers-container div.fim-de-semana {
    color: #ff8c00;
    background-color: #161a1d;
  }
  #numbers-container div.fim-de-semana:hover {
    background-color: rgb(183, 71, 44); /* Cor de fundo ao passar o mouse */
  }

  /* Opacidade para os números que não estão no mês atual */
  #numbers-container div.outro-mes {
    opacity: 0.5;
  }

  /* Estilos para destacar o dia atual */
  .dia-atual {
    background-color: #2e95d3;
    color: white;
  }
`;

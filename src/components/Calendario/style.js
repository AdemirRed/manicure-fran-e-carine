import styled from "styled-components";

export const Container = styled.div`
  
  
  /* Margem ao redor do calendário */
  margin-right:15px;
  margin-left :15px;
  /* Cor de fundo do calendário */
  background-color: #161a1d;

  /* Estilos para os botões de navegação do calendário */
  button {
    min-width: 30px;
    min-height: 25px;
    background-color: transparent;
    color: #ff8c00;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }

  /* Estilos para o título do calendário */
  h3 {
    font-size: 20px;
  }

  /* Estilos para o wrapper que contém os botões de navegação e o título */
  .wraper {
    display: flex;
    justify-content: center;
    background-color: #161a1d;
    padding: 20px 0px;
    gap: 0px 15px
  }

  /* Estilos para os dias da semana (domingo a sábado) */
  .dias-da-semana {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #161a1d;
    color: white;
    text-align: center;
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
    gap: 2px;
    background-color: #161a1d;
    cursor: pointer;
    max-width: 242;
    max-height: 180px;
}


  /* Estilos para os números (dias) do calendário */
  #numbers-container div {
    display: flex;
    justify-content: center; /* Alinhamento do conteúdo à esquerda */
    align-items: center; /* Alinhamento do conteúdo ao topo */
    color: white;
    transition: background-color 0.3s, border-color 0.3s;
    font-size: 16px; /* Ajuste o tamanho da fonte conforme necessário */
    background-color: #161a1d;
    border: 1px solid #ff8c00; /* Cor e espessura da borda */
    padding: 2px; /* Adiciona um espaço interno ao redor do número */
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
    opacity: 0.4;
  }

  /* Estilos para destacar o dia atual */
  .dia-atual {
    background-color: #2e95d3;
    color: white;
  }
  
`;

import styled from "styled-components";

// Seus estilos aqui

export const Container = styled.div`
  button {
    color: black;
   
  }
  display: flex;
  flex-direction: row;
 
`;

export const Header = styled.header`
  // Estilos do cabeçalho
`;

export const MENU_DIREITO = styled.div`
  // Estilos do menu
  font-size: 15px;
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  width: 232px;
  min-height: 100vh;
  gap: 15px;
  background-color: #161A1D;


  .br{
    margin-top: 100px;
  }
  .btn-Agendar{
    width: 200px;
    height: 40px;
    background-color: #0B090A;
    color: #ffffff;
    border-radius: 15px;
  }
  .btn-Compartilhar{
    width: 200px;
    height: 70px;
    background-color: transparent;
    color: #ffffff;
    border-radius: 15px;
  }
 
   .CalEspaço {
    background-color: #161a1d;
  } 
  .itn_Equipe{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    gap: 20px;
    font-size: 14px;
    background: #161A1D;
    }
    
    .itn_servicos{
      background: #161A1D;
    }
  
`

export const Cal = styled.div`
  // Estilos do calendário
`;

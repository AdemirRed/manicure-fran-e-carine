import styled from "styled-components";

// Seus estilos aqui

export const Container = styled.div`
    display: flex;
  flex-direction: row;
  
  .espaco{
    max-width: 320px;
    min-width: 320px;
  }
 
`;


export const MENU_DIREITO = styled.div`
  // Estilos do menu
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  font-size: 15px;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  min-width: 320px;
  gap: 15px;
  
  background-color: #161A1D;
  height: 100vh;
  


  .br{
    margin-top: 100px;
  }
  .btn-Agendar{
    width: 250px;
    height: 60px;
    background-color: #0B090A;
    color: #ffffff;
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
  }
  .btn-Compartilhar{
    width: 250px;
    height: 70px;
    background-color: transparent;
    color: #ffffff;
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
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
      display: flex;
     flex-direction: column;
      margin-left: 10px;
      gap: 20px;
      font-size: 14px;
      background: #161A1D;
    }
  
`

export const Cal = styled.div`
  // Estilos do calendário
`;

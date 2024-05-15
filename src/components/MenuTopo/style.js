import styled from "styled-components";

export const Container = styled.div`
 div{
  display: flex;
    flex-direction: row;
    gap: 8%;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
    font-size:25px;
    padding: 25px;
    background-color: #161a1d;
    width: 3000px;
    min-height: 91px;
    max-height: 91px;
  ;
 }
`;

export const LogoImg = styled.img`
  width: 350px;
  height: 90px;
  position: fixed;
  left: 0;
  top: 5px;
  background: transparent;
`;

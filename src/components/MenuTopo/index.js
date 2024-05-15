import React from "react";
import { Container,LogoImg } from "./style";

import logo from "../../assets/Logo.jpg"
import { Calendario } from "../Calendario";

export function MenuTopo() {
  React.useEffect(() => {}, []);

  return (
    <Container>
      <div>
      <LogoImg src={logo} alt="Logo"/>
     <a href="">🗓️ Calendario</a>
     <a href="">📒 Clientes</a>
     <a href="">⚙️ Empresa</a>
     <a href="">📢 Marketing</a>
      </div>
    </Container>
  );
}


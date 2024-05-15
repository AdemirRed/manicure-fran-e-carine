// eslint-disable-next-line
import React from "react";
import { Container,  MENU_DIREITO, Artigo } from "./style";
import { Button } from "../button";
import { Calendario } from "../Calendario";
import {HorarioAgendamento} from "../HorarioAgendamento";
import {MenuTopo} from "../MenuTopo";

export function ViewCal() {
  React.useEffect(() => {}, []);

  return (
    <Container>
     

      <MENU_DIREITO>
        <i className="br"></i>
        <Button
          className="btn-Agendar"
          style={{ marginTop: 5, marginBottom: -2 }}
        >
          CRIAR AGENDAMENTO
        </Button>
        <Button
          className="btn-Compartilhar"
          style={{ marginTop: 5, marginBottom: -2 }}
        >
          COMPARTILHAR LINK
        </Button>
      <div className="CalEspaço">
        <Calendario></Calendario>
      </div>

        <p>EQUIPE:</p>
        <div className="itn_Equipe">
          <a href="">🫱🏼‍🫲🏻 Todos os membros da equipe</a>

          <a href="">🫱🏼‍🫲🏻 Nome da Empresa Aqui</a>

          <a href="">🫱🏼‍🫲🏻 Não Atribuido</a>
        </div>

        <p>Serviços:</p>
        <div className="itn_servicos">
          <a href="">📒 Todos os Serviços</a>
          
          <a href="">📒 Exemplos de serviços</a>
        </div>
      </MENU_DIREITO>
     <div className="espaco"></div>
    <Artigo>
     <MenuTopo/>
     <HorarioAgendamento/>
      </Artigo>
    </Container>
  );
}

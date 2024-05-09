// eslint-disable-next-line
import React from "react";
import { Container, Header, MENU_DIREITO, Cal } from "./style";
import LogoPerson from "../.././assets/Boneco.svg";
import { Button } from '../button';

function criarMiniCalendario(containerId) {
  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const container = document.getElementById(containerId);
  if (!container) return;

  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth();

  const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
  const primeiroDiaDaSemana = new Date(anoAtual, mesAtual, 1).getDay();

  const header = document.createElement("div");
  header.classList.add("calendario-header");
  header.textContent = `${meses[mesAtual]} ${anoAtual}`;
  container.appendChild(header);

  const diasContainer = document.createElement("div");
  diasContainer.classList.add("calendario-dias");
  container.appendChild(diasContainer);

  for (let diaSemana = 0; diaSemana < 7; diaSemana++) {
    const diaElemento = document.createElement("div");
    diaElemento.classList.add("calendario-dia");
    diaElemento.textContent = diasSemana[diaSemana];
    diasContainer.appendChild(diaElemento);
  }

  for (let i = 0; i < primeiroDiaDaSemana; i++) {
    const diaVazio = document.createElement("div");
    diaVazio.classList.add("calendario-dia");
    diasContainer.appendChild(diaVazio);
  }

  for (let dia = 1; dia <= diasNoMes; dia++) {
    const diaElemento = document.createElement("div");
    diaElemento.classList.add("calendario-dia");
    diaElemento.textContent = dia;
    diasContainer.appendChild(diaElemento);
  }
}

export function ViewCal() {
  React.useEffect(() => {
    // criarMiniCalendario("mini-calendario");
  }, []);

  return (
    <Container>
      <Header></Header>

      <MENU_DIREITO>
        <i className="br"></i>
      <Button className='btn-Agendar' style={{ marginTop: 5, marginBottom: -2 }} >CRIAR AGENDAMENTO</Button>
      <Button className='btn-Compartilhar' style={{ marginTop: 5, marginBottom: -2 }} >COMPARTILHAR LINK</Button>

        
        <div className="CalEspaço"></div>
        <Cal id="mini-calendario"></Cal>

        <p>EQUIPE:</p>
        <div className="itn_Equipe">
          <a href="www.google.com">🫱🏼‍🫲🏻 Todos os membros da equipe</a>

          <a href="www.google.com">🫱🏼‍🫲🏻 Nome da Empresa Aqui</a>

          <a href="www.google.com">🫱🏼‍🫲🏻 Não Atribuido</a>
        </div>

        <p>Serviços:</p>
        <div className="itn_servicos">
          <a href="www.google.com">📒 Todos os Serviços</a>
          <a href="www.google.com">📒 Exemplos de serviços</a>
        </div>
      </MENU_DIREITO>
    </Container>
  );
}

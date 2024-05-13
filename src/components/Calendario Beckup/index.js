import React, { useState, useEffect } from "react";
import { Container } from "./style";

export function Calendario() {
  // Estado para armazenar o dia selecionado
  const [diaSelecionado, setDiaSelecionado] = useState(null);
  // Estados para armazenar o mês e o ano atual
  const [mesAtual, setMesAtual] = useState(new Date().getMonth());
  const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());

  // Efeito para renderizar o calendário sempre que houver mudança no mês ou no ano
  useEffect(() => {
    renderizarCalendario();
  }, [mesAtual, anoAtual]);

  // Função para renderizar o calendário
  const renderizarCalendario = () => {
    // Funções auxiliares para obter informações sobre o mês
    const obterDiasNoMes = (ano, mes) => {
      return new Date(ano, mes + 1, 0).getDate();
    };

    const obterPrimeiroDiaDoMes = (ano, mes) => {
      return new Date(ano, mes, 1).getDay(); // 0 (Domingo) a 6 (Sábado)
    };

    const obterTotalDiasDoMes = (ano, mes) => {
      return obterDiasNoMes(ano, mes);
    };

    const obterDiasAntes = (ano, mes) => {
      const primeiroDiaDoMes = obterPrimeiroDiaDoMes(ano, mes);
      return primeiroDiaDoMes === 0 ? 6 : primeiroDiaDoMes - 1;
    };

    const obterDiasDepois = (ano, mes) => {
      const ultimoDiaDoMes = obterTotalDiasDoMes(ano, mes);
      const ultimoDiaSemana = new Date(ano, mes, ultimoDiaDoMes).getDay(); // 0 (Domingo) a 6 (Sábado)
      return 7 - (ultimoDiaSemana === 6 ? 7 : ultimoDiaSemana + 1);
    };

    // Elemento onde os números dos dias serão renderizados
    const numbersContainer = document.getElementById("numbers-container");
    if (numbersContainer) {
      numbersContainer.innerHTML = "";

      // Obtém informações sobre o mês atual
      const primeiroDiaSemana = obterPrimeiroDiaDoMes(anoAtual, mesAtual);
      const diasAntes = obterDiasAntes(anoAtual, mesAtual);
      const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual, 0).getDate();

      // Adiciona os dias do mês anterior
      for (let i = 0; i < primeiroDiaSemana; i++) {
        const dia = ultimoDiaMesAnterior - (primeiroDiaSemana - i) + 1;
        adicionarDiaMesAnterior(numbersContainer, dia);
      }

      // Adiciona os dias do mês atual
      const totalDiasDoMes = obterTotalDiasDoMes(anoAtual, mesAtual);
      for (let i = 1; i <= totalDiasDoMes; i++) {
        adicionarDiaMesAtual(numbersContainer, i);
      }

      // Adiciona os dias do próximo mês
      const diasDepois = obterDiasDepois(anoAtual, mesAtual);
      for (let i = 1; i <= diasDepois; i++) {
        const dia = i;
        adicionarDiaMesSeguinte(numbersContainer, dia);
      }
    }
  };

  // Função para adicionar o dia do mês anterior
  const adicionarDiaMesAnterior = (container, dia) => {
    const div = document.createElement("div");
    div.textContent = dia;
    div.classList.add("outro-mes");
    container.appendChild(div);
  };

  // Função para adicionar o dia do mês atual
  const adicionarDiaMesAtual = (container, dia) => {
    const div = document.createElement("div");
    div.textContent = dia;
    div.addEventListener("click", () => handleCliqueDia(dia));
    if (eFimDeSemana(new Date(anoAtual, mesAtual, dia).getDay())) {
      div.classList.add("fim-de-semana");
    }
    if (isDiaAtual(anoAtual, mesAtual, dia)) {
      div.classList.add("dia-atual");
    }
    container.appendChild(div);
  };

  // Função para adicionar o dia do próximo mês
  const adicionarDiaMesSeguinte = (container, dia) => {
    const div = document.createElement("div");
    div.textContent = dia;
    div.classList.add("outro-mes");
    container.appendChild(div);
  };

  // Função chamada quando um dia é clicado
  const handleCliqueDia = (dia) => {
    setDiaSelecionado(dia);
    // Lógica para exibir informações do cliente, hora e serviço para o dia selecionado
  };

  // Função para mudar para o mês anterior ou próximo
  const mudarMes = (quantidade) => {
    setMesAtual((mesAnterior) => {
      const novoMes = mesAnterior + quantidade;
      if (novoMes < 0) {
        setAnoAtual((anoAnterior) => anoAnterior - 1);
        return 11;
      } else if (novoMes > 11) {
        setAnoAtual((anoAnterior) => anoAnterior + 1);
        return 0;
      }
      return novoMes;
    });
  };

  // Função para verificar se o dia é um fim de semana (Domingo ou Sábado)
  const eFimDeSemana = (dia) => {
    return dia === 0 || dia === 6; // Domingo (0) e Sábado (6)
  };

  // Função para verificar se o dia é o dia atual
  const isDiaAtual = (ano, mes, dia) => {
    const dataAtual = new Date();
    return ano === dataAtual.getFullYear() && mes === dataAtual.getMonth() && dia === dataAtual.getDate();
  };

  // Renderização do componente
  return (
    <Container>
      {/* Botões para mudar de mês */}
      <div className="wraper">
        <button onClick={() => mudarMes(-1)}>{'<'}</button>
        <h3>{new Date(anoAtual, mesAtual).toLocaleString("default", { month: "long", year: "numeric" })}</h3>
        <button onClick={() => mudarMes(1)}>{'>'}</button>
      </div>
      {/* Dias da semana */}
      <div className="dias-da-semana">
        <span>Domingo</span>
        <span>Segunda</span>
        <span>Terça</span>
        <span>Quarta</span>
        <span>Quinta</span>
        <span>Sexta</span>
        <span>Sábado</span>
      </div>
      {/* Container para os números dos dias */}
      <div id="numbers-container"></div>
      {/* Exibir o dia selecionado, se houver */}
      {diaSelecionado && <p>Dia selecionado: {diaSelecionado}</p>}
    </Container>
  );
}

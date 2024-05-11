import React, { useState, useEffect } from "react";
import { Container } from "./style";

export function Calendario() {
  const [diaSelecionado, setDiaSelecionado] = useState(null);
  const [mesAtual, setMesAtual] = useState(new Date().getMonth());
  const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());

  useEffect(() => {
    renderizarCalendario();
  }, [mesAtual, anoAtual]);

  const renderizarCalendario = () => {
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
      return 7 - (new Date(ano, mes, ultimoDiaDoMes).getDay() === 0 ? 7 : new Date(ano, mes, ultimoDiaDoMes).getDay());
    };

    const numbersContainer = document.getElementById("numbers-container");
    if (numbersContainer) {
      numbersContainer.innerHTML = "";

      // Adicionar dias do mês anterior
      const diasAntes = obterDiasAntes(anoAtual, mesAtual);
      for (let i = 1; i <= diasAntes; i++) {
        const span = document.createElement("span");
        span.textContent = new Date(anoAtual, mesAtual, -i + 1).getDate();
        span.classList.add("outro-mes");
        numbersContainer.appendChild(span);
      }

      // Adicionar dias do mês atual
      const totalDiasDoMes = obterTotalDiasDoMes(anoAtual, mesAtual);
      for (let i = 1; i <= totalDiasDoMes; i++) {
        const span = document.createElement("span");
        span.textContent = i;
        span.addEventListener("click", () => handleCliqueDia(i));
        if (eFimDeSemana(new Date(anoAtual, mesAtual, i).getDay())) {
          span.classList.add("fim-de-semana");
        }
        numbersContainer.appendChild(span);
      }

      // Adicionar dias do próximo mês
      const diasDepois = obterDiasDepois(anoAtual, mesAtual);
      for (let i = 1; i <= diasDepois; i++) {
        const span = document.createElement("span");
        span.textContent = i;
        span.classList.add("outro-mes");
        numbersContainer.appendChild(span);
      }
    }
  };

  const handleCliqueDia = (dia) => {
    setDiaSelecionado(dia);
    // Aqui você pode adicionar lógica para agendar horários para o dia selecionado
  };

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

  const eFimDeSemana = (dia) => {
    return dia === 0 || dia === 6; // Domingo (0) e Sábado (6)
  };

  return (
    <Container>
      <div className="wraper">
        <button onClick={() => mudarMes(-1)}>{'<'}</button>
        <h3>{new Date(anoAtual, mesAtual).toLocaleString("default", { month: "long", year: "numeric" })}</h3>
        <button onClick={() => mudarMes(1)}>{'>'}</button>
      </div>
      <div className="dias-da-semana">
        <span>Segunda</span>
        <span>Terça</span>
        <span>Quarta</span>
        <span>Quinta</span>
        <span>Sexta</span>
        <span>Sábado</span>
        <span>Domingo</span>
      </div>
      <div id="numbers-container"></div>
      {diaSelecionado && <p>Dia selecionado: {diaSelecionado}</p>}
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import { Container } from "./style";

// Array para armazenar os dias selecionados
let selectedRowDays = [];

// Função chamada quando um dia é clicado
export const handleCliqueDia = (dia) => {
  // Lógica para exibir informações do cliente, hora e serviço para o dia selecionado

  // Adicionando a classe 'selecionado' para simular que o dia está selecionado
  const numbersContainer = document.getElementById("numbers-container");
  if (numbersContainer) {
    const days = numbersContainer.children;
    const index = [...days].findIndex((element) => element.textContent === dia.toString());

    if (index !== -1) {
      const rowIndex = Math.floor(index / 7);
      const rowStartIndex = rowIndex * 7;
      const rowEndIndex = rowStartIndex + 7;
      selectedRowDays = [];
      for (let i = rowStartIndex; i < rowEndIndex; i++) {
        days[i].classList.add("selecionado");
        selectedRowDays.push(days[i].textContent);
      }
      // Faça algo com os dias selecionados, como armazená-los em uma variável
      console.log("Dias da linha selecionados:", selectedRowDays);
    }
  }
};

// Exportar a array selectedRowDays
export { selectedRowDays };

export function Calendario() {
  // Estado para armazenar o dia selecionado
  const [diaSelecionado, setDiaSelecionado] = useState(null);
  // Estados para armazenar o mês e o ano atual
  const [mesAtual, setMesAtual] = useState(new Date().getMonth());
  const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());
  // Estado para armazenar os dias da linha selecionada
  const [diasLinhaSelecionada, setDiasLinhaSelecionada] = useState([]);

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

  
  // Função para adicionar o dia do próximo mês
  const adicionarDiaMesSeguinte = (container, dia) => {
    const div = document.createElement("div");
    div.textContent = dia;
    div.classList.add("outro-mes");
    container.appendChild(div);
  };
  
  







// Função para verificar se o dia é o dia atual
const isDiaAtual = (ano, mes, dia) => {
  const dataAtual = new Date();
  return ano === dataAtual.getFullYear() && mes === dataAtual.getMonth() && dia === dataAtual.getDate();
};

// Verifica se o dia atual é o dia atual e chama handleCliqueDia se for
if (isDiaAtual(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
  handleCliqueDia(new Date().getDate());
}

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
  

  // Função para adicionar o dia do mês atual
  const adicionarDiaMesAtual = (container, dia) => {
    const div = document.createElement("div");
    div.textContent = dia;
    div.addEventListener("click", () => handleCliqueDia(dia));
    if (eFimDeSemana(new Date(anoAtual, mesAtual, dia).getDay())) {
      div.classList.add("fim-de-semana");
    }
    if (isDiaAtual(anoAtual, mesAtual, dia)) {
      div.style.backgroundColor = '#b6a484'; // Laranja claro para o dia atual
    }
    // Adicionando a classe 'selecionado' para simular que o dia está selecionado
    if (dia === diaSelecionado) {
      div.classList.add("selecionado");
    }
    container.appendChild(div);
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
        <span>Dom</span>
        <span>Seg</span>
        <span>Ter</span>
        <span>Qua</span>
        <span>Qui</span>
        <span>Sex</span>
        <span>Sáb</span>
      </div>
      {/* Container para os números dos dias */}
      <div id="numbers-container"></div>
      {/* Exibir o dia selecionado, se houver */}
      {diaSelecionado && <p>Dia selecionado: {diaSelecionado}</p>}
      {/* Exibir os dias da linha selecionada, se houver */}
      {diasLinhaSelecionada.length > 0 && (
        <p>
          Dias da linha selecionada: {diasLinhaSelecionada.join(", ")}
        </p>
      )}
    </Container>
  );
}

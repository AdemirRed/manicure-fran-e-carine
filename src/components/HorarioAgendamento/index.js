import React from "react";
import { Container, Table, TableHead, TableBody, Th, Tr, Td } from "./style";
import { handleCliqueDia } from "../Calendario";

// Função para criar as células com os horários
const criarCelulasHorarios = () => {
  const horarios = [];
  // Loop para criar as células com os horários de 0:00 a 23:00
  for (let i = 0; i < 24; i++) {
    horarios.push(
      <Tr key={i}>
        <Td>{`${i}:00`}</Td>
      </Tr>
    );
  }
  return horarios;
};

// Componente HorarioAgendamento
export function HorarioAgendamento({ diasSelecionados }) {
  // Array com os dias da semana
  const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  // const selectedRowDays = ["12", "13", "14", "15", "16", "17", "18"]; // Substitua pelos dias selecionados corretamente
  diasSelecionados = handleCliqueDia.dia;
  return (
    <Container>
      {/* Tabela com os dias da semana e horários */}
      <Table>
        <TableHead>
          <Tr>
            {/* Cabeçalho com os dias da semana */}
            {diasSemana.map((dia, index) => (
              <Th key={index}>
                {/* Exibe o nome do dia da semana */}
                {dia}
                {/* Se houver um dia selecionado para este dia da semana, exibe-o */}
                {diasSelecionados && diasSelecionados[index] && ` ${diasSelecionados[index]}`}
              </Th>
            ))}
          </Tr>
        </TableHead>
        <TableBody>
          {/* Células com os horários */}
          {criarCelulasHorarios()}
        </TableBody>
      </Table>
    </Container>
  );
}

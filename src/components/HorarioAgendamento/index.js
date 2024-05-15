import React from "react";
import { Container, Table, TableHead, TableBody, Th, Tr, Td } from "./style";
import { handleCliqueDia, selectedRowDays } from "../Calendario";

// Função para criar as células com os horários
const criarCelulasHorarios = () => {
  const horarios = [];
  // Loop para criar as células com os horários de 0:00 a 23:00
  for (let i = 0; i < 24; i++) {
    horarios.push(
      <Tr key={i}>
        {/* Célula vazia na primeira coluna */}
        <Td onClick={() => handleCliqueHora(i)}>
          {`${i}:00`}
        </Td>
        {/* Células dos dias da semana */}
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
    );
  }
  return horarios;
};

// Função para manipular o clique na célula de hora
const handleCliqueHora = (hora) => {
  // Implemente a lógica para abrir a janela flutuante e adicionar dados
  console.log(`Clicou na hora ${hora}:00`);
};

// Componente HorarioAgendamento
export function HorarioAgendamento({ diasSelecionados }) {
  // Array com os dias da semana
  const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  return (
    <Container>
      {/* Tabela com os dias da semana e horários */}
      <Table>
        <TableHead>
          <Tr>
            {/* Célula vazia na primeira linha */}
            <Th></Th>
            {/* Cabeçalho com os dias da semana */}
            {diasSemana.map((dia, index) => (
              <Th key={index}>{dia}</Th>
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

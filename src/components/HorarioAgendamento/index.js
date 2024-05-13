import React from "react";
import { Container, Table, TableHead, TableBody, Th, Tr, Td } from "./style";
import { Button } from ".././button";

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

export function HorarioAgendamento() {
  React.useEffect(() => {}, []);

  // Array com os dias da semana
  const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  return (
    <Container>
      {/* Tabela com os dias da semana e horários */}
      <Table>
        <TableHead>
          <Tr>
            {/* Cabeçalho com os dias da semana */}
            {diasSemana.map((dia) => (
              <Th key={dia}>{dia}</Th>
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

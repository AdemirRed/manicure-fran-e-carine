import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  left: 300px;
  overflow-x: auto; /* Adicionando overflow-x para permitir scroll horizontal */
  margin-top: 90.5px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  max-width: 800px;
  margin: 0 auto;
`;

export const TableHead = styled.thead`
  background-color: #333;
  color: #fff;
`;

export const TableBody = styled.tbody`
  background-color: #444;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #666;
  font-size: 20px;
`;

export const Td = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #666;
  font-size: 20px;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #555;
  }
`;

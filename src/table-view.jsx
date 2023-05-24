import { Table, TableContainer, Tbody, Th, Thead } from '@chakra-ui/react';
import { block, For } from 'million/react';

function Row({ product, count, random }) {
  return (
    <tr>
      <td className="text-center">{random}</td>
      <td className="text-center">{count}</td>
      <td className="text-center">{product}</td>
      {Array(100)
        .fill(0)
        .map((_, i) => (
          <td className="hidden">{i}</td>
        ))}
    </tr>
  );
}

const RowBlock = block(Row);

function TableView({ array, count, mode }) {
  return (
    <TableContainer>
      <Table size="md">
        <Thead>
          <Th className="text-center">Random</Th>
          <Th className="text-center">Count</Th>
          <Th className="text-center">Product</Th>
        </Thead>
        <Tbody>
          {mode === 'million' ? (
            <For each={array}>
              {(random) => {
                return (
                  <RowBlock
                    product={count * random}
                    random={random}
                    count={count}
                  />
                );
              }}
            </For>
          ) : (
            array.map((random) => (
              <Row product={count * random} random={random} count={count} />
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableView;

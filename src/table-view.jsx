import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { block, For } from 'million/react';

function Row({ product, count, random }) {
  return (
    <tr>
      <td className="w-full text-center">
        <code>
          {random} * {count} = {product}
        </code>
        {Array(50)
          .fill(0)
          .map((_, i) => (
            <div className="hidden">{i}</div>
          ))}
      </td>
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
          <Tr className="flex justify-center">
            <Th>Math Test</Th>
          </Tr>
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

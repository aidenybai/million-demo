import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { block, For } from 'million/react';

function Row({ product, count, random }) {
  return (
    <tr>
      <td>
        <code>{random}</code>
      </td>
      <td>
        <code>{count}</code>
      </td>
      <td>
        <code>{product}</code>
      </td>
      <td>
        <code>
          {random} * {count} = {product}
        </code>
      </td>
      <div>
        {Array(50)
          .fill(0)
          .map(() => (
            <td></td>
          ))}
      </div>
    </tr>
  );
}

const RowBlock = block(Row, { mode: 'island ' });

function TableView({ array, count, mode }) {
  return (
    <TableContainer>
      <Table size="md">
        <Thead>
          <Tr>
            <Th>Random</Th>
            <Th>Count</Th>
            <Th>Product</Th>
            <Th>Equation</Th>
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

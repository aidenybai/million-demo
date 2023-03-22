import {
  Button,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Flex,
} from '@chakra-ui/react';
import { block, For } from 'million/react';
import { startTransition, useState } from 'react';
import LagRadar from 'react-lag-radar';

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
        {Array(100)
          .fill(0)
          .map(() => (
            <div>
              <div>
                <div></div>
              </div>
            </div>
          ))}
      </div>
    </tr>
  );
}

const RowBlock = block(Row);

const descriptions = {
  react: 'High blocking time, but low delay in updating UI',
  'react-fiber': 'Low blocking time, but high delay in updating UI',
  million: 'Low blocking time, and low delay in updating UI',
  'million-fiber': 'Low blocking time, and high delay in updating UI',
};

const TimesTable = ({ nodes, mode }) => {
  const [count, setCount] = useState(0);

  const array = [];

  for (let i = 0; i < nodes; i++) {
    array.push(Math.floor(Math.random() * 10));
  }

  return (
    <Stack direction="column" spacing={5}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text size="xs" mb={3}>
          {descriptions[mode]}
        </Text>
        <LagRadar size={200} />
      </Flex>

      <Button
        colorScheme="purple"
        variant="outline"
        onClick={() => {
          if (mode === 'react-fiber' || mode === 'million-fiber') {
            startTransition(() => {
              setCount(count + 1);
            });
          } else {
            setCount(count + 1);
          }
        }}
      >
        <Text fontSize="md">Increment ({count})</Text>
      </Button>

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
                {(random) => (
                  <RowBlock
                    product={count * random}
                    random={random}
                    count={count}
                  />
                )}
              </For>
            ) : (
              array.map((random) => (
                <Row product={count * random} random={random} count={count} />
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default TimesTable;

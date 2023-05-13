import {
  Button,
  Flex,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from '@chakra-ui/react';
import { startTransition, Suspense, useState, lazy } from 'react';
const LagRadar = lazy(() => import('react-lag-radar'));
const TableView = lazy(() => import('./table-view'));

const descriptions = {
  react: 'High blocking time, but low delay in updating UI',
  'react-fiber': 'Low blocking time, but high delay in updating UI',
  million: 'Low blocking time, and low delay in updating UI',
};

const TimesTable = ({ nodes, mode }) => {
  const [count, setCount] = useState(0);

  const array = Array(nodes);
  for (let i = 0; i < nodes; i++) {
    array[i] = Math.floor(Math.random() * 100);
  }

  return (
    <Stack direction="column" spacing={5}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Suspense fallback={<SkeletonCircle size="200" />}>
          <LagRadar size={200} />
        </Suspense>
        <Text fontSize="xs" mb={3}>
          {descriptions[mode]}
        </Text>
      </Flex>

      <Button
        colorScheme="purple"
        variant="solid"
        onClick={() => {
          if (mode.includes('fiber')) {
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

      <Suspense
        fallback={<SkeletonText noOfLines={9} spacing="3" skeletonHeight="4" />}
      >
        <TableView array={array} count={count} mode={mode} />
      </Suspense>
    </Stack>
  );
};

export default TimesTable;

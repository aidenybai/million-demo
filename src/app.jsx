import {
  Code,
  Container,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { startTransition, useState } from 'react';
import TimesTable from './times-table';

function App() {
  const [nodes, setNodes] = useState(1000);
  const handleChange = (nodes) => {
    startTransition(() => {
      setNodes(nodes);
    });
  };
  return (
    <Container p={8}>
      <Heading mb={4}>Million Demo</Heading>
      <Text>
        The following is a random times table generator benchmark. It follows a
        comparison between React and Million, along with its fiber equivalents.
      </Text>
      <Text fontStyle="italic" size="sm" my={3}>
        Caveat to note: Every row contains 100 empty <Code>{'<div />'}</Code>{' '}
        nodes to stimulate diffing in order to measure performance.
      </Text>
      <Text>
        You can adjust the number of rows by using the slider or the number
        input.
      </Text>

      <NumberInput
        mt={3}
        maxW={1000}
        min={0}
        mr="2rem"
        value={nodes}
        onChange={handleChange}
      >
        <NumberInputField placeholder="Enter number of rows" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Tabs isLazy={true} variant="soft-rounded" colorScheme="purple" mt={3}>
        <TabList>
          <Tab>React</Tab>
          <Tab>React Fiber</Tab>
          <Tab>⚡ Million</Tab>
          <Tab>Million Fiber</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TimesTable nodes={nodes} mode="react" />
          </TabPanel>
          <TabPanel>
            <TimesTable nodes={nodes} mode="react-fiber" />
          </TabPanel>
          <TabPanel>
            <TimesTable nodes={nodes} mode="million" />
          </TabPanel>
          <TabPanel>
            <TimesTable nodes={nodes} mode="million-fiber" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default App;

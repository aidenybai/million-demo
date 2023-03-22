import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Code,
  Container,
  Heading,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  ListItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { startTransition, useEffect, useState } from 'react';
import GithubCorner from 'react-github-corner';
import TimesTable from './times-table';

function App() {
  const [nodes, setNodes] = useState(1000);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (nodes) => {
    startTransition(() => {
      setNodes(nodes);
    });
  };
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Million vs. React Demo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction="column" spacing={3}>
              <Text>
                The following is a random times table generator benchmark (
                <Link
                  href="https://github.com/aidenybai/million-demo"
                  isExternal
                  color="purple"
                >
                  source <ExternalLinkIcon mx="2px" />
                </Link>
                ). It follows a comparison between React and Million, along with
                its fiber equivalents.
              </Text>
              <Heading as="h4" size="md">
                Instructions
              </Heading>
              <Text>
                In order to invoke a re-render, click the "Increment "button
                below. The "Lag" radar indicates blocking time, but does not
                account for the time it takes to update the UI. Notice the time
                it takes to update the UI after you click to get an idea for
                update time.
              </Text>
              <Heading as="h4" size="md">
                Notes
              </Heading>
              <Text>
                <UnorderedList>
                  <ListItem>
                    All implementations are within React. The only difference
                    with Million implementation is a{' '}
                    <Link
                      href="https://github.com/aidenybai/million-demo/blob/53ee4f6c7d86e3f240a637dcf107782045c0c19d/src/times-table.jsx#L49"
                      isExternal
                      color="purple"
                    >
                      <Code>{'block()'}</Code> wrapper
                    </Link>{' '}
                    and the{' '}
                    <Link
                      href="https://github.com/aidenybai/million-demo/blob/53ee4f6c7d86e3f240a637dcf107782045c0c19d/src/times-table.jsx#L104"
                      isExternal
                      color="purple"
                    >
                      <Code>{'<For />'}</Code> component
                    </Link>
                    .
                  </ListItem>
                  <ListItem>
                    Every row contains 100 empty <Code>{'<div />'}</Code> nodes
                    to stimulate diffing in order to measure performance.
                  </ListItem>
                  <ListItem>
                    Should not be used as a benchmark for real-world
                    applications (this is a very intensive case that isn't
                    necessarily representative)
                  </ListItem>
                </UnorderedList>
              </Text>
              <Text>
                You can adjust the number of rows by using the the number input.
                Make sure to adjust if you can't see any performance difference
                or your screen freezes.
              </Text>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={onClose}>
              Okay!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Container p={8}>
        <Stack direction="column" spacing={3}>
          <Heading>Million vs. React Demo</Heading>
          <Text>
            The following is a random times table generator benchmark (
            <Link
              href="https://github.com/aidenybai/million-demo"
              isExternal
              color="purple"
            >
              source <ExternalLinkIcon mx="2px" />
            </Link>
            ). It follows a comparison between React and Million, along with its
            fiber equivalents.
          </Text>
        </Stack>

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
      <GithubCorner href="https://github.com/aidenybai/million" />
    </>
  );
}

export default App;

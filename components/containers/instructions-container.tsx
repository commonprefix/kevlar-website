import React from 'react'
import {
  Container,
  Wrap,
  Box,
  Text,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Tabs, Instruction, CodeSnippet, InstructionStep } from '..'

const InstructionsContainer = () => {
  const [chainIdTabIndex, setChainIdTabIndex] = React.useState<0 | 1>(0)
  return (
    <Container maxW='container.md'>
      <Wrap spacing={4}>
        <Instruction number={1} title="Install Kevlar">
          <Tabs>
            <TabList>
              <Tab>npm</Tab>
              <Tab>yarn</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CodeSnippet>
                  npm install -g @lightclients/kevlar
                </CodeSnippet>
              </TabPanel>
              <TabPanel>
                <CodeSnippet>
                  yarn global add @lightclients/kevlar
                </CodeSnippet>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Instruction>
        <Instruction number={2} title="Start RPC proxy">
          <Tabs onChange={(index: number) => setChainIdTabIndex(index as 0 | 1)}>
            <TabList>
              <Tab>mainnet</Tab>
              <Tab>sepolia</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CodeSnippet>
                  kevlar
                </CodeSnippet>
              </TabPanel>
              <TabPanel>
                <CodeSnippet>
                  kevlar -n 11155111
                </CodeSnippet>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Instruction>
        <Instruction number={3} title="Add RPC to Metamask">
          <Box fontSize="sm">
            <Text>On your Metamask extension:</Text>
            <Wrap align="center" justify="center" spacing={1} mt={2}>
              {[
                <><Text>Network Selector dropdown</Text></>,
                <><Text fontStyle="italic">Add network</Text></>,
                <>
                  <Text as="span" fontStyle="italic">Chain ID</Text>:
                  <CodeSnippet mx={1} p={2}>
                    {chainIdTabIndex === 0 ? 1 : 11155111}
                  </CodeSnippet>
                </>,
                <>
                  <Text as="span" fontStyle="italic">New RPC URL</Text>:
                  <CodeSnippet mx={1} p={2}>
                    {'http://localhost:8546'}
                  </CodeSnippet>
                </>,
              ].map((stepItems, index, steps) => {
                return (
                  <InstructionStep
                    key={index}
                    rightIcon={(index === steps.length - 1)
                      ? undefined
                      : <ChevronRightIcon ml={1} color="gray.500" />
                    }
                  >
                    {stepItems}
                  </InstructionStep> 
                )
              })}
            </Wrap>
          </Box>
        </Instruction>
      </Wrap>
    </Container>
  )
}

export default InstructionsContainer

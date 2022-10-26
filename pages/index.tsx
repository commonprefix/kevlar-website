import React from 'react'
import type { NextPage } from 'next'
import {
  Text,
  Stack,
  Box,
  Image,
  Heading,
  Code,
  Wrap,
  WrapItem,
  Container,
  UnorderedList,
  ListItem,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {
  const [chainIdTabIndex, setChainIdTabIndex] = React.useState<0 | 1>(0)
  return (
    <Stack display="flex" alignItems="center" mx={3} mb={10} spacing={9} textAlign="center" mt="90px">
      <Container maxW='container.md'>
        <Stack spacing={2}>
          <Image src="/kevlar.png" alt="Kevlar Logo" h="95px" mx="auto" />
          <Heading as="h1" size="lg" fontWeight={700}>kevlar</Heading>
          <Text fontSize="md">Turn your wallet trustless.</Text>
        </Stack>
      </Container>
      <Container maxW='container.sm'>
        <Text fontSize="sm">
          Most wallets rely on centralized, trusted full nodes.
          Kevlar lets you run a light-client-based RPC proxy on your
          device that you can add to any RPC-based wallet.  Now every RPC call made by your wallet is verified
          using Merkle Inclusion proofs.
        </Text>
      </Container>
      <Container maxW='container.lg'>
        <Wrap spacing={4}>
          <WrapItem flex="1">
            <Box w="100%">
              <Heading as="h2" fontSize="xs" fontWeight="700" textTransform="uppercase" mb={2}>
                1. Install Kevlar
              </Heading>
              <Tabs align="center" colorScheme="yellow">
                <TabList>
                  <Tab>npm</Tab>
                  <Tab>yarn</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Code p={4} bg="gray.100" rounded="lg">
                      npm install -g @lightclients/kevlar
                    </Code>
                  </TabPanel>
                  <TabPanel>
                    <Code p={4} bg="gray.100" rounded="lg">
                      yarn global add @lightclients/kevlar
                    </Code>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </WrapItem>
          <WrapItem flex="1">
            <Box w="100%">
              <Heading as="h2" fontSize="xs" fontWeight="700" textTransform="uppercase" mb={2}>
                2. Start RPC proxy
              </Heading>
              <Tabs align="center" onChange={(index) => setChainIdTabIndex(index as 0 | 1)} colorScheme="yellow">
                <TabList>
                  <Tab>mainnet</Tab>
                  <Tab>goerli</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Code p={4} bg="gray.100" rounded="lg">
                      kevlar -n 1
                    </Code>
                  </TabPanel>
                  <TabPanel>
                    <Code p={4} bg="gray.100" rounded="lg">
                      kevlar -n 5
                    </Code>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </WrapItem>
          <WrapItem flex="1">
            <Box w="100%">
              <Heading as="h2" fontSize="xs" fontWeight="700" textTransform="uppercase" mb={2}>
                3. Add RPC to Metamask
              </Heading>
              <Box fontSize="sm">
                <Text>On your Metamask extension:</Text>
                <Wrap align="center" justify="center" spacing={1} mt={2}>
                  <WrapItem display="flex" alignItems="center">
                    <Text>Network Selector dropdown</Text>
                    <ChevronRightIcon ml={1} color="gray.500" />
                  </WrapItem>
                  <WrapItem display="flex" alignItems="center">
                    <Text as="span" fontStyle="italic">Add network</Text>
                    <ChevronRightIcon ml={1} color="gray.500" />
                  </WrapItem>
                  <WrapItem display="flex" alignItems="center">
                    <Box>
                      <Text as="span" fontStyle="italic">Chain ID</Text>: <Code p={2} bg="gray.100" rounded="lg">{chainIdTabIndex === 0 ? 1 : 5}</Code>
                    </Box>
                    <ChevronRightIcon ml={1} color="gray.500" />
                  </WrapItem>
                  <WrapItem display="flex" alignItems="center">
                    <Box>
                      <Text as="span" fontStyle="italic">New RPC URL</Text>: <Code p={2} bg="gray.100" rounded="lg">{'http://localhost:8546'}</Code>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Container>
      <Container maxW='container.md' as="footer" display="flex" alignItems="center" justifyContent="center">
        <UnorderedList fontSize="sm" listStyleType="none" p={0} display="flex" justifyContent="center" alignItems="center">
          <ListItem color="yellow.500"><Link href="https://arxiv.org/pdf/2209.08673.pdf" isExternal>Paper</Link></ListItem>
          <ListItem color="yellow.500" mx={[6, 7, 8]}><Link href="https://twitter.com/shresth3103/status/1581370823083839488" isExternal>How does it work?</Link></ListItem>
          <ListItem color="yellow.500"><Link href="https://github.com/lightclients/kevlar" isExternal>GitHub</Link></ListItem>
        </UnorderedList>
      </Container>
    </Stack>
  )
}

export default Home

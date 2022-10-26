import React from 'react'
import type { NextPage } from 'next'
import {
  Text,
  Stack,
  Box,
  BoxProps,
  Image,
  Heading,
  HeadingProps,
  Code,
  CodeProps,
  Wrap,
  WrapItem,
  Container,
  UnorderedList,
  ListItem,
  Link,
  LinkProps,
  Tabs as ChakraTabs,
  TabsProps as ChakraTabsProps,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const HeadingContainer = () => {
  return (
    <Container>
      <Stack spacing={2}>
        <Image src="/kevlar.png" alt="Kevlar Logo" h="95px" mx="auto" />
        <Heading as="h1" size="lg" fontWeight={700}>kevlar</Heading>
        <Text fontSize="md">Make your wallet trustless.</Text>
      </Stack>
    </Container>
  )
}

const SubheadingContainer = () => {
  return (
    <Container maxW='container.md'>
      <Text fontSize="sm">
        Most wallets rely on centralized, trusted full nodes.
        Kevlar lets you run a light-client-based RPC proxy on your
        device that you can add to any RPC-based wallet.
        With Kevlar, every RPC call made by your wallet is verified
        using Merkle Inclusion proofs.
      </Text>
    </Container>
  )
}

type TabsProps = Omit<ChakraTabsProps, 'colorScheme' | 'align'>

const Tabs = (props: TabsProps) => {
  return (
    <ChakraTabs align="center" colorScheme="yellow" {...props} />
  )
}

type CodeSnippetProps = Omit<CodeProps, 'bg | rounded'>

const CodeSnippet = (props: CodeSnippetProps) => {
  return (
    <Code
      p={4}
      bg="gray.100"
      rounded="lg"
      {...props}
    />
  )
}

type InstructionHeadingProps = Omit<HeadingProps, 'as' | 'fontSize' | 'fontWeight' | 'textTransform'>

const InstructionHeading = (props: InstructionHeadingProps) => {
  return (
    <Heading
      as="h2"
      fontSize="xs"
      fontWeight="700"
      textTransform="uppercase"
      mb={2}
      {...props}
    />
  )
}

type InstructionProps = BoxProps & {
  number: number
  title: string
}

const Instruction = ({ number, title, children, ...props }: InstructionProps) => {
  return (
    <WrapItem flex="1">
      <Box w="100%" {...props}>
        <InstructionHeading>
          {number}. {title}
        </InstructionHeading>
        {children}
      </Box>
    </WrapItem>
  )
}

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
          <Tabs onChange={(index) => setChainIdTabIndex(index as 0 | 1)}>
            <TabList>
              <Tab>mainnet</Tab>
              <Tab>goerli</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CodeSnippet>
                  kevlar -n 1
                </CodeSnippet>
              </TabPanel>
              <TabPanel>
                <CodeSnippet>
                  kevlar -n 5
                </CodeSnippet>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Instruction>
        <Instruction number={3} title="Add RPC to Metamask">
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
                  <Text as="span" fontStyle="italic">Chain ID</Text>: <CodeSnippet p={2}>{chainIdTabIndex === 0 ? 1 : 5}</CodeSnippet>
                </Box>
                <ChevronRightIcon ml={1} color="gray.500" />
              </WrapItem>
              <WrapItem display="flex" alignItems="center">
                <Box>
                  <Text as="span" fontStyle="italic">New RPC URL</Text>: <CodeSnippet p={2}>{'http://localhost:8546'}</CodeSnippet>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Instruction>
      </Wrap>
    </Container>
  )
}

type FooterLinkProps = Omit<LinkProps, 'isExternal'>

const FooterLink = (props: FooterLinkProps) => {
  return (
    <ListItem mx={[6, 7, 8]} color="yellow.500">
      <Link isExternal {...props} />
    </ListItem>
  )
}

const FooterContainer = () => {
  return (
    <Container as="footer" display="flex" alignItems="center" justifyContent="center">
      <UnorderedList fontSize="sm" listStyleType="none" p={0} display="flex" justifyContent="center" alignItems="center">
        <FooterLink href="https://arxiv.org/pdf/2209.08673.pdf">
          Paper
        </FooterLink>
        <FooterLink href="https://twitter.com/shresth3103/status/1581370823083839488">
          How does it work?
        </FooterLink>
        <FooterLink href="https://github.com/lightclients/kevlar">
          GitHub
        </FooterLink>
      </UnorderedList>
    </Container>
  )
}

const Home: NextPage = () => {
  return (
    <Stack
      display="flex"
      alignItems="center"
      mx={3}
      mb={10}
      spacing={10}
      textAlign="center"
      mt="90px"
    >
      <HeadingContainer />
      <SubheadingContainer />
      <InstructionsContainer />
      <FooterContainer />
    </Stack>
  )
}

export default Home

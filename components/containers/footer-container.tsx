import React from 'react'
import { Container, UnorderedList, ListItem, Link } from '@chakra-ui/react'

type FooterLink = {
  text: string
  link: string
}

const footerLinks: FooterLink[] = [
  {
    text: 'Paper',
    link: 'https://arxiv.org/pdf/2209.08673.pdf',
  },
  {
    text: 'How does it work?',
    link: 'https://twitter.com/shresth3103/status/1581370823083839488',
  },
  {
    text: 'GitHub',
    link: 'https://github.com/lightclients/kevlar',
  },
]

const FooterContainer = () => {
  return (
    <Container
      as="footer"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <UnorderedList
        p={0}
        fontSize="sm"
        listStyleType="none"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {footerLinks.map(({ text, link }, index) => {
          return (
            <ListItem mx={[6, 7, 8]} color="yellow.500" key={index}>
              <Link isExternal href={link}>
                {text}
              </Link>
            </ListItem>
          )
        })}
      </UnorderedList>
    </Container>
  )
}

export default FooterContainer

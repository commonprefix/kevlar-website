import React from 'react'
import NextHead from 'next/head'

const Head = () => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <title>kevlar - Make Your Wallet Trustless</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="description" content="Kevlar makes Metamask, or any RPC-based wallet, completely trustless." />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" type="image/png" href="/kevlar.png" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
    </NextHead>
  )
}

export default Head

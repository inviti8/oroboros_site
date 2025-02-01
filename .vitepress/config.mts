import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Oroboros",
  description: "XRO Network Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '../../_resources/oro_logo.svg',
    nav: [
      { text: '⛩ Home', link: '/' },
      { text: 'What is Oroboros?', link: 'What is Oroboros/The Oroboros' }
    ],

    sidebar: [
      {
        text: '📖 About',
        collapsed: false,
        items: [
          { text: '🐍 What is Oroboros?', link: 'What is Oroboros/The Oroboros' },
          { 
            text: '🗺 Overview',
            collapsed: false,
            items: [
                { text: 'Specs', link: '/Tokenomics/Token Specs' },
                { text: 'Mint from Tokens', link: '/Tokenomics/Minting from Token' },
                { text: 'Supply', link: '/Tokenomics/Supply' },
                { text: 'Minter Marks', link: '/Tokenomics/Mint Mark' }
              ]
          },
        ]
      },
      {
        text: '🧰 Developers',
        collapsed: false,
        items: [
          { text: '🧳 Getting Started', link: '/Getting Started/Getting Started' },
          { 
            text: '🤖 XRO API',
            collapsed: false,
            items: [
                { text: '🪙 Token Interaction',
                  collapsed: true,
                  items: [
                    { text: 'Mint from Tokens', link: '/Dev/Mint From Token' },
                    { text: 'Balance', link: '/Dev/balance' },
                    { text: 'Allocation By Mark', link: '/Dev/Coin Allocation by Mark' },
                    { text: 'Type of Allocation By Mark', link: '/Dev/Coin Allocation Type By Mark' }
                  ]
                },
                { text: '📈 Network Info',
                  collapsed: true,
                  items: [
                    {
                      text: '💵 Monetary',
                      collapsed: true,
                      items:[
                        { text: 'ICP Exchange Rate', link: '/Dev/Get Icp Exchange Rate' },
                        { text: 'ETH Exchange Rate', link: '/Dev/Get Eth  Exchange Rate' },
                        { text: 'BTC Exchange Rate', link: '/Dev/Get Btc  Exchange Rate' },
                      ]
                    },
                    {
                      text: '👑 Generator Mint Stats',
                      collapsed: true,
                      items:[
                        { text: 'Total Generator Minted Balance', link: '/Dev/Total Generator Minted Balance' },
                        { text: 'ICP Total Collected', link: '/Dev/Get Icp Total Collected' },
                        { text: 'ICP Network Take', link: '/Dev/Total ICP Network Take' },
                        { text: 'ETH Total Collected', link: '/Dev/Get Eth Total Collected' },
                        { text: 'ETH Network Take', link: '/Dev/Total ETH Network Take' },
                        { text: 'BTC Total Collected', link: '/Dev/Get Btc Total Collected' },
                        { text: 'BTC Network Take', link: '/Dev/Total BTC Network Take' },
                      ]
                    },
                    {
                      text: '⏳ Ephemeral Mint Stats',
                      collapsed: true,
                      items:[
                        { text: 'Total Epehemeral Minted Balance', link: '/Dev/Total Ephemeral Minted Balance' },
                        { text: 'Get Current Reward Cycle', link: '/Dev/Get Current Reward Cycle' },
                      ]
                    }
                  ]
                },
                { text: '👑 Generator Interaction',
                  collapsed: true,
                  items: [
                    { text: 'Generator Logo', link: '/Dev/Get Generator Logo' },
                    { text: 'Generator Epoch', link: '/Dev/Get Generator Epoch' },
                    { text: 'Is Generator', link: '/Dev/Is Generator' },
                    { text: 'Is in Generation', link: '/Dev/Is In Generation' },
                    { text: 'Update Generator Logo', link: '/Dev/Update Generator Logo' },
                    { text: 'Join Generation', link: '/Dev/Join Generation' },
                    { text: 'Withdraw ICP Allocation', link: '/Dev/Withdraw ICP Allocation' },
                    { text: 'Withdraw ETH Allocation', link: '/Dev/Withdraw CkETH Allocation' },
                    { text: 'Withdraw BTC Allocation', link: '/Dev/Withdraw CkBTC Allocation' },
                  ]
                },
                { text: '🧧 Drop Interaction',
                  collapsed: true,
                  items: [
                    { text: 'Create Ephemeral Drop', link: '/Dev/Create Ephemeral Drop Event' },
                    { text: 'Minimum ICP Needed for Drop', link: '/Dev/Icp Minimum Tokens Required For Drop' },
                    { text: 'Minimum ETH Needed for Drop', link: '/Dev/Eth Minimum Tokens Required For Drop' },
                    { text: 'Minimum BTC Needed for Drop', link: '/Dev/Btc Minimum Tokens Required For Drop' },
                    { text: 'Join Ephemeral Drop', link: '/Dev/Join Ephemeral Drop' },
                    { text: 'Show Ephemeral Drop Date', link: '/Dev/Show Ephemeral Drop Date' },
                    { text: 'Is Ephemeral Drop Ready', link: '/Dev/Is Ephemeral Drop Ready' },
                    { text: 'Withdraw ICP Allocation', link: '/Dev/Withdraw ICP Allocation' },
                    { text: 'Withdraw ETH Allocation', link: '/Dev/Withdraw CkETH Allocation' },
                    { text: 'Withdraw BTC Allocation', link: '/Dev/Withdraw CkBTC Allocation' },
                  ]
                }
              ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

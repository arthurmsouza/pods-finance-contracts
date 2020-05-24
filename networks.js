require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: '*',
      url: 'https://mainnet.infura.io/v3/' + process.env.INFURA_PROJECT_ID
    },
    ganache: {
      protocol: 'http',
      host: 'localhost',
      port: 7545,
      gas: 800,
      network_id: '5777',
      url: 'https://mainnet.infura.io/v3/' + process.env.INFURA_PROJECT_ID
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.DEV_MNEMONIC,
          'https://mainnet.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
          process.env.ADDRESS_INDEX
        ),
      network_id: '1',
      url: 'https://mainnet.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
      gasPrice: 2000000000
    },
    kovan: {
      provider: () =>
        new HDWalletProvider(
          process.env.DEV_MNEMONIC,
          'https://kovan.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
          process.env.ADDRESS_INDEX
        ),
      url: 'https://kovan.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
      from: process.env.FROM_ADDRESS,
      network_id: 42
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.DEV_MNEMONIC,
          'https://rinkeby.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
          process.env.ADDRESS_INDEX
        ),
      url: 'https://rinkeby.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
      network_id: 4
    }
  },
  solc: {
    version: '0.6.8'
  }
}

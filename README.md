# NFT Royalties 

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Web3](https://web3js.readthedocs.io/en/v1.5.2/) (Blockchain Interaction)
- [Truffle](https://www.trufflesuite.com/docs/truffle/overview) (Development Framework)
- [Ganache](https://www.trufflesuite.com/ganache) (For Local Blockchain)
- [Brownie](https://eth-brownie.readthedocs.io/en/stable/quickstart.html) (For wrapping with other deployed contract from network)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/), should work with any node version below 16.5.0
- Install [Truffle](https://www.trufflesuite.com/docs/truffle/overview), In your terminal, you can check to see if you have truffle by running `truffle version`. To install truffle run `npm i -g truffle`. Ideal to have truffle version 5.4 to avoid dependency issues.
- Install [Ganache](https://www.trufflesuite.com/ganache).
- Install [Brownie](https://eth-brownie.readthedocs.io/en/stable/quickstart.html)

## How it works

- How to [deploy on ganache](https://github.com/decadanse/nft-with-royalties/blob/main/how%20to%20deploy%20on%20ganache)
- How to [wrap NFT with deployed contract in network by it's address and ABI](https://github.com/decadanse/nft-with-royalties/blob/main/wrap%20NFT%20guide%20how%20to.js)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ cd nft-with-royalties
$ npm install 
```

### 3. Start Ganache

### 4. Migrate Smart Contracts
`$ truffle migrate --reset`

### 5. Run Tests
`$ truffle test`
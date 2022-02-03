// const Web3 = require('web3');
// const NFT = artifacts.require("./NFT");
// const niftsy = artifacts.require("./NIFTSY.json");
// const contractABI = require("../contract-abi.json");
// const contractAddress = "0x109Cb1f5a4851104C9Db27188C8158035D3303C1";

// const HDWalletProvider = require('@truffle/hdwallet-provider);

// module.exports = async function (callback) {

//     const [deployer, artist, owner1, owner2] = await web3.eth.getAccounts()
//     const mintPrice = web3.utils.toWei('1', 'ether')
//     const salePrice = web3.utils.toWei('5', 'ether')

//     const nft = await NFT.deployed()

//     console.log(`NFT Collection Fetched\n`)

//     let deployerBalance = await web3.eth.getBalance(deployer)
//     let artistBalance = await web3.eth.getBalance(artist)
//     let owner1Balance = await web3.eth.getBalance(owner1)

//     console.log(`Initial balance of deployer | ${web3.utils.fromWei(deployerBalance.toString(), 'ether')}`)
//     console.log(`Initial balance of artist   | ${web3.utils.fromWei(artistBalance.toString(), 'ether')}`)
//     console.log(`Initial balance of owner1   | ${web3.utils.fromWei(owner1Balance.toString(), 'ether')}\n`)

//     console.log(`Minting NFT for owner1...\n`)

//     await nft.mint({ from: owner1, value: mintPrice })

//     console.log(`NFT has been minted!\n`)

//     callback()
// }
const Web3 = require('web3');
const NFT = artifacts.require("./NFT");
const niftsy = artifacts.require("./NIFTSY.json");
const contractABI = require("../contract-abi.json");
const wrapperContractAddress = "0x109Cb1f5a4851104C9Db27188C8158035D3303C1";

const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = fs.readFileSync(".secret").toString().trim();

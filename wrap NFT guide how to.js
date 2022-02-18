Guide how to:

	- deploy, ming and approve NFT on Truffle
	- connect and wrap it on Brownie

---------------------------------------------
Part 1. Truffle.

	Part 1.0 "truffle-config.js" file

		add network settings for testnet and mainnet:

	    matic: { //testnet
	      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`),
	      network_id: 80001,
	      confirmations: 2,
	      timeoutBlocks: 200,
	      skipDryRun: true
	    },
	    polygon: { //mainnet
	      provider: () => new HDWalletProvider(mnemonic, `https://polygon-rpc.com`),
	      network_id: 137,
	      confirmations: 2,
	      timeoutBlocks: 200,
	      skipDryRun: true
	    },

	Part 1.1 Polygon Testnet Matic
		$ truffle migrate --reset --network matic 
		$ truffle console --network matic 
		truffle(matic)> nft = await NFT.deployed()
		... //the same as below in the main net

	Part 1.2 Polygon Mainnet	
		$ truffle migrate --reset --network polygon
		$ truffle console --network polygon
		nft = await NFT.deployed()
		nft.mint()
		nft.mint()
		nft.mint()
		nft.approve('address of wrapper contract', 1)
		nft.approve('address of wrapper contract', 2) //first, with id = 0 left not approved

---------------------------------------------
Part 2. Brownie.

	Part 2.1 ! how to config polygon networks WITHOUT Infura: 

		for test network:
			https://docs.polygon.technology/docs/develop/network-details/network/
			https://rpc-mumbai.maticvigil.co
			https://mumbai.polygonscan.com/

			! we adding new network
			brownie networks add Ethereum mumbai host=https://rpc-mumbai.matic.today chainid=80001 explorer=https://mumbai-explorer.matic.today
			(with one that above WAS PROBLEM so addresses were modified to those are below:)
			brownie networks modify mumbai host=https://rpc-mumbai.maticvigil.co chainid=80001 explorer=https://mumbai.polygonscan.com/


		for main network
			https://polygon-rpc.com/
			Block Explorer:
			https://polygonscan.com/

			brownie networks add Polygon polygon host=https://polygon-rpc.com/ chainid=137 explorer=https://polygonscan.com/


	Part 2.1

		$ brownie console --network polygon
		from brownie import NFT
		from brownie import *

		address = 'address of wrapper contract' //wrapper address

		import json

			/* 
			how to get ABI_of_Wrapper.json :
			- 1. open https://polygonscan.com/ and search for 'address of wrapper contract'
			- 2. open "Contract" window and go down to Contract ABI
			- 3. cope this ABI and paste it to empty file
			- 4. give it a name ("ABI_of_Wrapper.json") with .json
			*/

		with open("./NIFTSY_main.json") as f:
		   info_json = json.load(f)
		...
		abi = info_json
		wrapper = Contract.from_abi("Wra", address, abi)

		// to connect your owner account:
		accounts.from_mnemonic("mnemonic") // paste your mnemonic, from MetaMask for example, here

		nftaddress = "my NFT address" // some tokens from this NFT were approved earlier in Truffle

		zero_address = '0x0000000000000000000000000000000000000000'
		TRANSFER_FEE = 2e18

		/* those parametres in wrapper.wrap721() below are exatly tor this function from this contract. 
		they can be/will be different for different wrappers so firstly check which paramethes needed by
		following "how to get ABI_of_Wrapper.json  :" above 
		- 2. open "Contract" window --> there also will/can be found contract code
		*/

		wrapper.wrap721(nftaddress, 1, 0, TRANSFER_FEE, accounts[0], 10, 0, zero_address, {'from': accounts[0]})

---------------------------------------------
And we did it!

---------------------------------------------
note 1:

	firstly I tried to wrap my NFT on Truffle with those commands:

	$ truffle console --network matic 
	nft = await NFT.deployed()
	var Contract = require('web3-eth-contract');
	const abi = "./ABI_of_Wrapper.json"
	Ncontract = Contract.from_abi("wrapper",'address of wrapper contract',abi); 
	// from there it worked fine

	// those below didn't work at all. 
	Ncontract.methods.wrap721.call('NFT address', 3, 0, 0, 0, 1e18, 'owner address', 10, 0)
	Ncontract.methods.wrap721.call(nft.addrress, 7, 0, 0, 0, 1e18, 'owner address', 10, 0)
	Ncontract.methods.wrap721.call(Ncontract,nft.addrress, 7, 0, 1e18, accounts[0], 10, 2e18, accounts[0])
	Ncontract.methods.wrap721(nft.addrress, 7, 0, 1e18, accounts[0], 10, 2e18, accounts[0]).call()
	// so I go to Brownie

note 2: if in truffle console web3.version returns old version --> you can do:

	var Web3latest = require('web3');
	var web3latest = new Web3latest(); // it includes latest web3 version

---------------------------------------------
useful links:

	https://stackoverflow.com/questions/26227245/javascript-call-function-extra-parameters
	https://bitsofco.de/calling-smart-contract-functions-using-web3-js-call-vs-send/
	https://ethereum.stackexchange.com/questions/77142/call-smart-contract-function-in-python-script/77143#77143
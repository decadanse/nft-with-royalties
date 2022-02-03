const NFT = artifacts.require("./NFT");

module.exports = async function (deployer) {
    const accounts = await web3.eth.getAccounts()

    const IPFS_BOOK_METADATA_URI = `ipfs://QmRCvoukjMG2t2kDzgaV4q3TFK5mXMeSmRpsBNTu7pz9KQ`

    await deployer.deploy(
        NFT,
        "Wednesday",
        "WDY",
        IPFS_BOOK_METADATA_URI,
        25, // 25%
        accounts[0], // Artist
        1 // Transferability
    )
};
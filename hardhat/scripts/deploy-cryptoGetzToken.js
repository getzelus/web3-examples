const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_GETZ_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Crypto Getz NFT contract that you deployed in the previous module
  const cryptoGetzNFTContract = CRYPTO_GETZ_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoGetzTokenContract here is a factory for instances of our CryptoGetzToken contract.
    */
  const cryptoGetzTokenContract = await ethers.getContractFactory(
    "CryptoGetzToken"
  );

  // deploy the contract
  const deployedCryptoGetzTokenContract = await cryptoGetzTokenContract.deploy(
    cryptoGetzNFTContract
  );

  await deployedCryptoGetzTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
    "Crypto Getz Token Contract Address:",
    deployedCryptoGetzTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
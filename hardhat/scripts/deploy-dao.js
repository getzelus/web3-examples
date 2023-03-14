const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_GETZ_NFT_CONTRACT_ADDRESS } = require("../constants");


async function main() {
    // Deploy the FakeNFTMarketplace contract first
    const FakeNFTMarketplace = await ethers.getContractFactory(
        "FakeNFTMarketplace"
    );
    const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
    await fakeNftMarketplace.deployed();

    console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);

    // Now deploy the CryptoDevsDAO contract
    const CryptoDAO = await ethers.getContractFactory("CryptoDAO");
    const cryptoDAO = await CryptoDAO.deploy(
        fakeNftMarketplace.address,
        CRYPTO_GETZ_NFT_CONTRACT_ADDRESS,
        {
        // This assumes your metamask account has at least 1 ETH in its account
        // Change this value as you want
        value: ethers.utils.parseEther("1"),
        }
    );
    await cryptoDAO.deployed();

    console.log("CryptoDAO deployed to: ", cryptoDAO.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
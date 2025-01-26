const { ethers } = require("hardhat");

async function main() {
    const Guestbook = await ethers.getContractFactory("Guestbook");
    const guestbook = await Guestbook.deploy();
    console.log("Contract Deployed to Address:", guestbook.address);
  }
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

// Alread deployed contract address: 0xF1c4f7CC01F9030d090F8F671063F19BEeE20B74
const { ethers } = require("ethers");
import {INFURA_KEY} from ".env"

const network = "sepolia";
const provider = ethers.getDefaultProvider(network,{infura : INFURA_KEY});

const querryBlockchain = async () => {

  const CGBalance = await provider.getBalance("0xc9412F03CF8f483A3f5E79f16871ea9C7Dada33D");
  const balanceInEther = ethers.formatEther(CGBalance);
  console.log("Ethererum : ",balanceInEther);
//   console.log(CGBalance);
};
querryBlockchain();
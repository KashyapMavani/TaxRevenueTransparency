const { ethers } = require("ethers");
require('dotenv').config();

const INFURA_KEY = process.env.INFURA_KEY;
const network = "sepolia";
const provider = ethers.getDefaultProvider(network,{infura : INFURA_KEY});

const querryBlockchain = async (address) => {

  const CGBalance = await provider.getBalance(address);
  const balanceInEther = ethers.formatEther(CGBalance);
  console.log("Ethererum : ",balanceInEther);
//   console.log(CGBalance);
};

querryBlockchain("0xc9412F03CF8f483A3f5E79f16871ea9C7Dada33D"); // central
querryBlockchain("0x7e41530294092d856F3899Dd87A5756e00da1e7a"); // State
querryBlockchain("0x9cf7593eB463f6aDdaE5f8EbdCA1f581cc168292"); // District
querryBlockchain("0x18B29a2cD9F5D0415d1e71F3a8394FdAb34F0ba0"); // MLA
querryBlockchain("0xfC3401126235cA04036F3777bd38A171312DcD51"); // healthcare
querryBlockchain("0xBf38AA4207ec0ED062a22FaA3368615dfCA65848"); // transport
querryBlockchain("0x9427EDbFC3BA08ff28B4d509f7abd01C53Fc891a"); // Contractor
querryBlockchain("0xA9e11519D8B4408f0b9f965c0b05ad4A08784C02"); // material
querryBlockchain("0xA369648442859AfF75c6551ce853127F83A4f95D"); // labour

const {ethers} = require("ethers");
const api_key = ""; // get api key from infura
const provider = new ethers.provider.JsonRpcProvider(`https://sepolia.infura.io/v3/{api_key}`);

const ContractAddress = "";

const walletAddress = ContractAddress;

const CG_Account_Address = ""; // Central Government account address
const SG_Account_Address = ""; // State Government account  address
const DG_Account_Address = ""; // District Government account  address
const MLA_Account_Address = ""; // MLA account  address
const HC_Account_Address = ""; // Health Care sector  account address
const RT_Account_Address = ""; // Road and Transport Ministry account address

const CGBalance = await provider.getBalance({CG_Account_Address}); //Getting balance of Central Government account
const SGBalance = await provider.getBalance({SG_Account_Address}); //Getting balance of state Government account
const DGBalance = await provider.getBalance({DG_Account_Address}); //Getting balance of district Government account
const MLA_Acct_Balance = await provider.getBalance({MLA_Account_Address}); //Getting balance of MLA account
const HC_Acct_Balance = await provider.getBalance({HC_Account_Address}); //Getting balance of Health Care sector account
const RT_Acct_Balance = await provider.getBalance({RT_Account_Address}); //Getting balance of Road and Transport Ministry account

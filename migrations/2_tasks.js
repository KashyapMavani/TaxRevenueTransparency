var tasks = artifacts.require("./Tasks.sol");
// 0x5Ef357dF3aF7C4f7059De535d053D705e46Cef83

module.exports = async function(deployer) {
  await deployer.deploy(tasks); // addressParam1, addressParam2);
};

// var tasks = artifacts.require("./Tasks.sol");

// module.exports = function(deployer) {
//   // Array of addresses
//   var Sectors = [0xD7fd75A0196a32bf5856a8fA6e4A9390Af83A835, 0xA3ef3E4B768f4bC46C7B410B2D010Dee643F1085, 0x9AE20fFF2b0fc93A7BBD452Ca880a8606A30D8A9];

//   // Convert addresses to strings
//   var stringArray = Sectors.map(function(address) {
//     return address.toString();
//   });

//   deployer.deploy(tasks, stringArray,  );
// };

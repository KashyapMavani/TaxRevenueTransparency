const FundMonitor = artifacts.require("FundMonitor");

module.exports = function(deployer) {
  var org1 = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
  var org2 = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'

  deployer.deploy(FundMonitor, org1, org2);
};
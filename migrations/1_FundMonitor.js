const FundMonitor = artifacts.require("FundMonitor");

module.exports = function (deployer) {
  deployer.deploy(FundMonitor);
};

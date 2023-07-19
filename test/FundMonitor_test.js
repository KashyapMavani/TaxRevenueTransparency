const { assert } = require("console");
const { contract } = require("web3/lib/commonjs/eth.exports")

var FundMonitor = artifacts.require('FundMonitor')

contract('FundMonitor', async function(){
    // Tests the deployment
    it('Tests the deployment of the FundMonitor', function(){
        const fundMonitor = FundMonitor.deployed();
        console.log("Address - ",fundMonitor.address);
        assert(fundMonitor.address !== '');
    })
});
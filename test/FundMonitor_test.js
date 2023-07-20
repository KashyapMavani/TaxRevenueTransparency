const FundMonitor = artifacts.require("FundMonitor");

contract("FundMonitor", (accounts) => {
  let fundMonitor;

  // Deploy a new instance of the FundMonitor contract before each test
  beforeEach(async () => {
    fundMonitor = await FundMonitor.new();
  });

  // Test the allocation of funds
  it("should allocate funds from one address to another", async () => {
    const fromAddress = accounts[2];
    const toAddress = accounts[3];
    const amount = web3.utils.toWei("1", "ether");

    await fundMonitor.addDistrict(fromAddress, "District1", {
      from: accounts[0],
    });
    await fundMonitor.addSector(toAddress, "Sector1", { from: accounts[0] });

    await fundMonitor.allocateFunds(fromAddress, toAddress, { value: amount });

    const allocatedAmount = await fundMonitor.allocatedFunds(
      fromAddress,
      toAddress
    );
    assert.equal(
      allocatedAmount.toString(),
      amount,
      "Incorrect allocated amount"
    );
  });

  // Test the transfer of funds
  it("should transfer funds from one address to another", async () => {
    const fromAddress = accounts[2];
    const toAddress = accounts[3];
    const amount = web3.utils.toWei("1", "ether");

    // Add districts and sectors
    await fundMonitor.addDistrict(fromAddress, "District1", {
      from: accounts[0],
    });
    await fundMonitor.addSector(toAddress, "Sector1", { from: accounts[0] });

    // Allocate funds before transferring
    await fundMonitor.allocateFunds(fromAddress, toAddress, { value: amount });

    // Transfer funds
    await fundMonitor.transferFunds(fromAddress, toAddress, amount);

    const transferredAmount = await fundMonitor.transferredFunds(
      fromAddress,
      toAddress
    );
    assert.equal(
      transferredAmount.toString(),
      amount,
      "Incorrect transferred amount"
    );
  });
});

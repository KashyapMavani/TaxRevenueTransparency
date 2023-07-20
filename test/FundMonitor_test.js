// Import the required contract artifacts and web3 libraries
const FundMonitor = artifacts.require("FundMonitor");

// Define the test suite
contract("FundMonitor", (accounts) => {
  // Define accounts
  const owner = accounts[0];
  const centralGov = accounts[1];
  const state1 = accounts[2];
  const district1 = accounts[3];
  const sector1 = accounts[4];
  const contractor1 = accounts[5];
  const supplier1 = accounts[6];

  // Define the hierarchy levels
  // const HIERARCHY_CENTRAL = 1;
  const HIERARCHY_STATE = 2;
  const HIERARCHY_DISTRICT = 3;
  const HIERARCHY_SECTOR = 4;
  const HIERARCHY_CONTRACTOR = 5;
  const HIERARCHY_SUPPLIER = 6;

  // Declare the contract instance
  let fundMonitor;

  // Deploy the contract before each test
  beforeEach(async () => {
    fundMonitor = await FundMonitor.new({ from: owner });
  });

  // Test the setCentralGov function
  it("should set the central government address", async () => {
    await fundMonitor.setCentralGov(centralGov, { from: owner });
    const actualCentralGov = await fundMonitor.centralGov();
    assert.strictEqual(actualCentralGov, centralGov, "Central government address not set correctly");
  });

  // Test the setHierarchy function
  it("should set the hierarchy level for organizations", async () => {
    await fundMonitor.setCentralGov(centralGov, { from: owner });
    await fundMonitor.setHierarchy(state1, HIERARCHY_STATE, { from: centralGov });
    await fundMonitor.setHierarchy(district1, HIERARCHY_DISTRICT, { from: state1 });
    await fundMonitor.setHierarchy(sector1, HIERARCHY_SECTOR, { from: district1 });
    await fundMonitor.setHierarchy(contractor1, HIERARCHY_CONTRACTOR, { from: sector1 });
    await fundMonitor.setHierarchy(supplier1, HIERARCHY_SUPPLIER, { from: contractor1 });

    const hierarchyState = await fundMonitor.hierarchy(state1);
    const hierarchyDistrict = await fundMonitor.hierarchy(district1);
    const hierarchySector = await fundMonitor.hierarchy(sector1);
    const hierarchyContractor = await fundMonitor.hierarchy(contractor1);
    const hierarchySupplier = await fundMonitor.hierarchy(supplier1);

    assert.strictEqual(hierarchyState.toNumber(), HIERARCHY_STATE, "Incorrect hierarchy level for state");
    assert.strictEqual(hierarchyDistrict.toNumber(), HIERARCHY_DISTRICT, "Incorrect hierarchy level for district");
    assert.strictEqual(hierarchySector.toNumber(), HIERARCHY_SECTOR, "Incorrect hierarchy level for sector");
    assert.strictEqual(hierarchyContractor.toNumber(), HIERARCHY_CONTRACTOR, "Incorrect hierarchy level for contractor");
    assert.strictEqual(hierarchySupplier.toNumber(), HIERARCHY_SUPPLIER, "Incorrect hierarchy level for supplier");
  });

  // Test the allocateFunds function
  it("should allocate funds from one organization to another", async () => {
    await fundMonitor.setCentralGov(centralGov, { from: owner });
    await fundMonitor.setHierarchy(state1, HIERARCHY_STATE, { from: centralGov });
    await fundMonitor.setHierarchy(district1, HIERARCHY_DISTRICT, { from: state1 });

    const initialBalanceDistrict1 = web3.utils.toBN(await web3.eth.getBalance(district1));
    const amountToAllocate = web3.utils.toWei("0.01", "ether");
    await fundMonitor.allocateFunds(district1, state1, { from: centralGov, value: amountToAllocate });

    const finalBalanceDistrict1 = web3.utils.toBN(await web3.eth.getBalance(district1));
    console.log(finalBalanceDistrict1.sub(initialBalanceDistrict1).toString()); // 0
    console.log(amountToAllocate); // 1 eth
    assert.strictEqual(
      finalBalanceDistrict1.sub(initialBalanceDistrict1).toString(),
      amountToAllocate,
      "Funds were not allocated correctly"
    );
  });


  // Test the transferFunds function
  it("should transfer funds from one organization to another", async () => {
    await fundMonitor.setCentralGov(centralGov, { from: owner });
    await fundMonitor.setHierarchy(state1, HIERARCHY_STATE, { from: centralGov });
    await fundMonitor.setHierarchy(district1, HIERARCHY_DISTRICT, { from: state1 });

    const initialBalanceState1 = web3.utils.toBN(await web3.eth.getBalance(state1));
    const amountToAllocate = web3.utils.toWei("1", "ether");
    await fundMonitor.allocateFunds(district1, state1, { from: centralGov, value: amountToAllocate });

    const initialBalanceDistrict1 = web3.utils.toBN(await web3.eth.getBalance(district1));
    const amountToTransfer = web3.utils.toWei("0.5", "ether");
    await fundMonitor.transferFunds(district1, state1, amountToTransfer, { from: district1 });

    const finalBalanceState1 = web3.utils.toBN(await web3.eth.getBalance(state1));
    assert.strictEqual(
      finalBalanceState1.sub(initialBalanceState1).toString(),
      amountToTransfer,
      "Funds were not transferred correctly"
    );

    const finalBalanceDistrict1 = web3.utils.toBN(await web3.eth.getBalance(district1));
    assert.strictEqual(
      initialBalanceDistrict1.sub(finalBalanceDistrict1).toString(),
      amountToTransfer,
      "Funds were not transferred correctly"
    );
  });

  // Add more tests for the other functions of the FundMonitor contract as needed
});

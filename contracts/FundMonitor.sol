// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundMonitor {
    // Fund monitor Code
    address public organization1;
    address public organization2;
    uint256 public allocatedFund;
    uint256 public transferredFund;

    event FundsAllocated(address indexed sender, uint256 amount);
    event FundsTransferred(address indexed sender, uint256 amount);

    constructor(address _organization1, address _organization2) {
        organization1 = _organization1;
        organization2 = _organization2;
    }

    function allocateFunds() external payable {
        require(msg.sender == organization1, "Only organization1 can allocate funds.");
        allocatedFund += msg.value;
        emit FundsAllocated(msg.sender, msg.value);
    }

    function transferFunds(uint256 amount) external {
        require(msg.sender == organization1, "Only organization1 can transfer funds.");
        require(allocatedFund >= amount, "Insufficient allocated funds.");
        allocatedFund -= amount;
        transferredFund += amount;
        emit FundsTransferred(msg.sender, amount);
        payable(organization2).transfer(amount);
    }

    // -------------FUNDMONITOR ends.-------------
    // Code for the rest starts now.
    struct District{
        string nameOfDistrict;
        address districtAddress;
    }

    function addDistrict() public {

    }

    // ----------------DISTRICT ENDS.----------------
    // code for SECTORS
    struct Sectors{
        string nameOfSectors;
        address sectorAddress;
    }

    function addSector() public {
        
    }
    // ----------------SECTOR ENDS.----------------
        // code for SECTORS
    struct Contractor{
        string nameOfContractor;
        address contractorAddress;
    }

    function addContractor() public {
        
    }
    // ----------------COTRACTOR ENDS.----------------

}

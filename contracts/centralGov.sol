// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CentralGovernment {
    address public owner;
    uint256 public totalFunds;
    mapping(address => uint256) public balances;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function depositFunds() public payable {
        balances[msg.sender] += msg.value;
        totalFunds += msg.value;
    }

    function withdrawFunds(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance.");

        balances[msg.sender] -= amount;
        totalFunds -= amount;
        payable(msg.sender).transfer(amount);
    }

    function getBalance(address account) public view returns (uint256) {
        return balances[account];
    }

    function getTotalFunds() public view returns (uint256) {
        return totalFunds;
    }
}

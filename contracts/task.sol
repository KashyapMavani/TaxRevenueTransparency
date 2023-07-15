// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;


struct Application{
    address nameOfContractor;
    string[] works;
    uint256[] amounts;
    uint256 total;
}

contract Task{
    address[] public sectors;
    address[] public contractors;
    Application[] public Applications;
 
    // modifier  onlySectors
    constructor(address[] memory sector, address[] memory contractor){
        sectors = sector;
        contractors = contractor;
        bool isSector = false;
        for (uint256 i = 0; i < sectors.length; i++) {
            if (sectors[i] == msg.sender) {
                isSector = true;
                break;
            }
        }
        require(isSector, "You are not an insider sector.");
    }

    function f_apply(string[] memory wrk, uint256[] memory amt, uint256 tot) public {
        Application memory app = Application(msg.sender, wrk, amt, tot);
        Applications.push(app);       
    }
}
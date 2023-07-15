// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error notContractor();
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
    Application public acceptApp;
    address acceptedContractor;

    // Modifer for contractors only
    modifier onlyContractor{
        bool isContractor = false;
        for (uint256 i = 0; i < contractors.length; i++) {
            if (sectors[i] == msg.sender) {
                isContractor = true;
                break;
            }
        }
        require(isContractor, "You are not verified contractor.");
        _;
    }

    // constructor for Task, only sectors can call
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
        if(isSector){
            revert("You are not an insider sector.");
        }
    }

    // Apply for the contractors only
    function f_apply (string[] memory wrk, uint256[] memory amt, uint256 tot) public onlyContractor {
        Application memory app = Application(msg.sender, wrk, amt, tot);
        Applications.push(app);
    }

    // Accept Application from all the applications
    function acceptApplication(uint256 indexOfApplication) public {
        bool isSector = false;
        for (uint256 i = 0; i < sectors.length; i++) {
            if (sectors[i] == msg.sender) {
                isSector = true;
                break;
            }
        }
        if(isSector){
            revert("You are not an insider sector.");
        }
        acceptApp = Applications[indexOfApplication];
        acceptedContractor = Applications[indexOfApplication].nameOfContractor;
    }

}
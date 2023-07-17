// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// error notContractor();


contract Tasks{
    struct Application{
        address nameOfContractor;
        string[] works;
        // address[] clients; // The tracking of money from the contractor 
        uint256[] amounts;
        uint256 total;
    }

    address[] public sectors;// = [0x3470F7DB7c0aD89650360B8416A1465A6155Fd12, 0xD7fd75A0196a32bf5856a8fA6e4A9390Af83A835, 0xA3ef3E4B768f4bC46C7B410B2D010Dee643F1085, 0x9AE20fFF2b0fc93A7BBD452Ca880a8606A30D8A9];
    address[] public contractors;//= [0x5fF505A0753529A586f3EC6A543e394ddc221A61, 0x92e9a91A2410c6b1C9dd4813c1723c6c50040815, 0x28693CfF9BC728678869d0c9F42919Dd46eBBCdE];
    Application[] public Applications;
    Application public acceptApp;
    address acceptedContractor;
    address public contractOwner;
    address temp;

    constructor(){
        contractOwner = msg.sender;
    }

    function setSector(address _address) public {
        temp = _address;
    }

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

    // function payContractor() public payable {
    //     // require(price.getConversionRate(msg.value) >= minimumUSD, "Less than mimimum amount.");
    //     // funders.push(msg.sender);
    //     // addressToFunder[msg.sender] += msg.value;
    // }

    // function contractorWithdrawal() public{
    //     (bool success,) = payable(acceptedContractor).call{value: address(this).balance}("");
    //     require(success, "Failed to transfer");
    // }

}

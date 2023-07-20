// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FundMonitor {
    // global variable & modifier
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    // Fund monitor Code
    struct Transfer {
        address fromDistrict;
        address toSector;
        uint256 amount;
    }

    mapping(address => mapping(address => uint256)) public allocatedFunds;
    mapping(address => mapping(address => uint256)) public transferredFunds;
    mapping(address => mapping(address => Transfer[])) public transferHistory;

    mapping(address => mapping(address => bool)) public isDistrictSector; // to check if the sector belongs to that district

    event FundsAllocated(
        address indexed sender,
        address indexed district,
        address indexed sector,
        uint256 amount
    );
    event FundsTransferred(
        address indexed sender,
        address indexed fromDistrict,
        address indexed toSector,
        uint256 amount
    );

    constructor() {
        owner = msg.sender;
    }

    function allocateFunds(address fromAddress, address toAddress)
        external
        payable
    {
        allocatedFunds[fromAddress][toAddress] += msg.value;
        emit FundsAllocated(msg.sender, fromAddress, toAddress, msg.value);

        if (isDistrictSector[fromAddress][toAddress] == false) {
            isDistrictSector[fromAddress][toAddress] = true;
        }
    }

    function transferFunds(
        address fromAddress,
        address toAddress,
        uint256 amount
    ) external {
        require(
            allocatedFunds[fromAddress][toAddress] >= amount,
            "Insufficient allocated funds."
        );
        allocatedFunds[fromAddress][toAddress] -= amount;
        transferredFunds[fromAddress][toAddress] += amount;
        transferHistory[fromAddress][toAddress].push(
            Transfer(fromAddress, toAddress, amount)
        );
        emit FundsTransferred(msg.sender, fromAddress, toAddress, amount);
        payable(toAddress).transfer(amount);
    }

    // -------------FUNDMONITOR ends.-------------
    // Code for the rest starts now.
    struct District {
        string nameOfDistrict;
        address districtAddress;
    }

    District[] public districts;
    mapping(address => bool) public isDistrict;

    function addDistrict(address _districtAddress, string memory _districtName)
        public
        onlyOwner
    {
        require(!isDistrict[_districtAddress], "District already exists.");
        District memory newDistrict = District(_districtName, _districtAddress);
        districts.push(newDistrict);
        isDistrict[_districtAddress] = true;
    }

    function removeDistrict(address _districtAddress) public onlyOwner {
        require(isDistrict[_districtAddress], "District does not exist");

        for (uint256 i = 0; i < districts.length; i++) {
            if (districts[i].districtAddress == _districtAddress) {
                delete districts[i];
                isDistrict[_districtAddress] = false;
                break;
            }
        }
    }

    // ----------------DISTRICT ENDS.----------------
    // code for SECTORS
    struct Sectors {
        string nameOfSectors;
        address sectorAddress;
    }

    Sectors[] public sectors;
    mapping(address => bool) public isSector;

    function addSector(address _sectorAddress, string memory _sectorName)
        public
        onlyOwner
    {
        require(!isSector[_sectorAddress], "Sector already exists.");
        Sectors memory newSector = Sectors(_sectorName, _sectorAddress);
        sectors.push(newSector);
        isSector[_sectorAddress] = true;
    }

    function removeSector(address _sectorAddress) public onlyOwner {
        require(isSector[_sectorAddress], "Sector does not exist");

        for (uint256 i = 0; i < sectors.length; i++) {
            if (sectors[i].sectorAddress == _sectorAddress) {
                delete sectors[i];
                isSector[_sectorAddress] = false;
                break;
            }
        }
    }

    // ----------------SECTOR ENDS.----------------
    // code for CONTRACTORS
    struct Contractor {
        string nameOfContractor;
        address contractorAddress;
    }

    Contractor[] public contractors;
    mapping(address => bool) public isContractor;

    function addContractor(
        address _contractorAddress,
        string memory _contractorName
    ) public onlyOwner {
        require(
            !isContractor[_contractorAddress],
            "Contractor already exists."
        );
        Contractor memory newcontractor = Contractor(
            _contractorName,
            _contractorAddress
        );

        contractors.push(newcontractor);
        isContractor[_contractorAddress] = true;
    }

    function removeContractor(address _contractorAddress) public onlyOwner {
        require(
            isContractor[_contractorAddress],
            "Contractor does not exists."
        );

        for (uint256 i = 0; i < contractors.length; i++) {
            if (contractors[i].contractorAddress == _contractorAddress) {
                delete contractors[i];
                isContractor[_contractorAddress] = false;
                break;
            }
        }
    }
    // ----------------COTRACTOR ENDS.----------------
}

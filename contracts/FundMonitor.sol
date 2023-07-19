// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundMonitor {
    // global variable & modifier
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

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
        owner = msg.sender;
    }

    function allocateFunds() external payable {
        require(
            msg.sender == organization1,
            "Only organization1 can allocate funds."
        );
        allocatedFund += msg.value;
        emit FundsAllocated(msg.sender, msg.value);
    }

    function transferFunds(uint256 amount) external {
        require(
            msg.sender == organization1,
            "Only organization1 can transfer funds."
        );
        require(allocatedFund >= amount, "Insufficient allocated funds.");
        allocatedFund -= amount;
        transferredFund += amount;
        emit FundsTransferred(msg.sender, amount);
        payable(organization2).transfer(amount);
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

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// import {Sectors} from "./sectors.sol";

contract District {
    struct Member {
        address memberAddress;
        string name;
        uint256 ID;
    }

    address public owner;
    Member[] public members;
    mapping(address => bool) public isMember;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addMember(address _memberAddress, string memory _name, uint256 _ID) public onlyOwner {
        require(!isMember[_memberAddress], "Member already exists.");

        Member memory newMember = Member(_memberAddress, _name, _ID);
        members.push(newMember);
        isMember[_memberAddress] = true;
    }

    function removeMember(address _memberAddress) public onlyOwner {
        require(isMember[_memberAddress], "Member does not exist.");

        for (uint256 i = 0; i < members.length; i++) {
            if (members[i].memberAddress == _memberAddress) {
                delete members[i];
                isMember[_memberAddress] = false;
                break;
            }
        }
    }
}

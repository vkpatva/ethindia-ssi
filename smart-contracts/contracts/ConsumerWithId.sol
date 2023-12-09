// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract ConsumerWithId {
    address public owner;

    event Registered(address indexed user);
    event Gov_Id_Vc_Issued(address indexed user);
    event Emp_Vc_Issued(address indexed user);
    event Insurance_Vc_Issued(address indexed user);

    constructor() {
        owner = msg.sender;
    }

    function userRegistered() external {
        emit Registered(msg.sender);
    }

    function govIdIssued() external {
        emit Gov_Id_Vc_Issued(msg.sender);
    }

    function empIdIssued() external {
        emit Emp_Vc_Issued(msg.sender);
    }

    function insuranceIssued() external {
        emit Insurance_Vc_Issued(msg.sender);
    }
}

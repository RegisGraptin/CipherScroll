// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

struct CtfProblem {
    uint256 id;
    string title;
    string description;
    address verifier;
}

contract CtfContract is Ownable {

    uint256 public problemId;

    CtfProblem[] public ctfProblems;

    // Given user save if he has completed the ctf
    mapping (uint256 ctfId => mapping(address user => bool)) completed;

    event Succeed(uint256 indexed ctfId, address indexed user);

    constructor(address initialOwner) Ownable(initialOwner) {}

    function addCtf() public onlyOwner {
        
    }

}

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

    // Store ctf challenges
    mapping (uint256 ctfId => CtfProblem) ctfProblems;

    // Given user save if he has completed the ctf
    mapping (uint256 ctfId => mapping(address user => bool)) completed;

    event NewCtf(uint256 indexed ctfId, string title);
    event Succeed(uint256 indexed ctfId, address indexed user);

    // Access functions
    function getCtfProblems(uint256 ctfId) view public returns (CtfProblem memory) {
        return ctfProblems[ctfId];
    }

    function getUserCompleted(uint256 ctfId, address user) view public returns (bool) {
        return completed[ctfId][user];
    }

    constructor(address initialOwner) Ownable(initialOwner) {}

    function addCtf(
        string memory _title, 
        string memory _description, 
        address _verifier
    ) public onlyOwner {
        // Add ctf problem
        ctfProblems[problemId] = CtfProblem({
            id: problemId,
            title: _title,
            description: _description,
            verifier: _verifier
        });

        emit NewCtf(problemId, _title);

        problemId++;
    }


}

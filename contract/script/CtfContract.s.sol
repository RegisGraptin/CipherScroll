// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {CtfContract} from "../src/CtfContract.sol";

import {UltraVerifier} from "../circuits/ctf1/target/contract.sol";

contract CtfContractScript is Script {
    CtfContract public ctfContract;
    UltraVerifier public verifier;

    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        address account = vm.addr(deployerPrivateKey);

        // Deploy CTF contract manager 
        ctfContract = new CtfContract(account);

        // Deploy first ctf mission
        verifier = new UltraVerifier();

        // Add new CTF 
        ctfContract.addCtf(
            "Decypher the hidden message",
            "Some strange texts have been received and it's crucial for us to decipher them. Could you give us a hand? Here the message: 'aGVsbG9fd29ybGRfY3RmX3Bhc3N3b3Jk'",
            address(verifier)
        );

        vm.stopBroadcast();
    }
}

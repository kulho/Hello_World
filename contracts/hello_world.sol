// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string private s = "Hello world";

    function getString() public view returns (string memory) {
        return s;
    }
}

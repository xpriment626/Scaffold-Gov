// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Vault is Ownable {

	mapping(address => uint256) public fundingLog;

	function fund() external payable {
		fundingLog[msg.sender] = msg.value;
	}

	function withdraw() external onlyOwner {
		payable(msg.sender).transfer(address(this).balance);
	}

	function viewBalance() external view returns (uint256) {
		return address(this).balance;
	}

	receive() external payable {}

}
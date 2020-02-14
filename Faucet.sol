// Version of Solidity
pragma solidity 0.6.1;

// Creating the faucet account
// Can send Ether to any account that calls the withdraw function
contract Faucet {

    // Send an amount of Ether to anyone that asks
    function withdraw(uint256 withdraw_amount) public {
        
        // Require the amount of Ether requested is less than .1 Ether
        require (withdraw_amount <= 100000000000000000);

        // Send the Ether to the account that asked for it
        msg.sender.transfer(withdraw_amount);
    }

    // Accept any incoming amount
    function () external payable { }

}
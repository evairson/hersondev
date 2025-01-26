// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Guestbook {
    struct Message {
        address sender;
        string message;
        uint256 timestamp;
    }

    Message[] public messages;

    event NewMessage(address indexed sender, string message, uint256 timestamp);

    function leaveMessage(string memory _message) public {
        messages.push(Message(msg.sender, _message, block.timestamp));
        emit NewMessage(msg.sender, _message, block.timestamp);
    }

    function getMessages() public view returns (Message[] memory) {
        return messages;
    }
}

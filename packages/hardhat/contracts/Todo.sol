//SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.3;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';

contract Todo is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _todoItemIds;

    string private greeting;

    // address payable owner;

    constructor() {
        // owner = payable(msg.sender);
    }

    struct TodoItem {
        uint256 todoId;
        string text;
        address user;
        uint256 createdAt;
        bool completed;
    }

    TodoItem[] todos;

    mapping(uint256 => TodoItem) private idToTodoItem;

    event TodoItemCreated(
        uint256 indexed todoItemId,
        string text,
        address user,
        uint256 createdAt,
        bool completed
    );

    function createTodo(string memory _text) public {
        _todoItemIds.increment();
        uint256 todoItemId = _todoItemIds.current();

        todos.push(
            idToTodoItem[todoItemId] = TodoItem(
                todoItemId,
                _text,
                msg.sender,
                block.timestamp,
                false
            )
        );

        emit TodoItemCreated(todoItemId, _text, msg.sender, block.timestamp, false);
    }

    function getTodos() public view returns (TodoItem[] memory) {
        return todos;
    }

    // function completeTodo() public payable {}
}

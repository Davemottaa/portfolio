// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DaviToken {
    string public name = "DaviMota";
    string public symbol = "DAVWEB3";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    mapping(address => uint256) public lastRequest;

    uint256 public constant FAUCET_AMOUNT = 5 * 10 ** 18;
    uint256 public constant REQUEST_INTERVAL = 1 days;

    address public owner;

    constructor() {
        owner = msg.sender;
        totalSupply = 1_000_000 * 10 ** uint256(decimals);
        balanceOf[owner] = totalSupply;
        emit Transfer(address(0), owner, totalSupply);
    }

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    function transfer(address to, uint256 value) public returns (bool) {
        require(balanceOf[msg.sender] >= value, "Saldo insuficiente");
        _transfer(msg.sender, to, value);
        return true;
    }

    function approve(address spender, uint256 value) public returns (bool) {
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) public returns (bool) {
        require(balanceOf[from] >= value, "Saldo insuficiente");
        require(allowance[from][msg.sender] >= value, "Sem permissao suficiente");
        allowance[from][msg.sender] -= value;
        _transfer(from, to, value);
        return true;
    }

    function _transfer(address from, address to, uint256 value) internal {
        require(to != address(0), "Endereco invalido");
        balanceOf[from] -= value;
        balanceOf[to] += value;
        emit Transfer(from, to, value);
    }

    function requestTokens() public {
        require(balanceOf[owner] >= FAUCET_AMOUNT, "Faucet sem saldo");
        require(block.timestamp >= lastRequest[msg.sender] + REQUEST_INTERVAL, "Espere 24h");

        lastRequest[msg.sender] = block.timestamp;
        _transfer(owner, msg.sender, FAUCET_AMOUNT);
    }

    function timeUntilNextRequest(address user) external view returns (uint256) {
        if (block.timestamp >= lastRequest[user] + REQUEST_INTERVAL) {
            return 0;
        } else {
            return (lastRequest[user] + REQUEST_INTERVAL) - block.timestamp;
        }
    }
}

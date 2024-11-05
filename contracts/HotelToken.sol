// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HotelToken is ERC20, Ownable {
    uint256 public constant RATE = 1000; // 1 ETH = 1000 HTK

    // 构造函数，设置代币名称和符号，并给合约所有者初始代币
    constructor() ERC20("HotelToken", "HTK") Ownable(msg.sender) {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    // 只有合约所有者可以调用 mint 函数
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // 购买代币的函数，支付 ETH 获得 HotelToken
    function buyTokens() public payable {
        require(msg.value > 0, "Must send ETH to buy tokens");
        uint256 tokensToMint = msg.value * RATE;
        _mint(msg.sender, tokensToMint);
    }

    // 提取合约中的 ETH，只有所有者可以调用
    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}

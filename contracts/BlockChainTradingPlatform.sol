// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// internal import for nft openzeppelin
import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";
contract BlockChainTradingPlatform is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    address payable owner;

    mapping(uint256 => MarketItem) private idMarketItem;

    
}

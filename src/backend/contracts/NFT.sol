// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFT is ERC721URIStorage {
    string public uriPrefix = '';
    string public uriSuffix = '.json';

    uint public tokenCount;

    constructor() ERC721("Skoodle Skulls", "SKS") {}

    function mint(string memory _tokenURI) external returns(uint) {
        tokenCount += 1;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
        return(tokenCount);
    }

    // https://github.com/hashlips-lab/nft-erc721-collection/blob/main/smart-contract/contracts/YourNftToken.sol
    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), 'ERC721Metadata: URI query for nonexistent token');

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
            ? string(abi.encodePacked(currentBaseURI, Strings.toString(_tokenId), uriSuffix))
            : '';
    }
}
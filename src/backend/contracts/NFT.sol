// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721URIStorage, Ownable, IERC2981 {
    string public uriPrefix = '';
    string public uriSuffix = '.json';

    uint public tokenCount;
    uint256 public total_supply;
    
    address private _recipient;

    // Optional: Set _recipient in constructor directly
    constructor() ERC721("Skoodle Skulls", "SKS")
    {
        total_supply = 4000;
        _recipient = owner();
    }

    function mint() external returns(uint) {
        tokenCount += 1;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, tokenURI(tokenCount));
        return(tokenCount);
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), 'ERC721Metadata: URI query for nonexistent token');
        require(_tokenId >= 1 && _tokenId <= total_supply, "Metadata: URI query for nonexistent token");

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
            ? string(abi.encodePacked(currentBaseURI, Strings.toString(_tokenId), uriSuffix))
            : '';
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmNmBHVHMHt8kvT2VtPDjZ6sjGjyjJ5LBsr1DhnLvzTZss/";
    }
    
    function baseTokenURI() public pure returns (string memory) {
        return _baseURI();
    }

    // Maintain flexibility to modify royalties recipient (could also add basis points).
    function _setRoyalties(address newRecipient) internal {
        require(newRecipient != address(0), "Royalties: new recipient is the zero address");
        _recipient = newRecipient;
    }

    function setRoyalties(address newRecipient) external onlyOwner {
        _setRoyalties(newRecipient);
    }

    // EIP2981 standard royalties return.
    function royaltyInfo(uint256 _tokenId, uint256 _salePrice) external view override
        returns (address receiver, uint256 royaltyAmount)
    {
        return (_recipient, (_salePrice * 500) / 10000); // 5% Royalties
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, IERC165) returns (bool) {
        return (interfaceId == type(ERC721URIStorage).interfaceId || interfaceId == type(IERC2981).interfaceId || super.supportsInterface(interfaceId));
    }    

    function contractURI() public pure returns (string memory) {
        return "ipfs://QmRQZFhYBFXmCWNqaVctQLYTczvPnYwyWqVTtPqB5RwApN/";
    }

    function totalSupply() public view returns (uint256) {
        return tokenCount;
    }
}
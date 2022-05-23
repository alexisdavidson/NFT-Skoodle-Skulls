import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Navigation from './Navbar';
import Top from './Top';
import About from './About';
import Family from './Family';
import BestMoments from './BestMoments';
import Faq from './Faq';
import Footer from './Footer';
import Mint from './Mint';

import { useState } from 'react'
import { ethers } from 'ethers'
import { Container, Row, Col } from 'react-bootstrap'

import MarketplaceAbi from '../contractsData/Marketplace.json'
import MarketplaceAddress from '../contractsData/Marketplace-address.json'
import NFTAbi from '../contractsData/NFT.json'
import NFTAddress from '../contractsData/NFT-address.json'
 
function App() {
  const [loading, setLoading] = useState(false)
  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState({})
  const [marketplace, setMarketplace] = useState({})

  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])

    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const signer = provider.getSigner()

    loadContracts(signer)
  }

  const loadContracts = async (signer) => {
    const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
    setMarketplace(marketplace)
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    setLoading(false)
  }
  return (
    <BrowserRouter>
      <div className="App" style={{
        backgroundColor: "#090f25"
      }}>
        <Container fluid="sm" className="pt-3">
          <Row>
            <Col>
              <Navigation web3Handler={web3Handler} account={account} />
              <Top />
              <Mint web3Handler={web3Handler} account={account} />
              {/* <About />
              <BestMoments />
              <Family />
              <Faq /> */}
            </Col>
          </Row>
        </Container>
        <div style={{
          backgroundColor: "#0d1730"
        }}>
          <Container fluid="sm" className=" px-3 pt-3">
            <Footer />
          </Container>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

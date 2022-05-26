import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Navigation from './Navbar';
import Top from './Top';
import Stats from './Stats';
import Gallery from './Gallery';
import About from './About';
import Family from './Family';
import BestMoments from './BestMoments';
import Faq from './Faq';
import Footer from './Footer';
import Mint from './Mint';

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { Container, Row, Col } from 'react-bootstrap'

import NFTAbi from '../contractsData/NFT.json'
import NFTAddress from '../contractsData/NFT-address.json'
 
function App() {
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState({})
  const [tokenCount, setTokenCount] = useState(0)
  const [volumeTraded, setVolumeTraded] = useState(0)

  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    loadContracts(signer)
  }

  const loadContracts = async (signer) => {
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    loadStats(nft)
  }
  
  const loadStats = async (nft) => {
    console.log("Loading stats...")
    
    const tokenCountTemp = await nft.tokenCount()
    console.log("Token count: " + tokenCountTemp)

    setTokenCount(tokenCountTemp)
    setVolumeTraded('3.518 ETH')
    setLoading(false)
}

  return (
    <BrowserRouter>
        <div className="App" style={{
          backgroundColor: "black"
        }}>
          <Container fluid="sm" className="pt-3">
            <Row>
              <Col>
                <Navigation web3Handler={web3Handler} account={account} />
                  <div>
                    <Top />
                    {loading == false ?
                      <Stats tokenCount={tokenCount.toString()} volumeTraded={volumeTraded.toString()} />
                    : 
                      <Stats tokenCount={'?'} volumeTraded={'?'} />
                    }
                    <Gallery />
                    <Mint web3Handler={web3Handler} nft={nft} account={account} />
                  </div>
              </Col>
            </Row>
          </Container>
          <div style={{
            backgroundColor: "black"
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

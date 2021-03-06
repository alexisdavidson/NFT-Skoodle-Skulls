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
import Roadmap from './Roadmap';
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
  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState({})
  const [price, setPrice] = useState(0)
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(true)

  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    loadContracts(signer)
  }

  const fetchOpenseaStats = async () => {
      const urlApi = 'https://testnets-api.opensea.io/api/v1' // testnet
      // const urlApi = 'https://api.opensea.io/api/v1' // mainnet
      const nameCollection = 'skoodle-skulls'
      const finalUrl = `${urlApi}/collection/${nameCollection}`
      console.log("Sending api call for stats to " + finalUrl)

      let stats = await fetch(finalUrl)
      .then((res) => res.json())
      .then((res) => {
        return res.collection.stats
      })
      .catch((e) => {
        console.error(e)
        console.error('Could not talk to OpenSea')
        return null
      })

      console.log("Finished loading stats")
      console.log(stats)

      setStats(stats)
      setLoading(false)
  }
    
  const loadPrice = async(nft) => {
    console.log("Setting price...")
    const priceToSet = ethers.utils.formatEther(await nft.getPrice())
    setPrice(priceToSet)
    console.log("Set price to " + priceToSet)
}

  const loadContracts = async (signer) => {
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    loadPrice(nft)
  }
  
  useEffect(() => {
    fetchOpenseaStats()
  }, [])

  return (
    <BrowserRouter>
        <div className="App" >
          <Container fluid="sm" className="pt-3">
            <Row>
              <Col>
                <Navigation web3Handler={web3Handler} account={account} />
                  <div>
                    <Top />
                    <Stats stats={stats} />
                    <Gallery />
                    <Mint web3Handler={web3Handler} nft={nft} account={account} price={price} stats={stats} />
                    <Roadmap />
                    <Faq />
                  </div>
              </Col>
            </Row>
          </Container>
          <div>
            <Container fluid="sm" className=" px-3 pt-3">
              <Footer />
            </Container>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;

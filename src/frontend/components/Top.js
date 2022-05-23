import { Image, Row, Col } from 'react-bootstrap'
import skull from './images/skull.png'
import skull1 from './images/skulls/1.png'
import skull2 from './images/skulls/2.png'
import skull3 from './images/skulls/3.png'
import skull4 from './images/skulls/4.png'
import logo from './images/logo.png'

const Top = () => {
    return (
        <Row>
            <Row className="mt-5 p-3">
                <Col className="col-12 col-lg-6 text-light">
                    <Row className="my-4">
                        <Image src={logo} className="d-flex align-items-start" style={{
                            width: "300px"
                        }}/>
                    </Row>
                    <Row className="my-5">
                        <p style={{
                            textAlign: "left",
                            fontSize: "20px"
                        }}>
                            4,000 unique collectible Skulls with proof of ownership stored on the Ethereum blockchain. Skoodle Skulls are "Non-Fungible Tokens" on Ethereum, and each Skoodle Skull was created as an ERC-721 standard token, that powers most digital art and collectibles.
                        </p>
                    </Row>
                </Col>
                <Col className="col-12 col-lg-6">
                    <img src={skull} alt="Presentation image" className="rounded" style={{
                            border: "20px solid #0d1730"
                        }}/>
                </Col>
            </Row>
            <Row className="p-3 text-light" style={{
                            fontSize: "25px"
            }}>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <div className="mx-4 py-4" style={{
                        background: "#0d1730"
                    }}>
                        <h3>Items</h3>
                        <h2>100</h2>
                    </div>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <div className="mx-4 py-4" style={{
                        background: "#0d1730"
                    }}>
                        <h3>Owners</h3>
                        <h2>0</h2>
                    </div>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <div className="mx-4 py-4" style={{
                        background: "#0d1730"
                    }}>
                        <h3>Floor</h3>
                        <h2>0.000 ETH</h2>
                    </div>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <div className="mx-4 py-4" style={{
                        background: "#0d1730"
                    }}>
                        <h3>Volume Traded</h3>
                        <h2>0.000 ETH</h2>
                    </div>
                </Col>
            </Row>
            <Row className="p-3" style={{
                            fontSize: "25px"
            }}>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <img src={skull1} alt="Presentation image" className="rounded" style={{
                            border: "20px solid #0d1730"
                        }}/>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <img src={skull2} alt="Presentation image" className="rounded" style={{
                            border: "20px solid #0d1730"
                        }}/>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <img src={skull3} alt="Presentation image" className="rounded" style={{
                            border: "20px solid #0d1730"
                        }}/>
                </Col>
                <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                    <img src={skull4} alt="Presentation image" className="rounded" style={{
                            border: "20px solid #0d1730"
                        }}/>
                </Col>
            </Row>
        </Row>
    );
}
export default Top
import { Row, Col } from 'react-bootstrap'

const Stats = ({tokenCount}) => {

    return (
        <Row className="p-3 text-light" style={{
                        fontSize: "25px"
        }}>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <div className="mx-4 py-4" style={{
                    background: "black",
                    border: "3px solid white"
                }}>
                    <h3>Items</h3>
                    <h2>4,000</h2>
                </div>
            </Col>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <div className="mx-4 py-4" style={{
                    background: "black",
                    border: "3px solid white"
                }}>
                    <h3>Owners</h3>
                    <h2>{ tokenCount }</h2>
                </div>
            </Col>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <div className="mx-4 py-4" style={{
                    background: "black",
                    border: "3px solid white"
                }}>
                    <h3>Mint Price</h3>
                    <h2>0.07 ETH</h2>
                </div>
            </Col>
            <Col className="col-12 col-lg-6 col-xl-3 mb-4">
                <div className="mx-4 py-4" style={{
                    background: "black",
                    border: "3px solid white"
                }}>
                    <h3>Volume Traded</h3>
                    <h2>2.518 ETH</h2>
                </div>
            </Col>
        </Row>
    );
}
export default Stats
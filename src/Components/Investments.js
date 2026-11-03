import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

const Investments = () => {
    return (
        <div className='Dashboardarea' >
            <Container>
                <Row>
                    <Col md={4}>
                        <div className='box'>
                            <div className='row-200'>
                                <div> <img src='total.png' /> </div>
                                <div>
                                    <div className='total-tittle'>Total Investd Amount</div>
                                    <div className='paisa-200'>$15,000</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='box-1'>
                            <div className='row-200-1'>
                                <div> <img src='number.png' /> </div>
                                <div>
                                    <div className='total-tittle-1'>Number Of Investments</div>
                                    <div className='paisa-200-1'>1,200</div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className='box-2'>
                            <div className='row-200-2'>
                                <div> <img src='rate.png' /> </div>
                                <div>
                                    <div className='total-tittle-2'>Rate of Return</div>
                                    <div className='paisa-200-2'>$15,000</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className='Yearly'><h5>Yearly Total Investment</h5></div>
                        <div className='box1'></div>
                    </Col>
                    <Col md={6}>
                        <div className='Yearly'><h5>Monthly Revenue</h5></div>
                        <div className='box1'></div>
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <Row>
                            <Col>
                                <div className='MyInvestment' >
                                    <h5>My Investment</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='xyzbox'>
                                    <Row>
                                        <Col md={2}>
                                            <img src='apple.png' />
                                        </Col>
                                        <Col md={4}>
                                            <div>
                                                <div className='apple-tittle'>Apple Store</div>
                                                <div className='E-commerce'>E-commerce marketplace</div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div>
                                                <div className='apple-paisa'>$54,000</div>
                                                <div className='apple-value'>Envestment Value</div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div>
                                                <div className='apple-percentage'>+16%</div>
                                                <div className='apple-return'>return Value</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='xyzbox'>

                                    <Row>
                                        <Col md={2}>
                                            <img src='google.png' />
                                        </Col>
                                        <Col md={4}>
                                            <div className='apple-tittle'>Apple Store</div>
                                            <div className='E-commerce'>E-commerce marketplace</div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='apple-paisa'>$25,300</div>
                                            <div className='apple-value'>Envestment Value</div>
                                        </Col>
                                        <Col md={3}>
                                            <div>
                                                <div className='samsung-percentage'>-4%</div>
                                                <div className='apple-return'>return Value</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='xyzbox'>
                                    <Row>
                                        <Col md={2}>
                                            <img src='telsa.png' />
                                        </Col>
                                        <Col md={4}>
                                            <div className='apple-tittle'>Tesla Motors</div>
                                            <div className='E-commerce'>Electri venicies</div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='apple-paisa'>$8,200</div>
                                            <div className='apple-value'>Envestment Value</div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='apple-percentage'>+25%</div>
                                            <div className='apple-return'>return Value</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5}>
                        <Row>
                            <Col>
                                <div className='trending-tittle'><h5>Treding Stock</h5></div>
                            </Col>
                            <Col>
                                <div className='Treding-stock-1'>
                                    <Table>
                                        <tr>
                                            <th className='th'>SL No</th>
                                            <th className='th'>Name</th>
                                            <th className='th'>Price</th>
                                            <th className='th'>Return</th>
                                        </tr>
                                        <tr>
                                            <td className='td'>01.</td>
                                            <td className='td'>Trivago</td>
                                            <td className='td'>$520</td>
                                            <td className='td-color'>+5%</td>
                                        </tr>
                                        <tr>
                                            <td className='td'>02.</td>
                                            <td className='td'>Canon</td>
                                            <td className='td'>$480</td>
                                            <td className='td-color'>+10%</td>
                                        </tr>
                                        <tr>
                                            <td className='td'>03.</td>
                                            <td className='td'>Uber food</td>
                                            <td className='td'>$350</td>
                                            <td className='td-color-1'>+3%</td>
                                        </tr>
                                        <tr>
                                            <td className='td'>04.</td>
                                            <td className='td'>Nokia</td>
                                            <td className='td'>$940</td>
                                            <td className='td-color'>+2%</td>
                                        </tr>
                                        <tr>
                                            <td className='td'>05.</td>
                                            <td className='td'>Tiktok</td>
                                            <td className='td'>$670</td>
                                            <td className='td-color-1'>-12%</td>
                                        </tr>
                                    </Table>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container >

        </div >
    )
}

export default Investments
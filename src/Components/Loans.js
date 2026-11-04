import React from 'react'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'

const Loans = () => {
    return (
        <div className='Dashboardarea'>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className='personal-loan'>
                            <div className='personal-row'>
                                <div className='personal-img'><img src="personal.png"  alt=''/> </div>
                                <div>
                                    <div className='personal-loan-tittle'>Personal Loans</div>
                                    <div className='personal-loan-paisa' >$55,000</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='personal-loan'>
                            <div className='personal-row'>
                                <div className='personal-img'>  <img src="corporate.png" alt=''/> </div>
                                <div> <div className='personal-loan-tittle'>Corcpate Loans</div>
                                    <div className='personal-loan-paisa' >$100,000</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='personal-loan'>
                            <div className='personal-row'>
                                <div className='personal-img'>  <img src="business.png" alt=''/> </div>
                                <div> <div className='personal-loan-tittle'>Business Loans</div>
                                    <div className='personal-loan-paisa' >$500,000</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='personal-loan'>
                            <div className='personal-row'>
                                <div className='personal-img'>  <img src="custom.png" alt='' /> </div>
                                <div> <div className='personal-loan-tittle'>Personal Loans</div>
                                    <div className='personal-loan-paisa' >Choose Money</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className='active-loans-overview'><h5>Active Loans Overviews </h5></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='active-loans-overview-box'>
                            <Table>
                                <tr>
                                    <th className='sl-no'>SL No</th>
                                    <th>Loan Money</th>
                                    <th>Left to Repay</th>
                                    <th>Duration</th>
                                    <th>Interest</th>
                                    <th>Installment</th>
                                    <th>Repay</th>
                                </tr>
                                <tr>
                                    <td className='td-1'>01.</td>
                                    <td className='td-1'>$100,000</td>
                                    <td className='td-1'>$40,500</td>
                                    <td className='td-1'>8 months</td>
                                    <td className='td-1'>12%</td>
                                    <td className='td-1'>$2,000 / month</td>
                                    <td>  <Button variant="outline-primary">Repay</Button>
                                    </td>
                                </tr>

                                <tr>
                                    <td className='td-1'>02.</td>
                                    <td className='td-1'>$500,000</td>
                                    <td className='td-1'>$25,000</td>
                                    <td className='td-1'>36 months</td>
                                    <td className='td-1'>10%</td>
                                    <td className='td-1'>$8,000 / month</td>
                                    <td>  <Button variant="outline-primary">Repay</Button>
                                    </td>
                                </tr>

                                <tr>
                                    <td className='td-1'>03.</td>
                                    <td className='td-1'>$900,000</td>
                                    <td className='td-1'>$40,500</td>
                                    <td className='td-1'>12 months</td>
                                    <td className='td-1'>12%</td>
                                    <td className='td-1'>$5,000 / month</td>
                                    <td>  <Button variant="outline-primary">Repay</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='td-1'>04.</td>
                                    <td className='td-1'>$50,000</td>
                                    <td className='td-1'>$40,500</td>
                                    <td className='td-1'>25 months</td>
                                    <td className='td-1'>5%</td>
                                    <td className='td-1'>$2,000 / month</td>
                                    <td>  <Button variant="outline-primary">Repay</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='td-1'>05.</td>
                                    <td className='td-1'>$50,000</td>
                                    <td className='td-1'>$40,500</td>
                                    <td className='td-1'>5 months</td>
                                    <td className='td-1'>16%</td>
                                    <td className='td-1'>$10,000 / month</td>
                                    <td>  <Button variant="outline-primary">Repay</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='td-1'>06.</td>
                                    <td className='td-1'>$80,000</td>
                                    <td className='td-1'>$25,500</td>
                                    <td className='td-1'>14 months</td>
                                    <td className='td-1'>8%</td>
                                    <td className='td-1'>$2,000 / month</td>
                                    <td>  <Button variant="outline-primary">Repay</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='td-1'>07.</td>
                                    <td className='td-1'>$12,000</td>
                                    <td className='td-1'>$5,500</td>
                                    <td className='td-1'>9 months</td>
                                    <td className='td-1'>13%</td>
                                    <td className='td-1'>$500 / month</td>
                                    <td>  <Button variant="outline-primary">Repay</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='td-1'>08.</td>
                                    <td className='td-1'>$160,000</td>
                                    <td className='td-1'>$100,800</td>
                                    <td className='td-1'>3 months</td>
                                    <td className='td-1'>12%</td>
                                    <td className='td-1'>$9,000 / month</td>
                                    <td>  <Button variant="outline-primary">Repay</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='td-2'>Total</td>
                                    <td className='td-2'>$100,000</td>
                                    <td className='td-2'>$40,500</td>
                                    <td className='td-1'></td>
                                    <td className='td-1'></td>
                                    <td className='td-2'>$2,000 / month</td>
                                    <td>
                                    </td>
                                </tr>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Loans
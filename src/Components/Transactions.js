import { Button, Col, Container, Row, Table, Tab, Tabs,  } from 'react-bootstrap'

const Transactions = () => {
    const mycards = [
        {
            "balance": "$7,756",
            "cardHolder": "Eddy Cusuma",
            "valid": "12/22",
            "number": "3778******123"
        }
    ]

    const mycards1 = [
        {
            "balance": "$7,756",
            "cardHolder": "Eddy Cusuma",
            "valid": "12/22",
            "number": "3778******123"
        }
    ]
    return (
        <div className='Dashboardarea' >
            <Container>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col>My Card</Col>
                            <Col> + Add card</Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='maincard'>
                                    {
                                        mycards.map((card, index) => {
                                            return (
                                                <div className='card-1'>
                                                    <div className='row'>
                                                        <div><div className="bal">Balance</div>
                                                            <div className='rupya' >{card.balance}</div></div>
                                                        <div className='chip'>
                                                        </div>
                                                    </div>
                                                    <div className='row1'>
                                                        <div><div className='holder'>CARD HOLDER</div>
                                                            <div className='eddy'>{card.cardHolder}</div>
                                                        </div>

                                                        <div><div className='valid'>VALID</div>
                                                            <div className='no'>{card.valid}</div>
                                                        </div>
                                                    </div>
                                                    <div className='row2'>
                                                        <div><div className='number'>{card.number}</div></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                            <Col>
                                <div className='maincard'>
                                    {
                                        mycards1.map((card, index) => {
                                            return (
                                                <div className='card-2'>
                                                    <div className='row-1'>
                                                        <div><div className="bal-1">Balance</div>
                                                            <div className='rupya-1' >{card.balance}</div></div>
                                                        <div className='chip-1'>
                                                        </div>
                                                    </div>
                                                    <div className='row1-1'>
                                                        <div><div className='holder-1'>CARD HOLDER</div>
                                                            <div className='eddy-1'>{card.cardHolder}</div>
                                                        </div>

                                                        <div>
                                                            <div className='valid-1'>VALID</div>
                                                            <div className='no1'>{card.valid}</div>
                                                        </div>
                                                    </div>
                                                    <div className='row2-1'>
                                                        <div><div className='number-1'>{card.number}</div></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className='tabs'>
                            <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Home">
                                <div className='table-box'>
                                    <Table>
                                        <tr>
                                            <th className='Descripition'>Descripition</th>
                                            <th className='Descripition'>Transaction Id</th>
                                            <th className='Descripition'>Type</th>
                                            <th className='Descripition'>Card</th>
                                            <th className='Descripition'>Date</th>
                                            <th className='Descripition'>Amount</th>
                                            <th className='Descripition'>Receipt</th>
                                        </tr>
                                        <tr>
                                            <td className='th-2'> <img src='top-arrow.png' />Spotify Desscripition</td>
                                            <td className='th-2'>#12548796</td>
                                            <td className='th-2'>Shopping</td>
                                            <td className='th-2'>1234 ****</td>
                                            <td className='th-2'>28 jan, 12.30 AM</td>
                                            <td className='th-3'>-$2,500</td>
                                            <td>  <Button variant="outline-primary">Download</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='th-2'> <img src='down-arrow.png' />Freepik Sale</td>
                                            <td className='th-2'>#12548796</td>
                                            <td className='th-2'>Transfer</td>
                                            <td className='th-2'>1234 ****</td>
                                            <td className='th-2'>25 jan, 10.40 PM</td>
                                            <td className='th-4'>+$750</td>
                                            <td>  <Button variant="outline-primary">Download</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='th-2'> <img src='top-arrow.png' />Moblie Service</td>
                                            <td className='th-2'>#12548796</td>
                                            <td className='th-2'>Service</td>
                                            <td className='th-2'>1234 ****</td>
                                            <td className='th-2'>20 jan, 10.40 PM</td>
                                            <td className='th-3'>-$150</td>
                                            <td>  <Button variant="outline-primary">Download</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='th-2'> <img src='top-arrow.png' />Wilson</td>
                                            <td className='th-2'>#12548796</td>
                                            <td className='th-2'>Transfer</td>
                                            <td className='th-2'>1234 ****</td>
                                            <td className='th-2'>15 jan, 03.29 PM</td>
                                            <td className='th-3'>-$2,500</td>
                                            <td>  <Button variant="outline-primary">Download</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='th-2'> <img src='down-arrow.png' />Emilly</td>
                                            <td className='th-2'>#12548796</td>
                                            <td className='th-2'>Transfer</td>
                                            <td className='th-2'>1234 ****</td>
                                            <td className='th-2'>14 Jan , 10. 40 PM</td>
                                            <td className='th-4'>+$2,500</td>
                                            <td>  <Button variant="outline-primary">Download</Button>
                                            </td>
                                        </tr>
                                    </Table>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                Tab content for Profile
                            </Tab>
                            <Tab eventKey="contact" title="Contact" disabled>
                                Tab content for Contact
                            </Tab>
                        </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Transactions
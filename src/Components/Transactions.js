import { Button, Col, Container, Row, Table, Tab, Tabs, } from 'react-bootstrap'

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

    const Spotifys = [
        {
            "descripition": "Spotiify Description",
            "transaction": "# 12548796",
            "type": "Shopping",
            "card": "1234 **** ****",
            "date": "28 jan , 12.30 AM",
            "amount": "$-$2,500"
        }
    ]
    const Freepiks = [
        {
            "descripition": "Freepik  Sale ",
            "transaction": "# 12548796",
            "type": "Transfer",
            "card": "1234 **** ****",
            "date": "25 jan , 10.30 PM",
            "amount": "$-$750"

        }
    ]
    const Moblies = [
        {
            "descripition": "Moblie Service",
            "transaction": "# 12548796",
            "type": "Service",
            "card": "1234 **** ****",
            "date": "15 jan , 03.30 AM",
            "amount": "$-$750"

        }
    ]
    const Wilsons = [
        {
            "descripition": "Wilson",
            "transaction": "# 12548796",
            "type": "Transer",
            "card": "1234 **** ****",
            "date": "28 jan , 10.30 AM",
            "amount": "$-$750"

        }
    ]
    const Emillys = [
        {
            "descripition": "Emilly",
            "transaction": "# 12548796",
            "type": "Transfer",
            "card": "1234 **** ****",
            "date": "28 jan , 08.30 AM",
            "amount": "$-$750"
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
                                            <thead>
                                                <tr>
                                                    <th className='Descripition'>Descripition</th>
                                                    <th className='Descripition'>Transaction Id</th>
                                                    <th className='Descripition'>Type</th>
                                                    <th className='Descripition'>Card</th>
                                                    <th className='Descripition'>Date</th>
                                                    <th className='Descripition'>Amount</th>
                                                    <th className='Descripition'>Receipt</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Spotifys.map((Spotify, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className='th-2'> <img src='top-arrow.png' alt='' /> {Spotify.descripition}</td>
                                                                <td className='th-2'>{Spotify.transaction}</td>
                                                                <td className='th-2'>{Spotify.type}</td>
                                                                <td className='th-2'>{Spotify.card}</td>
                                                                <td className='th-2'>{Spotify.date}</td>
                                                                <td className='th-3'>{Spotify.amount}</td>
                                                                <td>  <Button variant="outline-primary">Download</Button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                            <tbody>
                                                {
                                                    Freepiks.map((freepik, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className='th-2'> <img src='down-arrow.png' alt='' /> {freepik.descripition}</td>
                                                                <td className='th-2'>{freepik.transaction}</td>
                                                                <td className='th-2'>{freepik.type}</td>
                                                                <td className='th-2'>{freepik.card}</td>
                                                                <td className='th-2'>{freepik.date}</td>
                                                                <td className='th-4'>{freepik.amount}</td>
                                                                <td>
                                                                    <Button variant="outline-primary">Download</Button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                            <tbody>
                                                {
                                                    Moblies.map((moblie, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className='th-2'> <img src='top-arrow.png' alt='' /> {moblie.descripition}</td>
                                                                <td className='th-2'>{moblie.transaction}</td>
                                                                <td className='th-2'>{moblie.type}</td>
                                                                <td className='th-2'>{moblie.card}</td>
                                                                <td className='th-2'>{moblie.date}</td>
                                                                <td className='th-3'>{moblie.amount}</td>
                                                                <td>
                                                                    <Button variant="outline-primary">Download</Button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    )
                                                }
                                            </tbody>
                                            <tbody>
                                                {
                                                    Wilsons.map((wilson, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className='th-2'> <img src='top-arrow.png' alt='' /> {wilson.descripition}</td>
                                                                <td className='th-2'>{wilson.transaction}</td>
                                                                <td className='th-2'>{wilson.type}</td>
                                                                <td className='th-2'>{wilson.card}</td>
                                                                <td className='th-2'>{wilson.date}</td>
                                                                <td className='th-3'>{wilson.amount}</td>
                                                                <td>  <Button variant="outline-primary">Download</Button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                            <tbody>
                                                {
                                                    Emillys.map((emilly, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className='th-2'> <img src='down-arrow.png' alt='' /> {emilly.descripition}</td>
                                                                <td className='th-2'>{emilly.transaction}</td>
                                                                <td className='th-2'>{emilly.card}</td>
                                                                <td className='th-2'>{emilly.type}</td>
                                                                <td className='th-2'>{emilly.date}</td>
                                                                <td className='th-4' >{emilly.amount}</td>
                                                                <td>  <Button variant="outline-primary">Download</Button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>

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
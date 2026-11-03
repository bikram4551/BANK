import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const mycards = [
    {
        "balance": "$7,756",
        "cardHolder": "Eddy Cusuma",
        "valid": "12/22",
        "number": "3778******123"
    }
]
const Accounts = () => (
    <div className='Dashboardarea'>
        <Container>
            <Row>
                <Col md={3}>
                    <div className='card-101'>
                        <div className='row-101'>
                            <div className='img-101'>  <img src="paisa.png" /> </div>
                            <div> <div className='income-101'>My Balance</div>
                                <div className='paisa-101' >$12,750</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='card-101'>
                        <div className='row-101'>
                            <div className='img-101'>  <img src="hand.png.png" /> </div>

                            <div> <div className='income-101'>Income</div>
                                <div className='paisa-101' >$5,600</div>
                            </div>

                        </div>
                    </div>
                </Col>

                <Col md={3}>
                    <div className='card-101'>
                        <div className='row-101'>
                            <div className='img-101'>  <img src="expense.png" /> </div>

                            <div> <div className='income-101'>Expense</div>
                                <div className='paisa-101' >3,460</div>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='card-101'>
                        <div className='row-101'>
                            <div className='img-101'>  <img src="totalsaving.png" /> </div>

                            <div> <div className='income-101'>total saving</div>
                                <div className='paisa-101' >$7,920</div>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Row>
                        <Col>
                            <div className='lastt'>Last Transaction</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='card-102'>
                                <div className='row-102'>
                                    <div className='img-102'>  <img src="spotifyy.png" /> </div>

                                    <div> <div className='spotifyy'>Spotify Subscription </div>
                                        <div>25 Jun 2025 </div>
                                    </div>
                                    <div className='shopingg'>shopping</div>
                                    <div className='number-102'>1234****</div>
                                    <div className='pending'>pending</div>
                                    <div className='paisa-102'>-$150</div>

                                </div>

                                <div className='row-102'>
                                    <div className='img-102'>  <img src="moblie.png" /> </div>

                                    <div> <div className='moblieservice'> Moblie Service </div>
                                        <div>25 Jun 2025 </div>
                                    </div>
                                    <div className='service'>Service</div>
                                    <div className='number-103'>1234****</div>
                                    <div className='pending'>Completed</div>
                                    <div className='paisa-102'>-$340</div>

                                </div>
                                <div className='row-102'>
                                    <div className='img-102'>  <img src="emilly.png" /> </div>

                                    <div> <div className='Emilly'>Emilly wilson </div>
                                        <div>25 Jun 2025 </div>
                                    </div>
                                    <div className='transfer'>Transfer</div>
                                    <div className='number-104'>1234****</div>
                                    <div className='completed'>Completed</div>
                                    <div className='paisa-104'>+$150</div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} className='align-top'>
                    <Row>
                        <Col className='title-my-card'>
                            <div> My Card
                            </div>
                        </Col>
                        <Col className='title-my-card'>
                            see all
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <div className='maincard'>
                                    {
                                        mycards.map((card, index) => {
                                            return (
                                                <div className='card-120'>
                                                    <div className='row-120'>
                                                        <div><div className='balance-120'>Balance</div>
                                                            <div className='rupya-120' >{card.balance}</div></div>
                                                        <div className='chip-120'>
                                                        </div>
                                                    </div>
                                                    <div className='row1-120'>
                                                        <div><div className='holder-120'>CARD HOLDER</div>
                                                            <div className='eddy'>{card.cardHolder}</div>
                                                        </div>

                                                        <div><div className='valid-120'>VALID</div>
                                                            <div className='no-120'>{card.valid}</div>
                                                        </div>
                                                    </div>
                                                    <div className='row2-120'>
                                                        <div><div className='number-120'>{card.number}</div></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </Col>
                    </Row>

                </Col>

            </Row>

        </Container>
    </div>
)

export default Accounts



import { Col, Container, Row } from 'react-bootstrap'



const Dashboard = () => {


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
        <div className='Dashboardarea'>
            <Container>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col className='tittle'>My Card</Col>
                            <Col className='seeall'>All</Col>
                        </Row>
                        <Row>
                            <Col md={6}>
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
                            <Col md={6}>
                                <div className='maincard'>
                                    {
                                        mycards1.map((card, index) => {
                                            return (
                                                <div className='card-2'>
                                                    <div className='row'>
                                                        <div><div className="bal-1">Balance</div>
                                                            <div className='rupya-1' >{card.balance}</div></div>
                                                        <div className='chip'>
                                                        </div>
                                                    </div>
                                                    <div className='row1'>
                                                        <div><div className='holder-1'>CARD HOLDER</div>
                                                            <div className='eddy-1'>{card.cardHolder}</div>
                                                        </div>

                                                        <div><div className='valid-1'>VALID</div>
                                                            <div className='no-1'>{card.valid}</div>
                                                        </div>
                                                    </div>
                                                    <div className='row2'>
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
                    <Col md={4}>
                        <div mainrt>
                            <div className='rt'>
                                <span> Recent Transaction </span>
                            </div>
                            <div className='card-3'>
                                <div className='row1-2'>
                                    <div className='deposit-img'> <img src="deposit.png" alt='deposit'/> </div>
                                    <div> <div className='deposit-tittle'>Deposit from my card</div>
                                        <div className='jan'>28 january 2021</div>
                                    </div>
                                    <div className='rupess'>-$850</div>
                                </div>
                                <div className='row3-3'>
                                    <div className='jemi-img'> <img src="paypal.png" alt=''/> </div>
                                    <div> <div className='paypal-tittle'>Deposit from my card</div>
                                        <div className='jan1'>25 january 2021</div>
                                    </div>
                                    <div className='rupess-1'>+$2,500</div>
                                </div>

                                <div className='row2-2'>
                                    <div className='paypal-img'> <img src="jemi.png" alt=''/> </div>
                                    <div> <div className='jemi-tittle'>Deposit from my card</div>
                                        <div className='jan1'>21 january 2021</div>
                                    </div>
                                    <div className='jemirupess-1'>+$5,500</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard
import { Container, Row, Col, Button } from 'react-bootstrap'

const Servies = () => {
    const listBank = [
        {
            "businessLoan": "It is a long established",
            "loremIpsum": "Many publishing",
        },
    ]

    const listBank1 = [
        {
            "checkingAccounts": "It is a long established",
            "loremIpsum": "Many publishing",
        },
    ]

    const listBank2 = [
        {
            "savingAccounts": "It is a long established",
            "loremIpsum": "Many publishing",
        },
    ]

    const listBank3 = [
        {
            "debitandcredit": "It is a long established",
            "loremIpsum": "Many publishing",
        },
    ]
    const listBank4 = [
        {
            "lifeInsurance": "It is a long established",
            "loremIpsum": "Many publishing",
        },
    ]
    return (
        <div className='Dashboardarea'>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className='life-insurance-box'>
                            <div className='life-insurance-row'>
                                <div className='life-insurance-img'> <img src='life-insurance.png' alt='' />   </div>
                                <div>
                                    <div className='life-insurance-tittle'>Life insurance</div>
                                    <div className='unlimited'>Unlimited Protection</div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className='life-insurance-box'>
                            <div className='life-insurance-row'>
                                <div className='life-insurance-img'> <img src='shopping.png' alt='' />   </div>
                                <div>
                                    <div className='shooping'>Shopping</div>
                                    <div className='unlimited'>Buy. Think.Grow</div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className='life-insurance-box'>
                            <div className='life-insurance-row'>
                                <div className='life-insurance-img'> <img src='safety.png' alt='' />   </div>
                                <div>
                                    <div className='safety'>Safety</div>
                                    <div className='unlimited'>What are you allies</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <div className='bank-service-list'><h5>Bank Service List</h5></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='business-box'>
                                    {
                                        listBank.map((list, index) => {
                                            return (
                                                <Row key={index}>
                                                    <Col md={2}>
                                                        <div className='business-1'> <img src='business-1.png' alt='' /></div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Business Loan</div>
                                                        <div>{list.businessLoan}</div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2} >
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>  <Button variant="outline-primary">View Details</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            )
                                        })
                                    }

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='business-box'>
                                    {
                                        listBank1.map((list, index) => {
                                            return (
                                                <Row>
                                                    <Col md={2}>
                                                        <div className='business-1'> <img src='corporate.png' alt='' />
                                                        </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t-1'>Checking accounts</div>
                                                        <div> {list.checkingAccounts} </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div>                                                  
                                                          </Col>
                                                    <Col md={2} >
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div>                                                  
                                                          </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>
                                                              <Button variant="outline-primary">View Details</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            )
                                        })
                                    }

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='business-box'>
                                    {
                                        listBank2.map((list, index) => {
                                            return (
                                                <Row>
                                                    <Col md={2}>
                                                        <div className='business-1'>  <img src='business.png' alt='' />
                                                        </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t-1'>Saving accounts</div>
                                                        <div>{list.savingAccounts} </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2} >
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>  <Button variant="outline-primary">View Details</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            )
                                        })
                                    }

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='business-box'>
                                    {
                                        listBank3.map((list, index) => {
                                            return (
                                                <Row>
                                                    <Col md={2}>
                                                        <div className='business-1'>  <img src='personal.png' alt='' />
                                                        </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t-1'>Debit and Credit Card</div>
                                                        <div> {list.debitandcredit} </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2} >
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>  <Button variant="outline-primary">View Details</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            )
                                        })
                                    }

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='business-box'>
                                    {
                                        listBank4.map((list, index) => {
                                            return (
                                                <Row>
                                                    <Col md={2}>
                                                        <div className='business-1'> <img src='safety.png' alt='' />
                                                        </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t-1'>Life Insurance</div>
                                                        <div> {list.lifeInsurance} </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2} >
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.loremIpsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>  <Button variant="outline-primary">View Details</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            )
                                        })
                                    }

                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Servies
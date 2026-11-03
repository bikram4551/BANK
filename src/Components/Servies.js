import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Servies = () => {
    const list_bank = [
        {
            "Business_Loan": "It is a long established",
            "Lorem_Ipsum": "Many publishing",
        },
    ]

    const list_bank1 = [
        {
            "Checking_accounts": "It is a long established",
            "Lorem_Ipsum": "Many publishing",
        },
    ]

    const list_bank2 = [
        {
            "saving_accounts": "It is a long established",
            "Lorem_Ipsum": "Many publishing",
        },
    ]

    const list_bank3 = [
        {
            "Debit_and_Credit_Card": "It is a long established",
            "Lorem_Ipsum": "Many publishing",
        },
    ]
    const list_bank4 = [
        {
            "Life_Insurance": "It is a long established",
            "Lorem_Ipsum": "Many publishing",
        },
    ]
    return (
        <div className='Dashboardarea'>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className='life-insurance-box'>
                            <div className='life-insurance-row'>
                                <div className='life-insurance-img'> <img src='life-insurance.png' />   </div>
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
                                <div className='life-insurance-img'> <img src='shopping.png' />   </div>
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
                                <div className='life-insurance-img'> <img src='safety.png' />   </div>
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
                                        list_bank.map((list, index) => {
                                            return (
                                                <Row>
                                                    <Col md={2}>
                                                        <div className='business-1'> <img src='business-1.png' /></div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Business Loan</div>
                                                        <div>{list.Business_Loan}</div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div></Col>
                                                    <Col md={2} >
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div>
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
                                        list_bank1.map((list, index) => {
                                            return (
                                                <Row>
                                                    <Col md={2}>
                                                        <div className='business-1'> <img src='corporate.png' />
                                                        </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t-1'>Checking accounts</div>
                                                        <div> {list.Checking_accounts} </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div>
                                                    </Col>
                                                    <Col md={2} >
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div>
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
                                        list_bank2.map((list, index) => {
                                            return (
                                                <Row>
                                                    <Col md={2}>
                                                        <div className='business-1'>  <img src='business.png' />
                                                        </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t-1'>saving accounts</div>
                                                        <div>{list.saving_accounts} </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div></Col>
                                                    <Col md={2} >
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div>
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
                                        list_bank3.map((list, index) => {
                                            return (
                                                <Row>
                                                    <Col md={2}>
                                                        <div className='business-1'>  <img src='personal.png' />
                                                        </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t-1'>Debit and Credit Card</div>
                                                        <div> {list.Debit_and_Credit_Card} </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div></Col>
                                                    <Col md={2} >
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div>
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
                                        list_bank4.map((list, index) => {
                                            return (
                                                <Row>
                                                    <Col md={2}>
                                                        <div className='business-1'> <img src='safety.png' />
                                                        </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t-1'>Life Insurance</div>
                                                        <div> {list.Life_Insurance} </div>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div></Col>
                                                    <Col md={2}>
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div></Col>
                                                    <Col md={2} >
                                                        <div className='business-t'>Lorem Ipsum</div>
                                                        <div>{list.Lorem_Ipsum}</div>
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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Servies
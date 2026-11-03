import React from 'react'
import { Col, Container, Row, Button, Modal } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router';
import { useState } from 'react';
import MaskedInput from 'react-text-mask';
const PhoneMaskedInput = ({ field, form, ...props }) => {
    return (
        <MaskedInput
            {...field}
            {...props}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            onChange={field.onChange}
        />
    );
};
const CreditCard = () => {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
        card: Yup.string()
            .required('Required')
            .oneOf(['Classic']),
        cardnumber: Yup.string()
            .required('Required')
            .min(12, "Enter 12 Digit number"),
        expiration: Yup.string()
            .required('Required')
            .oneOf(['january', 'february']),


    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);


    const cards = [
        {
            "cardType": "secondary",
            "bankName": "DBL Bank ",
            "cardNumber": "**** **** 5600",
            "namainCard": "William"
        },


    ]

    const cards1 = [

        {
            "cardType": "secondary",
            "bankName": "ABM Bank ",
            "cardNumber": "**** **** 4300",
            "namainCard": "Miche",

        },


    ]
    const cards2 = [


        {
            "cardType": "secondary",
            "bankName": "ABM Bank ",
            "cardNumber": "**** **** 7500",
            "namainCard": "Edward"
        },

    ]

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

    const mycards2 = [
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
                    <Col>
                        <Row>
                            <Col className='tittle'>My Card</Col>
                            <Col className='seeall'>All</Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className='maincard'>
                                    {
                                        mycards.map((mycard, index) => {
                                            return (
                                                <div className='creditcard' key={index}>
                                                    <div className='row'>
                                                        <div>
                                                            <div className="bal">Balance</div>
                                                            <div className='rupya' >{mycard.balance}</div></div>
                                                        <div className='chip'>

                                                        </div>
                                                    </div>
                                                    <div className='row1'>
                                                        <div>
                                                            <div className='holder'>CARD HOLDER</div>
                                                            <div className='eddy'>{mycard.cardHolder}</div>
                                                        </div>

                                                        <div><div className='valid'>VALID</div>
                                                            <div className='no'>{mycard.valid}</div>
                                                        </div>
                                                    </div>
                                                    <div className='row2'>
                                                        <div>
                                                            <div className='number'>{mycard.number}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='maincard'>
                                    {
                                        mycards1.map((mycard, index) => {
                                            return (
                                                <div className='creditcard-1 '>
                                                    <div className='row' key={index}>
                                                        <div>
                                                            <div className="bal">Balance</div>
                                                            <div className='rupya' >{mycard.balance}</div></div>
                                                        <div className='chip'>
                                                        </div>
                                                    </div>
                                                    <div className='row1'>
                                                        <div><div className='holder'>CARD HOLDER</div>
                                                            <div className='eddy'>{mycard.cardHolder}</div>
                                                        </div>

                                                        <div><div className='valid'>VALID</div>
                                                            <div className='no'>{mycard.valid}</div>
                                                        </div>
                                                    </div>
                                                    <div className='row2'>
                                                        <div><div className='number'>{mycard.number}</div></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='maincard'>
                                    {
                                        mycards2.map((mycard, index) => {
                                            return (
                                                <div className='card-2'>
                                                    <div className='row'>
                                                        <div>
                                                            <div className="bal-1">Balance</div>
                                                            <div className='rupya-1' >{mycard.balance}</div></div>
                                                        <div className='chip'>
                                                        </div>
                                                    </div>
                                                    <div className='row1'>
                                                        <div><div className='holder-1'>CARD HOLDER</div>
                                                            <div className='eddy-1'>{mycard.cardHolder}</div>
                                                        </div>

                                                        <div><div className='valid-1'>VALID</div>
                                                            <div className='no-1'>{mycard.valid}</div>
                                                        </div>
                                                    </div>
                                                    <div className='row2'>
                                                        <div>
                                                            <div className='number-1'>{mycard.number}</div>
                                                        </div>
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
                    <Col md={4}>

                        <div className='card-expense'> Card Expense Statistic
                        </div>
                        <div className='card-expense-box'> </div>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <div className='card-expense'>Card List </div>
                            </Col>
                        </Row>
                        <div className='card-list-box'>
                            {
                                cards.map((card, index) => {
                                    return (
                                        <div className='card-list-box'>
                                            <Row key={index}>
                                                <Col>
                                                    <img src='safety.png' />
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Card Type</div>
                                                    <div>{card.cardType}</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Bank</div>
                                                    <div>{card.bankName}</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Card Number</div>
                                                    <div>{card.cardNumber}</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Namain card</div>
                                                    <div>Edward</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'> <a href='#'>View Detail</a></div>
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='card-list-box'>
                            {
                                cards1.map((card, index) => {
                                    return (
                                        <div className='card-list-box'>
                                            <Row key={index}>
                                                <Col>
                                                    <img src='safety.png' />
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Card Type</div>
                                                    <div>{card.cardType}</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Bank</div>
                                                    <div>{card.bankName}</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Card Number</div>
                                                    <div>{card.cardNumber}</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Namain card</div>
                                                    <div>Edward</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'> <a href='#'>View Detail</a></div>
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='card-list-box'>
                            {
                                cards2.map((card, index) => {
                                    return (
                                        <div className='card-list-box'>
                                            <Row key={index}>
                                                <Col>
                                                    <img src='safety.png' />
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Card Type</div>
                                                    <div>{card.cardType}</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Bank</div>
                                                    <div>{card.bankName}</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Card Number</div>
                                                    <div>{card.cardNumber}</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'>Namain card</div>
                                                    <div>Edward</div>
                                                </Col>
                                                <Col>
                                                    <div className='card-type'> <a href='#'>View Detail</a></div>
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} >
                        <Row>
                            <div className='add-new-card'><h5>Add New Card </h5></div>
                        </Row>
                        <Row>
                            <Col>
                                <div className='add-new-card-box'>
                                    <div className='pragrap'>Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.</div>
                                    <div className='add-card-from'>
                                        <Formik
                                            initialValues={{
                                                card: '',
                                                name: '',
                                                cardnumber: '',
                                                expiration: '',

                                            }}
                                            validationSchema={SignupSchema}
                                            onSubmit={values => {
                                                // same shape as initial values
                                                console.log(values);
                                            }}
                                        >
                                            {({ errors, touched }) => (
                                                <Form>
                                                    <Row>
                                                        <Col md={6}>
                                                            <label htmlFor="cardType" className='register'>Card Type</label>
                                                            <Row>
                                                                <Col>
                                                                    <Field name="card" as="select" className="input-reduis">
                                                                        <option value="" >Choose Card type</option>
                                                                        <option value="Classic" >Classic</option>
                                                                    </Field>
                                                                    {errors.card && touched.card ? (
                                                                        <div>{errors.card}</div>
                                                                    ) : null}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md={6}>
                                                            <label htmlFor="name" className='register'> Name On Card</label>
                                                            <Row>
                                                                <Col>
                                                                    <Field name="name" placeholder="My Card" className="input-reduis" />
                                                                    {errors.name && touched.name ? (
                                                                        <div>{errors.name}</div>
                                                                    ) : null}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={6}>
                                                            <label htmlFor="cardnumber" className='register'> Card Number</label>
                                                            <Row>
                                                                <Col>
                                                                    <Field name="cardnumber" className="input-reduis" type="number" component={PhoneMaskedInput} placeholder="(555) 555-5555" />
                                                                    {errors.cardnumber && touched.cardnumber ? (
                                                                        <div>{errors.cardnumber}</div>
                                                                    ) : null}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md={6}>
                                                            <label htmlFor="name" className='register'>Expiration</label>
                                                            <Row>
                                                                <Col>
                                                                    <Field name="expiration" as="select" className="input-reduis">
                                                                        <option value="" >Choose Card month</option>
                                                                        <option value="january" >25 january 2025</option>
                                                                        <option value="february" >28 February 2025</option>
                                                                    </Field>
                                                                    {errors.expiration && touched.expiration ? (
                                                                        <div>{errors.expiration}</div>
                                                                    ) : null}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className='Add-card-button'>
                                                            <Button type="submit" variant="primary" >Add Card</Button>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col>
                                <div className='Card-Setting-tittle'> Card Setting </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='card-setting-box'>
                                    <Row onClick={handleShow}>
                                        <Col md={3}>
                                            <div className='img-block-card'> <img src='block-card.png' /> </div>
                                        </Col>
                                        <Col>
                                            <div className='block-tittle'>Block</div>
                                            <div>Instantly block your Card</div>
                                        </Col>
                                    </Row>
                                    <Row onClick={handleShow1}>
                                        <Col md={3}>
                                            <div className='img-block-card'> <img src='change-pin.png' /> </div>
                                        </Col>
                                        <Col>
                                            <div className='block-tittle'>Change pin code</div>
                                            <div>Choose another pin code </div>
                                        </Col>
                                    </Row>
                                    <Row onClick={handleShow2}>
                                        <Col md={3}>
                                            <div className='img-block-card'> <img src='add-to-googlepay.png' /> </div>
                                        </Col>
                                        <Col>
                                            <div className='block-tittle'>Add Google Pay</div>
                                            <div>Withdraw without any card</div>
                                        </Col>
                                    </Row>
                                    <Row onClick={handleShow3}>
                                        <Col md={3}>
                                            <div className='img-block-card'> <img src='apple pay.png' /> </div>
                                        </Col>
                                        <Col>
                                            <div className='block-tittle'>Add to Apple Pay</div>
                                            <div>Withdraw without any Card</div>
                                        </Col>
                                    </Row>
                                    <Row onClick={handleShow4}>
                                        <Col md={3}>
                                            <div className='img-block-card'> <img src='apple store.png' /> </div>
                                        </Col>
                                        <Col>
                                            <div className='block-tittle'>Add to Apple pay</div>
                                            <div>withdraw without any Card</div>
                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Block</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Instantly block your card</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </Col>
                    <Col>
                        <>
                            <Modal show={show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Change pin code </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Choose another pin code</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose1}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose1}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </Col>
                    <Col>
                        <>
                            <Modal show={show2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add to Google pay</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>withdraw without any card</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose2}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose2}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </Col>
                    <Col>
                        <>
                            <Modal show={show3} onHide={handleClose3}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add to Apple pay</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>withdraw without any card</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose3}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose3}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </Col>
                    <Col>
                        <>
                            <Modal show={show4} onHide={handleClose4}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add to Apple Pay</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>withdraw without any card</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose4}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose4}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default CreditCard
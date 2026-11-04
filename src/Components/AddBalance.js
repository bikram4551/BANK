import { Container, Row, Col, Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const AddBalance = () => {

    const SignupSchema = Yup.object().shape({
        balance: Yup.string().required('Required'),
    });

    const [balance, setBalance] = useState(100)
    // console.log(balance)

    // const increment = () => {
    //     setBalance(balance + 1)
    //     console.log(balance)
    //     // setFieldValue('balance', balance);
    // }
    // const decrement = () => {
    //     setBalance(balance - 1)
    //     console.log(balance)
    // }
    return (
        <div className='form'>
            <Container>
                <h1>Balance</h1>
                <Formik
                    initialValues={{
                        balance: balance,
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched, setFieldValue }) =>
                    (
                        <Form>
                            <Row>
                                <Col md={4}>
                                    <Button onClick={() => {
                                        setBalance(balance - 100)
                                        console.log(balance)
                                        setFieldValue('balance', balance);
                                    }
                                    } variant="danger" disabled={balance <=100}>-</Button>
                                </Col>
                                <Col md={4}>
                                    <Field name="balance" type="number" onChange={(e) => {
                                        const val = Number(e.target.value);
                                        setBalance(val);
                                        setFieldValue('balance', val);
                                    }} />

                                    {errors.balance && touched.balance ? <div>{errors.balance}</div> : null}
                                </Col>
                                <Col md={4}>
                                    <Button onClick={() => {
                                        setBalance(balance + 100)
                                        console.log(balance)
                                        setFieldValue('balance', balance);
                                    }
                                    } variant="success">+</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='add-balance-type' >
                                    <Button type="submit">Add Balance</Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    )
}

export default AddBalance
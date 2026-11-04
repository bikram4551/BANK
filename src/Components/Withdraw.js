import { Container, Row, Col, Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const Withdraw = () => {
     const SignupSchema = Yup.object().shape({
            balance: Yup.string().required('Required'),
        });
    
        const [count, setCount] = useState(1000)
        console.log(count)
    
        const increment = () => {
            setCount(count + 1)
            console.log(count)
        }
        const decrement = () => {
            setCount(count - 1)
            console.log(count)
        }
    return (
        <div className='form'>
            <Container>
                <h1>Withdraw</h1>
                <Formik
                    initialValues={{
                        balance: '',
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
                                <Col md={4}>
                                    <Button onClick={decrement} variant="danger">-</Button>
                                </Col>
                                <Col md={4}>
                                    <Field name="balance" type="number" />

                                    {errors.balance && touched.balance ? <div>{errors.balance}</div> : null}
                                </Col>
                                <Col md={4}>
                                    <Button onClick={increment} variant="success">+</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='add-balance-type' >
                                    <Button type="submit">Withdraw</Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    )
}

export default Withdraw
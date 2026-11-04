import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const Login = () => {
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Requried')
    });
    return (
        <div className='form'>
            <Container>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
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
                                    <label htmlFor="firstName" className='register'>Email  </label>
                                </Col>
                                <Col>
                                    <Field name="email" type="email" />
                                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <label htmlFor="password" className='register'>Password </label>
                                </Col>
                                <Col>
                                    <Field name="password" type="password" />
                                    {errors.password && touched.password ? <div>{errors.password}</div> : null}
                                </Col>
                            </Row>
                            <Row>
                                <Col className='register-submit'>
                                    <Button type="submit" variant='success' >Login</Button>
                                </Col>
                            </Row>
                              <Row>
                                <Col className='register-submit'>
                                    <Link to={'/Forget'} >Forget Password</Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='register-submit'>
                                    if not Registed then <Link to={'/Register'} >Register</Link>
                                </Col>
                            </Row>

                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    )
}

export default Login
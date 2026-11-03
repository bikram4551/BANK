import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';
const Forget = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <div className='form'>
      <Container>
        <Formik
          initialValues={{
            email: '',
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
                  <label htmlFor="firstName" className='register'>Email </label>
                </Col>
                <Col md={6} >
                  <Field name="email" type="email" placeholder="Email Or Number" />
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                </Col>
              </Row>
              <Row>
                <Col md={12}className='register-submit'>
                  <Button type="submit" variant='success' >Forget Password</Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  )
}

export default Forget
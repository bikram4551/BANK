import { Col, Container, Row, Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router';

const Register = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(2, 'minimum 2 characters reuired')
      .required('Required')
      .matches(/^[a-zA-Z .]+$/, "Only Charecters and  dot allowed"),
    middleName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(2, 'minimum 2 characters reuired')
      .required('Required')
      .matches(/^[a-zA-Z .]+$/, "Only Charecters and  dot allowed"),
    lastName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(2, 'minimum 2 characters reuired')
      .required('Required')
      .matches(/^[a-zA-Z .]+$/, "Only Charecters and  dot allowed"),
    email: Yup.string().email('Invalid email').required('Required'),

    moblie: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10 digit moblie No. ")
      .required('requried'),

    password: Yup.string()
      .required('Required')
  });
  return (
    <div className='form'>
      <Container>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            middleName: '',
            email: '',
            password: '',
            moblie:'' ,
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
                  <label htmlFor="firstName" className='register'> First Name</label>
                </Col>
                <Col md={6}>
                  <Field name="firstName" placeholder="First Name" />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label htmlFor="middleName" className='register'>Midle Name</label>
                </Col>
                <Col md={6}>
                  <Field name="middleName" placeholder="Middle Name" />
                  {errors.middleName && touched.middleName ? (
                    <div>{errors.middleName}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label htmlFor="lastName" className='register'>Last Name</label>
                </Col>
                <Col md={6}>
                  <Field name="lastName" placeholder="Middle Name" />
                  {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <label htmlFor="email" className='register'>Email</label>
                </Col>
                <Col md={6}>
                  <Field name="email" placeholder="Email" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label htmlFor="moblie" className='register'>Moblie Number</label>
                </Col>
                <Col md={6}>
                  <Field name="moblie" placeholder="Moblie Number" />
                  {errors.moblie && touched.moblie ? (
                    <div>{errors.moblie}</div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label htmlFor="password" className='register'>Password</label>
                </Col>
                <Col md={6}>
                  <Field name="password" placeholder="Password" type="password" />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col className='register-submit'>
                  <Button type="submit" variant='success' >Register</Button>
                </Col>
              </Row>
              <Row>
                <Col className='register-submit'>
                  If already Registed then <Link to={'/Login'} >Login</Link>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  )
}

export default Register
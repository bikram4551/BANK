import React from 'react'
import { Col, Container, Row, Button, Tabs, Tab } from 'react-bootstrap'
import * as Yup from 'yup';
import { useState } from 'react';
import { Formik, Form, Field,  } from "formik";




const Setting = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const [isOn1, setIsOn1] = useState(false);

  const toggleSwitch1 = () => {
    setIsOn1(!isOn1);
  };

  const [isOn2, setIsOn2] = useState(false);


  const toggleSwitch2 = () => {
    setIsOn2(!isOn2);
  };
  const SignupSchema = Yup.object().shape({
    yourname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    // password:Yup.string ()
    //   .password("wrong password")
    //   .required("Required"),
    moblie: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10 digit moblie No. ")
      .required("moblie no. is mandetory"),
    permanentaddress: Yup.string()
      .required("required"),
    presentaddress: Yup.string()
      .required("required"),
    city: Yup.string()
      .required("required"),
    postal: Yup.string()
      .required("required"),
    country: Yup.string()
      .required("required"),
  });

  return (
    <div  className='Dashboardarea' >
      <Container>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            moblie: "",
            address: ""
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>

              <div className='setting-box'>
                <Row>
                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="editprofile" title="Edit Profile">
                      <Row>
                        <Col md={3} >
                          <div className='girl-img'>
                            <img src='girl.png'  alt=''/>
                          </div>
                        </Col>
                        <Col md={5}>
                          <div className='label-1'>
                            <label htmlFor="yourname">
                              Your Name
                            </label>
                            <Row>
                              <Col>
                                <Field name="yourname" />
                                {errors.yourname && touched.yourname ? (
                                  <div>{errors.yourname}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className='label-1'>
                            <label htmlFor="username">
                              User Name
                            </label>
                            <Row>
                              <Col>
                                <Field name="username" />
                                {errors.username && touched.username ? (
                                  <div>{errors.username}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                        </Col>
                        <Col md={5}>
                          <div className='label-2'>
                            <label htmlFor="email">
                              Email
                            </label>
                            <Row>
                              <Col>
                                <Field name="email" />
                                {errors.email && touched.email ? (
                                  <div>{errors.email}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className='label-2'>
                            <label htmlFor="password">
                              Password
                            </label>
                            <Row>
                              <Col>
                                <Field name="password" />
                                {errors.password && touched.password ? (
                                  <div>{errors.password}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                        </Col>
                        <Col md={5}>
                          <div className='label-2'>
                            <label htmlFor="dod">
                              Date Of Birth
                            </label>
                            <Row>
                              <Col>
                                <Field name="dob" />
                                {errors.dob && touched.dob ? (
                                  <div>{errors.dob}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className='label-2'>
                            <label htmlFor="presentaddress">
                              Present Address
                            </label>
                            <Row>
                              <Col>
                                <Field name="presentaddress" />
                                {errors.presentaddress && touched.presentaddress ? (
                                  <div>{errors.presentaddress}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                        </Col>
                        <Col md={5}>
                          <div className='label-2'>
                            <label htmlFor="permanentaddress">
                              Permanent Address
                            </label>
                            <Row>
                              <Col>
                                <Field name="permanentaddress" />
                                {errors.permanentaddress && touched.permanentaddress ? (
                                  <div>{errors.permanentaddress}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className='label-2'>
                            <label htmlFor="city">
                              City
                            </label>
                            <Row>
                              <Col>
                                <Field name="city" />
                                {errors.city && touched.city ? (
                                  <div>{errors.city}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                        </Col>
                        <Col md={5}>
                          <div className='label-2'>
                            <label htmlFor="postalcode">
                              Postal Code
                            </label>
                            <Row>
                              <Col>
                                <Field name="postalcode" />
                                {errors.postal && touched.postal ? (
                                  <div>{errors.postal}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className='label-2'>
                            <label htmlFor="country ">
                              Country
                            </label>
                            <Row>
                              <Col>
                                <Field name="country" />
                                {errors.country && touched.country ? (
                                  <div>{errors.country}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className='save-btn'>
                            <Button variant='primary' type='sumit'> Save</Button>
                          </div>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="preference" title="Preference">
                      <Row>
                        <Col md={6}>
                          <div className='label-3'>
                            <label htmlFor="currency">
                              Currency
                            </label>
                            <Row>
                              <Col>
                                <Field name="currency" />
                                {errors.currency && touched.country ? (
                                  <div>{errors.currency}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className='label-3'>
                            <label htmlFor="timezone">
                              Time Zone
                            </label>
                            <Row>
                              <Col>
                                <Field name="TimeZone" />
                                {errors.timezone && touched.timezone ? (
                                  <div>{errors.timezone}</div>
                                ) : null}
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className='save-btn'>
                            <Button variant='primary' type='sumit'> Save</Button>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <div className='label-3'>
                          <h4>Notification</h4>
                          <Col>
                            <div className="toggle-wrapper">
                              {/* Optional Left Label */}
                              <span className={`label-text ${!isOn ? 'active-label' : ''}`}></span>

                              {/* The Switch Container */}
                              <button
                                className={`toggle-btn ${isOn ? 'on' : 'off'}`}
                                onClick={toggleSwitch}
                                aria-checked={isOn}
                                role="switch"
                              >
                                {/* The Sliding Knob */}
                                <span className="toggle-slider"></span>
                              </button>

                              {/* Optional Right Label */}
                              <span className={`label-text ${isOn ? 'active-label' : ''}`}>I sent or recevie digital Currency</span>
                            </div>
                          </Col>
                        </div>
                      </Row>
                      <Row>
                        <div className='label-4'>
                          <Col className='notification'>
                            <div className="toggle-wrapper">
                              {/* Optional Left Label */}
                              <span className={`label-text ${!isOn1 ? 'active-label' : ''}`}></span>

                              {/* The Switch Container */}
                              <button
                                className={`toggle-btn ${isOn1 ? 'on' : 'off'}`}
                                onClick={toggleSwitch1}
                                aria-checked={isOn1}
                                role="switch"
                              >
                                {/* The Sliding Knob */}
                                <span className="toggle-slider"></span>
                              </button>

                              {/* Optional Right Label */}
                              <span className={`label-text ${isOn1 ? 'active-label' : ''}`}>I recevie merchant order</span>
                            </div>
                          </Col>
                          </div>
                      </Row>
                      <Row>
                        <div className='label-3' >
                          <Col>
                            <div className="toggle-wrapper">
                              {/* Optional Left Label */}
                              <span className={`label-text ${!isOn2 ? 'active-label' : ''}`}></span>

                              {/* The Switch Container */}
                              <button
                                className={`toggle-btn ${isOn2 ? 'on' : 'off'}`}
                                onClick={toggleSwitch2}
                                aria-checked={isOn2}
                                role="switch"
                              >
                                {/* The Sliding Knob */}
                                <span className="toggle-slider"></span>
                              </button>

                              {/* Optional Right Label */}
                              <span className={`label-text ${isOn2 ? 'active-label' : ''}`}>The are recommendation for my account</span>
                            </div>
                          </Col>
                        </div>
                      </Row>
                    </Tab>
                    <Tab eventKey="security" k title="Security">
                      Tab content for Contact
                    </Tab>
                  </Tabs>
                </Row>

              </div>
            </Form>
          )}
        </Formik>
      </Container >
    </div >
  )
}





export default Setting
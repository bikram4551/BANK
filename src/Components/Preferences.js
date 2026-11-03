import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';




const Preferences = () => {
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

        password: Yup.string()
            .matches(/^[6-9]\d{9}$/, "Valid password ")
            .required("Required"),

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
    })
    return (
        <div className='mainarea'>
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
                            </div>
                        </Form>

                    )}

                </Formik>
            </Container>
        </div>
    )
}

export default Preferences
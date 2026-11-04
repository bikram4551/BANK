import { Col, Container, Row, Table, Button } from 'react-bootstrap'

const Loans = () => {
    const Loans = [
        {
            "slNo": "1",
            "loanMoney": "$100,000",
            "left": "$40,500",
            "duration": "8 months",
            "interest": "12%",
            "Installment": "$2,000 / month"
        }
    ]
    const Loans1 = [
        {
            "slNo": "2",
            "loanMoney": "$500,000",
            "left": "$25,000",
            "duration": "36 months",
            "interest": "10%",
            "Installment": "$8,000 / month"
        }
    ]
    const Loans2 = [
        {
            "slNo": "3",
            "loanMoney": "$900,000",
            "left": "$40,500",
            "duration": "12 months",
            "interest": "12%",
            "Installment": "$8,000 / month"
        }
    ]
    const Loans3 = [
        {
            "slNo": "4",
            "loanMoney": "$50,000",
            "left": "$40,500",
            "duration": "25 months",
            "interest": "5%",
            "Installment": "$2,000 / month"
        }
    ]

    const Loans4 = [
        {
            "slNo": "5",
            "loanMoney": "$50,000",
            "left": "$40,500",
            "duration": "5 months",
            "interest": "16%",
            "Installment": "$10,000 / month"
        }
    ]

    const Loans5 = [
        {
            "slNo": "6",
            "loanMoney": "$80,000",
            "left": "$25,500",
            "duration": "12 months",
            "interest": "15%",
            "Installment": "$10,000 / month"
        }
    ]
    const Loans6 = [
        {
            "slNo": "7",
            "loanMoney": "$880,000",
            "left": "$35,500",
            "duration": "23 months",
            "interest": "19%",
            "Installment": "$16,000 / month"
        }
    ]
    const Loans7 = [
        {
            "slNo": "8",
            "loanMoney": "$880,000",
            "left": "$35,500",
            "duration": "23 months",
            "interest": "19%",
            "Installment": "$16,000 / month"
        }
    ]
    const Total = [
        {
            "sl": "Total",
            "loan": "$100,000",
            "left": "$40,500",
            "Installment": "$2,000 / month"

        }
    ]
    return (
        <div className='Dashboardarea'>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className='personal-loan'>
                            <div className='personal-row'>
                                <div className='personal-img'><img src="personal.png" alt='' /> </div>
                                <div>
                                    <div className='personal-loan-tittle'>Personal Loans</div>
                                    <div className='personal-loan-paisa' >$55,000</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='personal-loan'>
                            <div className='personal-row'>
                                <div className='personal-img'>  <img src="corporate.png" alt='' /> </div>
                                <div> <div className='personal-loan-tittle'>Corcpate Loans</div>
                                    <div className='personal-loan-paisa' >$100,000</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='personal-loan'>
                            <div className='personal-row'>
                                <div className='personal-img'>  <img src="business.png" alt='' /> </div>
                                <div> <div className='personal-loan-tittle'>Business Loans</div>
                                    <div className='personal-loan-paisa' >$500,000</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='personal-loan'>
                            <div className='personal-row'>
                                <div className='personal-img'>  <img src="custom.png" alt='' /> </div>
                                <div> <div className='personal-loan-tittle'>Personal Loans</div>
                                    <div className='personal-loan-paisa' >Choose Money</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className='active-loans-overview'><h5>Active Loans Overviews </h5></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='active-loans-overview-box'>
                            <Table>
                                <thead>
                                    <tr>
                                        <th className='sl-no'>SL No</th>
                                        <th>Loan Money</th>
                                        <th>Left to Repay</th>
                                        <th>Duration</th>
                                        <th>Interest</th>
                                        <th>Installment</th>
                                        <th>Repay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Loans.map((loan, index) => {
                                            return (
                                                <tr>
                                                    <td className='td-1'>{loan.slNo}</td>
                                                    <td className='td-1'>{loan.loanMoney}</td>
                                                    <td className='td-1'>{loan.left}</td>
                                                    <td className='td-1'>{loan.duration}</td>
                                                    <td className='td-1'>{loan.interest}</td>
                                                    <td className='td-1'>{loan.Installment}</td>
                                                    <td>  <Button variant="outline-primary">Repay</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tbody>
                                    {
                                        Loans1.map((loan, index) => {
                                            return (
                                                <tr>
                                                    <td className='td-1'>{loan.slNo}</td>
                                                    <td className='td-1'>{loan.loanMoney}</td>
                                                    <td className='td-1'>{loan.left}</td>
                                                    <td className='td-1'>{loan.duration}</td>
                                                    <td className='td-1'>{loan.interest}</td>
                                                    <td className='td-1'>{loan.Installment}</td>
                                                    <td>  <Button variant="outline-primary">Repay</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tbody>
                                    {
                                        Loans2.map((loan, index) => {
                                            return (
                                                <tr>
                                                    <td className='td-1'>{loan.slNo}</td>
                                                    <td className='td-1'>{loan.loanMoney}</td>
                                                    <td className='td-1'>{loan.left}</td>
                                                    <td className='td-1'>{loan.duration}</td>
                                                    <td className='td-1'>{loan.interest}</td>
                                                    <td className='td-1'>{loan.Installment}</td>
                                                    <td>  <Button variant="outline-primary">Repay</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tbody>
                                    {
                                        Loans3.map((loan, index) => {
                                            return (
                                                <tr>
                                                    <td className='td-1'>{loan.slNo}</td>
                                                    <td className='td-1'>{loan.loanMoney}</td>
                                                    <td className='td-1'>{loan.left}</td>
                                                    <td className='td-1'>{loan.duration}</td>
                                                    <td className='td-1'>{loan.interest}</td>
                                                    <td className='td-1'>{loan.Installment}</td>
                                                    <td>  <Button variant="outline-primary">Repay</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tbody>
                                    {
                                        Loans4.map((loan, index) => {
                                            return (
                                                <tr>
                                                    <td className='td-1'>{loan.slNo}</td>
                                                    <td className='td-1'>{loan.loanMoney}</td>
                                                    <td className='td-1'>{loan.left}</td>
                                                    <td className='td-1'>{loan.duration}</td>
                                                    <td className='td-1'>{loan.interest}</td>
                                                    <td className='td-1'>{loan.Installment}</td>
                                                    <td>  <Button variant="outline-primary">Repay</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tbody>
                                    {
                                        Loans5.map((loan, index) => {
                                            return (
                                                <tr>
                                                    <td className='td-1'>{loan.slNo}</td>
                                                    <td className='td-1'>{loan.loanMoney}</td>
                                                    <td className='td-1'>{loan.left}</td>
                                                    <td className='td-1'>{loan.duration}</td>
                                                    <td className='td-1'>{loan.interest}</td>
                                                    <td className='td-1'>{loan.Installment}</td>
                                                    <td>  <Button variant="outline-primary">Repay</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tbody>
                                    {
                                        Loans6.map((loan, index) => {
                                            return (
                                                <tr>
                                                    <td className='td-1'>{loan.slNo}</td>
                                                    <td className='td-1'>{loan.loanMoney}</td>
                                                    <td className='td-1'>{loan.left}</td>
                                                    <td className='td-1'>{loan.duration}</td>
                                                    <td className='td-1'>{loan.interest}</td>
                                                    <td className='td-1'>{loan.Installment}</td>
                                                    <td>  <Button variant="outline-primary">Repay</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tbody>
                                    {
                                        Loans7.map((loan, index) => {
                                            return (
                                                <tr>
                                                    <td className='td-1'>{loan.slNo}</td>
                                                    <td className='td-1'>{loan.loanMoney}</td>
                                                    <td className='td-1'>{loan.left}</td>
                                                    <td className='td-1'>{loan.duration}</td>
                                                    <td className='td-1'>{loan.interest}</td>
                                                    <td className='td-1'>{loan.Installment}</td>
                                                    <td>  <Button variant="outline-primary">Repay</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tbody>
                                    {
                                        Total.map((loan, index) => {
                                            return (
                                                <tr>
                                                    <td className='td-2'>{loan.sl}</td>
                                                    <td className='td-2'>{loan.loan}</td>
                                                    <td className='td-2'>{loan.left}</td>
                                                    <td className='td-1'></td>
                                                    <td className='td-1'></td>
                                                    <td className='td-2'>{loan.Installment}</td>
                                                    <td>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Loans
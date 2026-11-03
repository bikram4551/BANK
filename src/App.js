import { Col, Container, Row, Nav, NavDropdown, Navbar, Form, Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router';
import Dashboard from './Components/Dashboard';
import Transactions from './Components/Transactions';
import Accounts from './Accounts';
import Investments from './Components/Investments';
import Graph12 from './Components/Graph12';
import CreditCard from './Components/CreditCard';
import Loans from './Components/Loans';
import Servies from './Components/Servies';
import Setting from './Components/Setting';
import Register from './Components/Register';
import Login from './Components/Login';
import Forget from './Components/Forget';
import AddBalance from './Components/AddBalance';
import Withdraw from './Components/Withdraw';
import { useTheme } from "./useTheme";



function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Container>
        <Row className='toparea'>
          <Col md={2}>
            <div className='toparea-row '>
              <img src='topimg.png' />
              <h3>BankDash.</h3>
            </div>
          </Col>
          <Col md={4}>
            <h4>Overviews</h4>
          </Col>
          <Col md={3}>
            <div className='top-serching'>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search for Somethings"
                  className="me-2 searchicon"
                  aria-label="Search"
                />
              </Form>
            </div>
          </Col>
          <Col md={3}>
            <div className='top-img-list'>
              <ul>
                <Link to={'Setting'}>
                  <li><img src='top-setting.png' /></li>
                </Link>
                <li><img src='notifaction.png' /></li>
                <li><img src='girl-logo.png' /></li>
                <li>
                  <Button onClick={toggleTheme} className="theme-toggle-btn">
                    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                  </Button>
                </li>
              </ul>
            </div>

          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="flex-column">
                    <Nav.Link as={Link} to={'/Dashboard'}>Dashboard</Nav.Link>
                    <Nav.Link as={Link} to={'/Transaction'}>Transaction</Nav.Link>
                    <Nav.Link as={Link} to={'/Accounts'}>Account</Nav.Link>
                    <Nav.Link as={Link} to={'/Investments'}>Investments</Nav.Link>
                    <Nav.Link as={Link} to={'/Graph12'}>Graph</Nav.Link>
                    <Nav.Link as={Link} to={'/CreditCard'}>Credit Card</Nav.Link>
                    <Nav.Link as={Link} to={'/Loans'}>Loans</Nav.Link>
                    <Nav.Link as={Link} to={'/Servies'}>Service</Nav.Link>
                    <Nav.Link as={Link} to={'/Setting'}>Setting</Nav.Link>
                    <Nav.Link as={Link} to={'/Register'}>Register</Nav.Link>
                    <Nav.Link as={Link} to={'/Login'}>Login</Nav.Link>
                    <Nav.Link as={Link} to={'/Forget'}>Forget</Nav.Link>
                    <Nav.Link as={Link} to={'/AddBalance'}>Add Balance</Nav.Link>
                    <Nav.Link as={Link} to={'/Withdraw'}>Withdraw</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col md={9}>
            <Routes>
              <Route path='/Dashboard' element={<Dashboard />} />
              <Route path='/Transaction' element={<Transactions />} />
              <Route path='/Accounts' element={<Accounts />} />
              <Route path='/Investments' element={<Investments />} />
              <Route path='/Graph12' element={<Graph12 />} />
              <Route path='/creditCard' element={<CreditCard />} />
              <Route path='/Loans' element={<Loans />} />
              <Route path='/Servies' element={<Servies />} />
              <Route path='/Setting' element={<Setting />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Forget' element={<Forget />} />
              <Route path='/AddBalance' element={<AddBalance />} />
              <Route path='/Withdraw' element={<Withdraw />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

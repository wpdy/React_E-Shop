import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar className='header'>
            <Container>
                <Nav className="me-auto">
                    <h1 className='eshop'>E-SHop</h1>
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/products" className='nav-link'>Product List</Link>
                    <Link to="/cart" className='nav-link'>Cart</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Header

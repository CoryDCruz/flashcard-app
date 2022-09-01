import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{ textAlign: "left" }}as={Link} to="/">Flashcard App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;

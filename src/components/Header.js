import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { GiBrain } from 'react-icons/gi'
import { GrTwitter } from 'react-icons/gr'

const Header = () => {
  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand 
          style={{ textAlign: "left", color: "white" }}
          as={Link} 
          to="/">
          <GiBrain /> Flashcard App
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Test</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

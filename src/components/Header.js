import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GiBrain } from 'react-icons/gi'

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
      </Container>
    </Navbar>
  );
}

export default Header;

import Footer from "./modulos/footer";
import Navbar from "./modulos/navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Index() {
  return <div>
    <Navbar />
    Bem Vindos
    <Container>
      <Row>
        <Col className="bg-info bg-gradient">1 of 2</Col>
        <Col className="bg-info bg-gradient">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-info-subtle">1 of 3</Col>
        <Col className="bg-info-subtle">2 of 3</Col>
        <Col className="bg-info-subtle">3 of 3</Col>
      </Row>
    </Container>
    <Footer />
  </div>;
}

import "./reservation.css";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Reservation({ reservation }) {
  return (
    <div className="post">
      <Row xs={1} md={2} className="g-4">
        <Card border="primary" style={{ width: '20rem' }}>
            <Card.Header>ID: {reservation._id}</Card.Header>
            <Card.Body>
                <Card.Title>{reservation.hotel}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  User: {reservation.username}
                </Card.Subtitle>
                <Card.Text>
                {reservation.address}
                </Card.Text>
                <ListGroup horizontal>
                  <ListGroup.Item>Check in: {reservation.checkIn}</ListGroup.Item>
                  <ListGroup.Item>Check Out: {reservation.checkOut}</ListGroup.Item>
                </ListGroup>
                <p></p>
                <ListGroup variant="flush">
                  <ListGroup.Item>Adults: {reservation.adults}</ListGroup.Item>
                  <ListGroup.Item>Children: {reservation.children}</ListGroup.Item>
                </ListGroup>
                <p></p>
                <Card.Subtitle className="fw-bold">Price: ${reservation.price}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Purchased: {new Date(reservation.updatedAt).toDateString()}</small>
            </Card.Footer>
        </Card>
      </Row>
    </div>
  );
}
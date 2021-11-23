import "./reservation.css";
import { useContext } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import { Context } from "../../context/Context";

export default function Reservation({reservation}) {
  const { user } = useContext(Context);

  const handleDelete = async (e) => {
    e.preventDefault();
    alert("Succesfully Deleted!")
    try {
      await axios.delete(`/hotels/${reservation._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <div>
      { user.username === reservation.username ? (
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
                <button type="button" onClick={handleDelete} className="justify-content-end btn btn-sm btn-outline-secondary justify">Delete</button>
              </Card.Footer>
          </Card>
        </Row>
      </div>
      ) : null }
    </div>
  );
}
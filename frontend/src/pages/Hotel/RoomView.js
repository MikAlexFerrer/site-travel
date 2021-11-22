import React, { useEffect, useState } from 'react';
import "./roomView.css";
import Carousel from 'react-bootstrap/Carousel';
import hotelData from "../../data/hotels.json"
import Badge from "react-bootstrap/Badge";
import Booking from './Hotel';
import { useLocation } from "react-router";

export function HotelView() {
    
    return (
        <div className="carousel-box">
            <Carousel interval="3000">
                <Carousel.Item>
                    <div className="box">
                        <img
                            className=" carousel-img"
                            src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Third slide"
                        />
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="box">
                        <img
                            src="https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            className="carousel-img"
                            alt="Third slide"
                        />
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="box">
                        <img
                            className="carousel-img"
                            src="https://images.pexels.com/photos/2899687/pexels-photo-2899687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export function RoomView(props) {
    const location = useLocation();
    const [state, setstate] = useState({ hotel: [] })
    const path = location.pathname.split("/")[2];

    useEffect(() => {
        const hotelId = [path]
        const hotelDetails = hotelData.filter((Hotel) => Hotel.id === Number(hotelId))
        const Hotelobj = hotelDetails[0]

        setstate({
            hotel: Hotelobj
        })

    }, [path])

    const RenderStars = (stars) => {
        let star = []
        for (let i = 0; i < stars; i++) {
            star.push(<span className="text-primary">&#9733;</span>)
        }
        let totalS = star.map((ele, index) => (<span key={index}>{ele}</span>))
        return totalS
    }

    return (
        <div>
            {/* //////////////////////////////////////////////////////////////////////////////////////// */}
            <section>
                <div className="container">
                    <div className="mb-4">
                        <h2>{state.hotel.name}</h2>
                        <h5 className="font-weight-bold">{RenderStars(state.hotel.star)}</h5>
                    </div>
                    <div className="d-flex roomview-wrapper">
                        <HotelView />
                        <div className="bg-light book-hotel text-white mb-5">
                            <Booking state={state} />
                        </div>
                    </div>
                </div>
            </section>
            {/* //////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="container ">
                <div className="room-serivces">
                    <h5 className="mt-5 font-weight-bold">Room Service</h5>
                    <div className="col-sm-4">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Free WiFi
     <Badge bg="success">{state.hotel.wifi === "Yes" ? <>&#10004;</> : <>&#10006;</>}</Badge>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Parking
    <Badge bg="success">{state.hotel.parking === "Yes" ? <>&#10004;</> : <>&#10006;</>}</Badge>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Swimming Pool
    <Badge bg="success">{state.hotel.swimmingPool === "Yes" ? <>&#10004;</> : <>&#10006;</>}</Badge>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Fitness Center
    <Badge bg="success">{state.hotel.fitness_center === "Yes" ? <>&#10004;</> : <>&#10006;</>}</Badge>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="pritn">
                    <h5 className="mt-5 font-weight-bold">Hotel Info</h5>
                    <div className="row">

                        <ul className="list-group-flush col-6">
                            <li className="list-group-item"><h5 className="font-weight-bold">Address</h5>
                                <p>{state.hotel.location}</p></li>
                            <li className="list-group-item"><h5 className="font-weight-bold">City</h5>
                                <p>{state.hotel.city}</p></li>
                            <li className="list-group-item"><h5 className="font-weight-bold">Country</h5>
                                <p>{state.hotel.country}</p></li>
                            <li className="list-group-item"><h5 className="font-weight-bold">Contact No.</h5>
                                <p>{state.hotel.phone_number}</p></li>
                        </ul>

                        <ul className="list-group-flush col-6">
                            <li className="list-group-item"><h5 className="font-weight-bold">Available Rooms</h5>
                                <p>{state.hotel.availableRooms}</p></li>
                            <li className="list-group-item"><h5 className="font-weight-bold">Number of Beds</h5>
                                <p>{state.hotel.bedRooms}</p></li>
                            <li className="list-group-item"><h5 className="font-weight-bold">Maximum Adults Allowed</h5>
                                <p>{state.hotel.maximumAdultsAllow}</p></li>
                            <li className="list-group-item"><h5 className="font-weight-bold">Maximum Children Allowed</h5>
                                <p>{state.hotel.maximumChildsAllow}</p></li>
                        </ul>

                    </div>


                </div>
                {/* /////////////////////////////////////////////////////////////////////////////// */}
                <hr />

                <div className="rules">
                    <h5 className="mt-5 font-weight-bold">Hotel Rules</h5>
                    <div className="row">
                        <div className="col-2 mr-4">
                            <p>Check-in</p>
                            <p>Check-out</p>
                            <p>Cancellation/prepayment</p>
                            <p>Age restriction</p>
                            <p>Cards accepted at this property </p>
                            <p>Groups</p>
                        </div>

                        <div className="col-6">
                            <p>Check in : 11:00 AM -- Check Out: 10:00 AM
                            <small className="form-text text-muted">
                                    Guests are required to show a photo identification and credit card upon check-in</small>
                            </p>
                            <p> Cancellation and prepayment policies vary according to accommodation type. Please enter the dates of your stay and check the conditions of your required room. </p>
                            <p> The minimum age for check-in is 18</p>
                            <p>Backpacker Panda Colaba accepts these cards and reserves the right to temporarily hold an amount prior to arrival.  </p>
                            <p>When booking more than 4 rooms, different policies and additional supplements may apply. </p>
                        </div>
                    </div>

                </div>
                <hr />

                {/* //////////////////////////////////////////////////////////////////////////////////// */}
                <div className="pritn">
                    <h5 className="mt-5 font-weight-bold">The fine Print</h5>
                    <p>
                        Please note that guests checking in must be at least 18 years of
                  age. According to government regulations guests are required to
                  present a valid photo ID and credit card upon check in. The hotel
                  reserves the right of admission. Please note that early check-in
                  or late check-out is subject to availability and may be
                  chargeable. Please note that in case of couples, a valid marriage
                  proof is required to be produced at the time of check-in. The
              right to admission is reserved by the property.                  </p>
                </div>
            </div>
        </div>

    )
}
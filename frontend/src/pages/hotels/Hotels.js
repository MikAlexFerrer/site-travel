import React, { useState } from 'react'
import Hotels from '../../data/hotels.json'
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row'

export default function HotelFilter() {
    const [state, setstate] = useState({ data: [], city: "" })
    
    const cityResult = [];
    const map = new Map();
    for (const hotel of Hotels) {
        if (!map.has(hotel.city)) {
            map.set(hotel.city, true);
            cityResult.push({
                city: hotel.city
            });
        }
    }

    const setter = (cityName) => {
        const filterCITY = Hotels.filter((hotel) => hotel.city === cityName)
        setstate({
            city: cityName,
            data: filterCITY
        })
    }

    const handleChange = (e) => {
        console.log(e.target.attributes.value.nodeValue)
        let cityName = e.target.attributes.value.nodeValue
        setter(cityName)
    }

    const RenderStars = (stars) => {
        let star = []
        for (let i = 0; i < stars; i++) {
            star.push(<span className="text-primary">&#9733;</span>)
        }
        let totalS = star.map((ele, index) => (<span key={index}>{ele}</span>))
        return totalS
    }

    return (
        <>
            <img
            className="headerImg"
            src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            />
            <div className="header">
                <div className="headerTitles">
                <span className="headerTitleLg">Destinations</span>
                </div>
            </div>
            <div className="container mt-lg-5">
                <Row xs={1} md={2} className="g-4">
                    {
                        cityResult.map((hotel, index) => {
                            return (<div key={index} className="m-3">
                                <Card className="card" style={{ "width": "16rem" }}>
                                    <Card.Img variant="top" src={Hotels[index].cityimage} height="200"/>
                                    <h3 className="btn btn-outline-info" value={hotel.city} onClick={handleChange}>{hotel.city.toUpperCase()}</h3>
                                </Card>
                            </div>)
                        })
                    }
                </Row>
                <section>
                    <div className="container">
                        {state.data.map((hotel, index) => {
                            return (<div className="container mt-2" key={index}>
                                <Link to={`hotel/${hotel.id}`}>
                                    <div className="col-md-8 text-dark">
                                        <div className="d-sm-flex border" >
                                            <img
                                                src={hotel.images}
                                                className="rounded p-2"
                                                height="200"
                                                width="200"
                                                alt="room"
                                            />

                                            <div className="flex-grow-1 p-2 ml-3">
                                                <h4 className="font-weight-bold">{hotel.name}</h4>
                                                <span>{RenderStars(hotel.star)}</span>
                                                <p>{hotel.city.toUpperCase()}</p>
                                            </div>
                                            <div className="p-2 text-right bg-light">
                                                <h2 className="font-weight-bold">‎$‎{hotel.price}</h2>
                                                <small className="form-text text-muted font-weight-light">
                                                    Per Night
                <br />
                                                    Per Person
                </small>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                        })
                        }
                    </div>
                    
                </section>
            </div>
        </>
    )
}
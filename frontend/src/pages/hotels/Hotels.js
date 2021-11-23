import React, { useState } from 'react'
import Hotels from '../../data/hotels.json'
import Cities from '../../data/cities.json'
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row'
import "./hotels.css"

export default function HotelFilter() {
    const [state, setstate] = useState({ data: [], city: "" })
    
    const cityResult = [];
    const map = new Map();

    for (const hotel of Cities) {
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
            <section className="container">
                <Row>
                    <div className="dashboard-sections wrapper d-flex flex-wrap">
                    {
                        cityResult.map((hotel, index) => {
                            return (
                            <Card key={index} style={{ "width": "14.58rem", "margin": "2% 1% 1% 1%"}}>
                                <Card.Img variant="top" src={Cities[index].image} height="200"/>
                                <Card.Body className = "btn" >
                                    <Card.Subtitle value={hotel.city} onClick={handleChange}>{hotel.city.toUpperCase()}</Card.Subtitle>
                                </Card.Body>
                            </Card>)
                        })
                    }
                    </div>
                </Row>
                </section>
                <div className="container">
                    <h1>{state.city}</h1>
                    {state.data.map((hotel, index) => {
                        return (<div className="mt-3" key={index} >
                            <Link to={`hotel/${hotel.id}`} style={{"text-decoration": "none"}} >
                                <div className="col text-dark">
                                    <div className="d-sm-flex border">
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
                                            <p>{hotel.location}</p>
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
        </>
    )
}
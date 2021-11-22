import React from 'react'
import { useEffect, useState } from "react";
import Reservations from "../../components/Reservations/Reservations";
import "./reservations.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Saved() {
    const [reservations, setPosts] = useState([]);
    const { search } = useLocation();
    useEffect(() => {
        const fetchReservations = async () => {
          const res = await axios.get("/hotels" + search);
          setPosts(res.data);
        };
        fetchReservations();
      }, [search]);

    return (
        <>
            <img
            className="headerImg"
            src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            />
            <div>
                <div className="headerTitles">
                <span className="headerTitleLg">Reservations</span>
                </div>
            </div>
            <div>
                <Reservations reservations={reservations} />
            </div>
        </>
    )
}
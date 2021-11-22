
    import React, { useContext, useState } from 'react'
    import axios from "axios";
    import { Context } from "../../context/Context";
    
    export default function Booking(props) {
        const { user } = useContext(Context);
    
        const [bookingDetails, updateDetails] = useState({
            username: user.username,
            checkIn: "",
            checkOut: "",
            datebought: "",
            hotel: "",
            address: "",
            adults: 0,
            childs: 0,
            totalDays: 0,
            totalprice: 0,
            showBooking: true,
            dbooking: false,
            showPayment: false,
            bookingMsg: false
        })
    
        const handleChange = (event) => {
            console.log(event.target.value)
            const { name } = event.target;
            // console.log(e.target.value)
            updateDetails({
                ...bookingDetails,
                [name]: event.target.value
            });
        };
    
        const handleSubmit = (event) => {
            let totaldays = datediff(parseDate(bookingDetails.checkIn), parseDate(bookingDetails.checkOut))
            updateDetails({
                ...bookingDetails,
                hotel: props.state.hotel.name,
                address: props.state.hotel.location,
                totalDays: totaldays,
                showBooking: false,
                dbooking: true
            });

            event.preventDefault()
        }
    
        const parseDate = (str) => {
            var mdy = str.split('-');
            return new Date(mdy);
        }
    
        const datediff = (first, second) => {
            return Math.round((second - first) / (1000 * 60 * 60 * 24));
        }
    
    
        const today = new Date();
        const date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    
        const checkOutD = (str) => {
            let DateStr = str.split('-')
            DateStr[2] = Number(DateStr[2]) + 1
            let d = new Date(DateStr[0], DateStr[1], DateStr[2])
            let chekOutD = d.getFullYear() + '-' + ('0' + (d.getMonth())).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
            return chekOutD
        }
    
        const getPrice = (price, totalDays, persons) => {
            let ans = price * persons
            let rate = ans * totalDays
            return rate
        }
    
        const confirmBooking = () => {
            updateDetails({
                ...bookingDetails,
                dbooking: false,
                showPayment: true,
                totalprice: document.getElementById("totalPrice").innerHTML
            });
        }
    
        const confirmPayment = async (e) => {
            updateDetails({
                ...bookingDetails,
                dbooking: false,
                showPayment: false,
                bookingMsg: true
            });
            console.log(bookingDetails)
            e.preventDefault();
            try {
                const res = await axios.post("/hotels", {
                    hotel: bookingDetails.hotel,
                    address: bookingDetails.address,
                    username: bookingDetails.username,
                    price: bookingDetails.totalprice,
                    checkIn: bookingDetails.checkIn,
                    checkOut: bookingDetails.checkOut,
                    adults: bookingDetails.adults,
                    children: bookingDetails.childs
                });
                res.data && window.location.replace("/");
            } catch (err) {}
        }

    
        return (
            <div>
                <section className={bookingDetails.showBooking ? "d-block" : "d-none"}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="input-group input-group-lg mt-5">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Check In</span>
                                </div>
                                <input type="date" min={date} name="checkIn" onChange={handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                            </div>
                            <div className="input-group input-group-lg mt-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Check Out</span>
                                </div>
                                <input type="date" min={checkOutD(bookingDetails.checkIn)} name="checkOut" onChange={handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                            </div>
                            <div className="d-flex">
                                <div className="input-group input-group-lg mt-3 m-1">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Persons</span>
                                    </div>
                                    <input type="number" min="1" max={props.state.hotel.maximumAdultsAllow} name="adults" onChange={handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                                </div>
                                <div className="input-group input-group-lg mt-3 m-1">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Childs</span>
                                    </div>
                                    <input type="number" min="0" max={props.state.hotel.maximumChildsAllow} name="childs" onChange={handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                                </div>
                            </div>
    
                            <button type="submit" className="btn btn-lg btn-block btn-danger mt-4">Book Now</button>
    
                        </div>
                    </form>
                </section>
                <section className={bookingDetails.dbooking ? "d-block" : "d-none"}>
    
                    <table className="table table-borderless">
                        <tbody>
    
                            <tr>
                                <th>Check In</th>
                                <td><h4>{bookingDetails.checkIn}</h4></td>
                            </tr>
                            <tr>
                                <th>Check Out</th>
                                <td><h4>{bookingDetails.checkOut}</h4></td>
                            </tr>
                            <tr>
                                <th>No. of Persons</th>
                                <td><h4>{bookingDetails.adults}</h4></td>
                            </tr>
                            <tr>
                                <th>No. of Childs</th>
                                <td><h4>{bookingDetails.childs}</h4></td>
                            </tr>
                            <tr>
                                <th>Total Days</th>
                                <td><h4>{bookingDetails.totalDays}</h4></td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td><h4 id="totalPrice">
                                    {undefined}{getPrice(props.state.hotel.price, bookingDetails.totalDays, bookingDetails.adults)}
                                </h4></td>
                            </tr>
    
                        </tbody>
    
                    </table>
                    
                    <button className="btn btn-info btn-block rounded" onClick={confirmBooking}>Confirm Booking</button>
                </section>
    
                <section className={bookingDetails.showPayment ? "d-block" : "d-none"}>
                    <div className="card text-dark" style={{ width: "24rem" }} >
                        <div className="card-header">
                            <div className="row my-0">
                                <h5 className="mt-1 font-weight-bold" >Payment Details</h5>
                                <div className="display-td" >
                                    {/*<img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
    
    
                        <div className="card-body">
    
                            <label htmlFor="cardNumber">Card Number</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="cardNumber" placeholder="Valid card number" value="6969-6969-6969" aria-describedby="basic-addon2" readOnly />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2"><i className="fa fa-credit-card"></i></span>
                                </div>
                            </div>
    
                            <div className="form-row">
                                <div className="col">
                                    <label htmlFor="expireDate">Expire Date </label>
                                    <input type="text" id="expireDate" className="form-control" value="08/2025" placeholder="MM/YY" readOnly />
                                </div>
                                <div className="col">
                                    <label htmlFor="cardCVV">CVV</label>
                                    <input type="password" value="911" id="cardCVV" className="form-control" placeholder="CVV" readOnly />
                                </div>
                            </div>
    
                            <label htmlFor="AmountPay" className="mt-3">Amount to Pay</label>
                            <div className="input-group mb-2">
                                <div className="col mb-3">
                                    <input type="text" value={bookingDetails.totalprice} className="form-control" placeholder="Ammout to Pay" readOnly />
                                </div>
                            </div>

                            <form onSubmit={confirmPayment}>
                                <button href="#" type="submit" className="btn btn-primary mt-3 btn-block">Confirm Payment</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
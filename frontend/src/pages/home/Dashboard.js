import React from 'react'
import "./dashboard-section.css"



function Dashboard() {
    return (
        <>
            <div className="dash-img">
                <div className="container d-flex justify-content-center text-center sub">
                    Plan your trip like never before
                 </div>
            </div>
            <section className="dashboard-sections">
                <div className="section-1-container">
                <h1 className="text-center">Our Destinations</h1>
                    <div className="wrapper d-flex justify-content-center flex-wrap">
                        <div className="section-1-content img-1">
                        <span className="btn-light btn-sm btn">Los Angeles</span>
                        </div>
                        <div className="section-1-content img-2">
                        <span className="btn-light btn-sm btn">London</span>
                        </div>
                        <div className="section-1-content img-3">
                        <span className="btn-light btn-sm btn">Cancun</span>
                        </div>
                        <div className="section-1-content img-4">
                        <span className="btn-light btn-sm btn">New York City</span>
                        </div>
                        <div className="section-1-content img-5">
                        <span className="btn-light btn-sm btn">Sydney</span>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="dashboard-sections">
                    <div className="section-1-container bottom">
                    <div className="section-2-main d-flex justify-content-center">
                        <h1>Fifteen Affiliated Hotels</h1>
                    </div>
                    <div className="wrapper d-flex justify-content-center flex-wrap">
                        <div className="section-2-content hotel1 hi"></div>
                        <div className="section-2-content hotel2 hi"></div>
                        <div className="section-2-content hotel3 hi"></div>
                        <div className="section-2-content hotel4 hi"></div>
                        <div className="section-2-content hotel5 hi"></div>
                        <div className="section-2-content hotel6 hi"></div>
                        <div className="section-2-content hotel7 hi"></div>
                        <div className="section-2-content hotel8 hi"></div>
                        <div className="section-2-content hotel9 hi"></div>
                        <div className="section-2-content hotel10 hi"></div>
                        <div className="section-2-content hotel11 hi"></div>
                        <div className="section-2-content hotel12 hi"></div>
                        <div className="section-2-content hotel13 hi"></div>
                        <div className="section-2-content hotel14 hi"></div>
                        <div className="section-2-content hotel15 hi"></div>
                    </div>
                </div>
            </section>
            
        </>
    );
}
export default Dashboard;
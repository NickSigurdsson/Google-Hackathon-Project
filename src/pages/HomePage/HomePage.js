import React from "react";
import "./HomePage.scss";
import FilterBar from "../../components/FilterBar/FilterBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Alerts from "../../components/Alerts/Alerts";
import WebAccount from "../../components/WebAccount/WebAccount";

import options from "../../assets/icons/Settings icon.svg";
import zoomOut from "../../assets/icons/zoom out.svg";
import zoomIn from "../../assets/icons/zoom in.svg";
import Video from "../../components/Video/Video";

function HomePage() {
    return (
        <>
            <Header />
            <div className="Text-size">
                <h1 className="Text-size__title">Text size</h1>
                <img
                    className="Text-size__zoom-in"
                    src={zoomIn}
                    alt="zoom-in"
                ></img>
                <img
                    className="Text-size__zoom-out"
                    src={zoomOut}
                    alt="zoom-out"
                ></img>
            </div>

            <h1 className="Home__title">Alerts</h1>
            <section className="Content-Section">
                <div className="Dashboard">
                    <h2 className="Dashboard__title">Dashboard</h2>
                    <div className="Dashboard__wrapper">
                        <div className="Dashboard__container">
                            <h3 className="Dashboard__alerts">My Alerts</h3>
                            <img
                                className="Dashboard__options"
                                src={options}
                                alt="options icon"
                            ></img>
                        </div>
                        <Alerts />
                        <h3 className="Dashboard__web">Me on the web</h3>
                        <WebAccount />
                    </div>
                </div>

                <div>
                    <FilterBar />

                    <div>
                        <h2 className="Video-title">How to setup an Alert?</h2>
                        <Video />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default HomePage;

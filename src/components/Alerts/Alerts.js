import { useState, useEffect } from "react";
import axios from "axios";
import "./Alerts.scss";
import edit from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";

function Alerts() {
    const [alerts, setAlerts] = useState([]);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/alerts").then((response) => {
            setAlerts(response.data);
        });
    }, []);
    if (!alerts) {
        return <p>loading...</p>;
    }

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOff = () => {
        setHover(false);
    };

    // console.log(alerts[0].Name);

    return alerts.map((alert) => {
        return (
            <div
                key={alert.id}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOff}
                className="Alerts"
            >
                <div className="Alerts__container">
                    <h2 className="Alerts__name">{alert.Name}</h2>
                    <div className="Alerts__img-container">
                        <img
                            className={
                                hover
                                    ? "Alerts__edit --visible"
                                    : "Alerts__edit"
                            }
                            src={edit}
                            alt="edit icon"
                        ></img>
                        <p
                            className={
                                hover
                                    ? "Alerts__label --visible"
                                    : "Alerts__label"
                            }
                        >
                            Edit
                        </p>
                    </div>
                    <div className="Alerts__img-container">
                        <img
                            className={
                                hover
                                    ? "Alerts__delete --visible"
                                    : "Alerts__edit"
                            }
                            src={deleteIcon}
                            alt="delete icon"
                        ></img>
                        <p
                            className={
                                hover
                                    ? "Alerts__label --visible"
                                    : "Alerts__label"
                            }
                        >
                            Delete
                        </p>
                    </div>
                </div>
            </div>
        );
    });
}

export default Alerts;

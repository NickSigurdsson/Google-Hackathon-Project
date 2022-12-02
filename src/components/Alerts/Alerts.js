import { useState, useEffect } from "react";
import axios from "axios";
import "./Alerts.scss";

function Alerts(props) {
    const [alerts, setArticles] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/alerts").then((response) => {
            setArticles(response.data);
        });
    }, []);

    console.log(alerts[0].Name);
    return (
        <div className="Alerts">
            <div>
                <h2 className="Alerts__name">{alerts[0].Name}</h2>
                <img></img>
                <img></img>
            </div>
        </div>
    );
}

export default Alerts;

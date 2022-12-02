import { useState, useEffect } from "react-router-dom";
import axios from "axios";
import "./Alerts.scss";

function Alerts(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("http:localhost:8080/articles").then((response) => {
            setArticles(response.data);
        });
    }, []);

    console.log(articles);
    return (
        <div className="Alerts">
            <div>
                <h2 className="Alerts__name">Dog treats</h2>
                <img></img>
                <img></img>
            </div>
        </div>
    );
}

export default Alerts;

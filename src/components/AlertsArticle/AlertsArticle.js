import "./AlertsArticle.scss";

function AlertsArticle({ data }) {
    console.log(data);
    if (!data) {
        return;
    }
    console.log(data.title);
    return (
        <div className="Alerts-Article">
            <div className="Alerts-Article__text-container">
                <p className="Alerts-Article__title">{data.Title}</p>
                <a source={data.Source} className="Alerts-Article__source">
                    {data.Source}
                </a>
                <p className="Alerts-Article__description">
                    {data.Description}
                </p>
            </div>
        </div>
    );
}

export default AlertsArticle;

import "./Video.scss";
import googleVideo from "../../assets/video/Y2Mate.is - Google Alerts - How to set up and use Google Alerts-fjvHQx0GZpA-480p-1660060690967.mp4";
import Alerts from "../../assets/icons/alerts.png";
function Video() {
    return (
        <div className="Video">
            <video
                className="Video__video"
                controls
                poster={Alerts}
                preload="auto"
            >
                <source source={googleVideo} type="video/mp4"></source>
            </video>
        </div>
    );
}

export default Video;

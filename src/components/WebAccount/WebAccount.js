import "./WebAccount.scss";
import plus from "../../assets/icons/Add.svg";

function WebAccount() {
    return (
        <div className="WebAccount">
            <div className="WebAccount__container">
                <p className="WebAccount__account">james.marshall@gmail.com</p>
                <img
                    className="WebAccount__plus"
                    src={plus}
                    alt="plus icon"
                ></img>
            </div>
            <div className="WebAccount__container">
                <p className="WebAccount__account">Jame's pet store</p>
                <img
                    className="WebAccount__plus"
                    src={plus}
                    alt="plus icon"
                ></img>
            </div>
            <div className="WebAccount__container">
                <p className="WebAccount__account">James Marshall</p>
                <img
                    className="WebAccount__plus"
                    src={plus}
                    alt="plus icon"
                ></img>
            </div>
        </div>
    );
}

export default WebAccount;

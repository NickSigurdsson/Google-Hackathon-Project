import logo from "../../assets/logos/google-svgrepo-com.svg";
import profile from "../../assets/icons/profile_pic1.png";
import candyBox from "../../assets/icons/menu-svgrepo-com.svg";
import "./Header.scss";
function Header(props) {
    return (
        <div className="Header">
            <img
                className="Header__google-logo"
                src={logo}
                alt="google logo"
            ></img>
            <div className="Header__icon-container">
                <img
                    className="Header__candy-box"
                    src={candyBox}
                    alt="candy box 3x3 square"
                ></img>
                <img
                    className="Header__profile-picture"
                    src={profile}
                    alt="google profile, letter M"
                ></img>
            </div>
        </div>
    );
}

export default Header;

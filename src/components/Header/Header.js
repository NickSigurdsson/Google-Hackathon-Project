import logo from "../../assets/logos/google-svgrepo-com.svg";
import profile from "../../assets/icons/profile_pic.png";
import candyBox from "../../assets/icons/candy-box.png";
import "./Header.scss";
function Header(props) {
    return (
        <div className="Header">
            <img
                className="Header__google-logo"
                src={logo}
                alt="google logo"
            ></img>
            <div>
                <img src={profile} alt="google profile, letter M"></img>
                <img src={candyBox} alt="candy box 3x3 square"></img>
            </div>
        </div>
    );
}

export default Header;

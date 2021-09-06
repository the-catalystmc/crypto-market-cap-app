import '../scss/style.scss';
import { FaAngleLeft, FaMicrophone, FaCog } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="NavBar-Container">
            <p><FaAngleLeft /> 2021</p>
            <p>Top 10 CryptoCurrencies</p>
            <div>
                <i><FaMicrophone /></i>
                <i><FaCog /></i>
            </div>
        </div>
    )
}

export default NavBar;
import { NavLink, Link } from 'react-router-dom';
import '../scss/style.scss';
import { FaAngleLeft, FaMicrophone, FaCog } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="NavBar-Container">
            <p>
                <NavLink className="a-nav" to="/">
                    <FaAngleLeft />
                </NavLink> 2021
            </p>
            <p>Top 10 CryptoCurrencies</p>
            <div>
                <i><FaMicrophone /></i>
                <i><FaCog /></i>
            </div>
        </div>
    )
}

const Heading = () => {
    if (home) {
        return (
            <p>Top 10 CryptoCurrencies</p>
        )
    }
    return <p>Currency Stats</p>
}

export default NavBar;
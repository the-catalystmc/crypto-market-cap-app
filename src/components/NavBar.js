import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import '../scss/style.scss';
import { FaAngleLeft, FaMicrophone, FaCog } from "react-icons/fa";

const NavBar = () => {
    const dispatch = useDispatch();
    const home = useSelector((state) => state.currency.home);

    return (
        <div className="NavBar-Container">
            <Heading home={home} />
        </div>
    )
}

const Heading = ({ home }) => {
    if (!home) {
        return (
            <div className="NavBar-Container">          
            <p>Top 10 CryptoCurrencies</p>
            <div>
                <i><FaMicrophone /></i>
                <i><FaCog /></i>
            </div>
            </div>
        )
    }
    return (
        <div className="NavBar-Container">
            <p>
            <NavLink className="a-nav" to="/">
                <FaAngleLeft />
            </NavLink> 2021
        </p>
        <p>Currency Stats</p>
        <div>
                <i><FaMicrophone /></i>
                <i><FaCog /></i>
            </div>
        </div>
    )
}

export default NavBar;
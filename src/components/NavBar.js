import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import '../scss/style.scss';
import { FaAngleLeft, FaMicrophone, FaCog } from "react-icons/fa";

const NavBar = () => {
    const dispatch = useDispatch();
    const home = useSelector((state) => state.currency.home);

    return (
        <div className="NavBar-Container">
            <p>
                <NavLink className="a-nav" to="/">
                    <FaAngleLeft />
                </NavLink> 2021
            </p>
            <div><Heading home={home} /></div>
            <div>
                <i><FaMicrophone /></i>
                <i><FaCog /></i>
            </div>
        </div>
    )
}

const Heading = ({ home }) => {
    if (!home) {
        return (
            <p>Top 10 CryptoCurrencies</p>
        )
    }
    return <p>Currency Stats</p>
}

export default NavBar;
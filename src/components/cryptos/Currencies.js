import { NavLink, Link } from 'react-router-dom';
import Header from "../Header";
import Currency from "./Currency";

function Currencies() {
    return (
        <div className="Currencies">
            <Header />
            <NavLink className="a-nav" to="/stats">
                <Currency />
            </NavLink>
        </div>
    );
}

export default Currencies;
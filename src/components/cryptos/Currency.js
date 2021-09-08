import {
    Link,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import logo from '../../assets/crypto.png';
import { FiArrowRightCircle } from "react-icons/fi";
import { statPageSuccess } from "../../redux/currencies";

import Stats from "../Stats";

const Currency = ({ currency }) => {
    const dispatch = useDispatch();

    const {
        id, symbol, name, image, price, marketCap, rank, totalVolume, high, low,
    } = currency;

    return (
        //Wrap in NavLink to ID
        <li className="Currency">
            <Link 
            key={id} 
            to={`/details/${id}`}
            onClick={() => {
                dispatch(statPageSuccess(true));
              }}
              value={id}
            >
                <div className="Currency-Container">
                    <div className="Currency-Picture">
                    <FiArrowRightCircle className="Arrow" />
                        <div className="Symbol">
                        <h2>{symbol.toUpperCase()}</h2>
                        </div>
                    </div>
                    <div className="Currency-Name">
                        <h3>{name}</h3>
                        <p>{`$${marketCap}`}</p>
                    </div>
                </div>
            </Link>
        </li>
    )
}

Currency.propTypes = {
    id: PropTypes.any,
    symbol: PropTypes.any,
    name: PropTypes.any,
    image: PropTypes.any,
    price: PropTypes.any,
    marketCap: PropTypes.any,
    rank: PropTypes.any,
    totalVolume: PropTypes.any,
    high: PropTypes.any,
    low: PropTypes.any,
}.isRequired;

export default Currency;
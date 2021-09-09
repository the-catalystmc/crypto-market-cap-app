import { NavLink, Link } from 'react-router-dom';

const Stat = ({ currency }) => {
    const { rank, low, high, price, marketCap, totalVolume } = currency;

    return (
            <ul className="Stat-Container">
                <li><h3>Rank</h3><p>{rank}</p></li>
                <li><h3>Price</h3><p>{price}</p></li>
                <li><h3>24 Hour Low</h3><p>{low}</p></li>
                <li><h3>24 Hour High</h3><p>{high}</p></li>
                <li><h3>Total Volume</h3><p>{totalVolume}</p></li>
            </ul>
    )
}

export default Stat;
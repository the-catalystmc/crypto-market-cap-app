import { NavLink, Link } from 'react-router-dom';

const Stat = ({ currency }) => {
    const { rank, low, high, price, marketCap, totalVolume } = currency;

    return (
        <div className="Stat-Container">
            <ul>
                <li><p>Rank</p><p>{rank}</p></li>
                <li><p>24 Hour Low</p><p>{low}</p></li>
                <li><p>24 Hour High</p><p>{high}</p></li>
                <li><p>Price</p><p>{price}</p></li>
                <li><p>Total Volume</p><p>{totalVolume}</p></li>
            </ul>
        </div>
    )
}

export default Stat;
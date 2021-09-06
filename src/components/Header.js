import logo from '../assets/crypto.png';

const Header = () => {
    return (
        <div>
            <div className="Header-Container">
                <div className="Header-Picture">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="Header-Name">
                    <p>CryptoCurrencies</p>
                    <p>6,000,000 Market Capitalization</p>
                </div>
            </div>
            <InfoTitle />
        </div>
    )
}

const InfoTitle = () => {
    return (
        <div>
            <h3>STATS BY CURRENCY</h3>
        </div>
    )
}

export default Header;
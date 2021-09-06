import logo from '../assets/crypto.png';
import { FiArrowRightCircle } from "react-icons/fi";

const Currency = () => {
    return (
        <div>
            <div className="Currency-Container">
                <div className="Currency-Picture">
                    <img src={logo} alt="Logo" />
                    <FiArrowRightCircle />
                </div>
                <div className="Currency-Name">
                    <h4>Currency</h4>
                    <p>1,000,000</p>
                </div>
            </div>
        </div>
    )
}

export default Currency;
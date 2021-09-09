const Filter = ({ handleSelection }) => {
    return (
        <select onChange={(e) => handleSelection(e)} className="Filter">
            <option value="all">All</option>
            <option value="200000000000">2 Billion+</option>
            <option value="300000000000">3 Billion+</option>
            <option value="400000000000">4 Billion+</option>
            <option value="500000000000">5 Billion+</option>
            <option value="600000000000">6 Billion+</option>
            <option value="700000000000">7 Billion+</option>
            <option value="800000000000">8 Billion+</option>
        </select>
    )
}

export default Filter;
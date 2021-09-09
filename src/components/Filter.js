const Filter = () => {
    return (
        <select onChange={(e) => handleSelection(e)} className="Filter">
            <option value="all">All</option>
            <option value="200000000000">2 Trillion+</option>
            <option value="300000000000">3 Trillion+</option>
            <option value="400000000000">4 Trillion+</option>
            <option value="500000000000">5 Trillion+</option>
            <option value="600000000000">6 Trillion+</option>
            <option value="700000000000">7 Trillion+</option>
            <option value="800000000000">8 Trillion+</option>
        </select>
    )
}

export default Filter;
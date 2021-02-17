
const Shopfilter = ({filters, clickFunc}) => {
    return (
        <div className="filter-container">
            <span className="filter-click" onClick={() => clickFunc("All")}>All</span>
            {filters.map((filter) => (
                <span className="filter-click" onClick={() => clickFunc(filter.name)} key={filter.id}>{filter.name}</span>
            ))}
        </div>
    )
}

export default Shopfilter

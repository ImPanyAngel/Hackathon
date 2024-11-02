import searchIcon from '../assets/search-icon.png';

function FilterColumn() {
    const items = ['Optiojkewn 1', 'Option 2', 'Option 3', 'Option 4'];


    return(
        <div className="filter-container">
            <div className="search-container">
                <input className="search-input" placeholder="Search..."></input>
                <button className="search-button"><img className='search-button-img' src={searchIcon} alt='search'/></button>
            </div>
            <div className='courses-container'>
                <p className='section-title'>Courses...</p>
                <div className="checkbox-list">
                    {items.map((item) => (
                        <label key={item} className="checkbox-item">
                            {item}
                            <input
                                type="checkbox"
                                value={item}
                            />
                        </label>
                    ))}
                </div>
            </div>
            <div className='skills-container'>
                <p className='section-title'>Skills...</p>
                <div className="checkbox-list">
                    {items.map((item) => (
                        <label key={item} className="checkbox-item">
                            {item}
                            <input
                                type="checkbox"
                                value={item}
                            />
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterColumn;

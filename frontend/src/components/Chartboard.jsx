import React, { useState } from 'react'

import Charts from './Charts';
import Filters from './Filters';
import axios from 'axios';

const Chartboard = ({ data, setMainData }) => {
    const [search, setSearch] = useState("");
    const handleSearchResult = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/data/any/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='filter-section'>
            <form className="form-inline" onSubmit={handleSearchResult} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search topics, sector, region, PEST, source, SWOT, country, city..." aria-label="Search" onChange={(e) => setSearch(e.target.value)} style={{ marginRight: '1rem' }} />
                <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <Filters setMainData={setMainData} />
            <Charts data={data} />
        </div>
    );
}

export default Chartboard
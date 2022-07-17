import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import searchDataSet from './../../data/searchDataSet.json'

function Result() {
    // React Router v6 calls these the “search params” due to them existing on the window.location.search object
    const [searchParams, setSearchParams] = useSearchParams("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const material = searchParams.get('material');
        const volume = searchParams.get('volume');
        const brand = searchParams.get('brand');

        let results = [];

        if (material !== "" && volume !== "" && brand !== "") {
            results = searchDataSet.filter((bottle) => {
                // return true if material, volume and brand matched
                if (material === bottle.Material && volume === bottle.Volume && brand === bottle.Brand) {
                    return true;
                }
            });
        }

        setSearchResults(results);
    }, [window.location.search]);

    return (
        <>
            <h5 className='result'>Result:</h5>
            {searchResults.length !==0 ? <p>Returnable</p> : <p>Not Returnable</p>}
            <br />
                {searchResults.map((result, index) => {
                   <p>{ result.Value }</p>
                })}
            <br />
            <p>You can return it here:</p>
        </>
    )
}

export default Result;
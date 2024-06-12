import React from 'react'

function Search({ params }) {
    const qry = params.query;
    return (
        <div>{qry}</div>
    )
}

export default Search
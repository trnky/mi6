import React from 'react';

export default function PeopleList({search_term, setSearchTerm}) {

    return (
        <div className="people-of-interest__search">
            <label htmlFor="">Search: </label>
            <input 
            type="search" 
            value={search_term} 
            placeholder="Search by person name..."
            onChange={(e) => setSearchTerm(e.target.value)}
            />

        </div>
    )
}
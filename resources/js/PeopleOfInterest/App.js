import React, { useState } from 'react';
import SearchInput from './SearchInput';
import PeopleList from './PeopleList';
import StatusFilter from './StatusFilter';

 
export default function App() {

const [search_term, setSearchTerm] = useState("");
const [selected_status, setSelectedStatus] = useState("");


    return (

        <div className="people-of-intrest">
            <h1>This is the People of interest component</h1>

            <StatusFilter selected_status={selected_status} setSelectedStatus={setSelectedStatus} />
            
            <SearchInput search_term={search_term} setSearchTerm={setSearchTerm}/>

            <PeopleList search_term={search_term} selected_status={selected_status}/>
        </div>
    )
}
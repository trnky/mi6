import React, { useState } from 'react';
import SearchInput from './SearchInput';
import PeopleList from './PeopleList';

 
export default function App() {

const [search_term, setSearchTerm] = useState("");


    return (

        <div className="people-of-intrest">
            <h1>This is the People of interest component</h1>
            
            <SearchInput search_term={search_term} setSearchTerm={setSearchTerm}/>

            <PeopleList search_term={search_term}/>
        </div>
    )
}
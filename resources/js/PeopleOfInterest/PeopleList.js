import React, { useEffect, useState } from 'react';



export default function PeopleList({search_term, selected_status}) {

    const [data, setData] = useState([]);

    const loadData = async () => {
        console.log(search_term);
        const url = '/api/request?search=' + encodeURIComponent(search_term) + '&status=' + encodeURIComponent(selected_status);
        console.log(url);
        const resp = await fetch(url);
        const result = await resp.json();
        console.log(result);
        result && !!result.length && setData(result);
    }

    useEffect(() => {
        loadData();
    }, [search_term, selected_status])

    return (
        <div className="people-of-interest__list">
            
            {data.map(person => (
                <li key={person.id} className="people-of-interest__person">
                    {person.name}
                </li>
            ))}

        </div>
    )
}
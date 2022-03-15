import { rest } from 'lodash';
import React, { useEffect, useState } from 'react';


function StatusFilter({selected_status, setSelectedStatus}) {

    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        const url = '/api/statuses';
        const resp = await fetch(url);
        const result = await resp.json();
        console.log(result);
        result && !!result.length && setStatuses(result);
    }

    useEffect(() => {
        loadStatuses();
    }, []);

    return (

        <section className="statuses">

        {statuses.map(status => (
            <button 
            className={ 'status-filter__status' } 
            key={status.id}
            onClick ={() => {setSelectedStatus(status.id)}}
            >
                { status.name }
                
            </button>
        ))
        
        }
        </section>
    )
}

export default StatusFilter;
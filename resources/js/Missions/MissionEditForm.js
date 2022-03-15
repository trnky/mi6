import axios from 'axios';
import React, { useState } from 'react';



function MissionEditForm() {

    const [values, setValues] = useState({
        name: '',
        year: 2022,
        outcome: 'planned'
    });
    
    const handleChange = (event) => {
        setValues(
            previous_values => {
                return (
                    {
                        ...previous_values, 
                    [event.target.name]: event.target.value
                    }
                );
            }
        );
    }

    const handleSubmit = async e => {
        e.preventDefault();

        //fetch
        const resp = await fetch('/api/missions', {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json'
            }
        })

        //axios
        const axiox_response = await axios.post('/api/missions', values)
    }

    const years = [];
    for(let i = 1900; i <= 2030; i++) {
        years.push(i);
    }

    return (

        

            <form
                className='edit-mission'
                action=""
                method="post"
                onSubmit={ handleSubmit }>

                <div className='form-group'>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={values.name}
                    onChange={ handleChange } />
                </div>

                <div className='form-group'>
                    <label>Year</label><br />
                    <select name="year" value={ values.year } onChange={ handleChange }>
                        {years.map(year => (
                            <option value={ year } key={year}>{year}</option>
                        ))}
                    </select>
                </div>

                <div className='form-group'>
                    <label>Outcome</label><br />
                    <select name="outcome" value={ values.outcome } onChange={ handleChange }>
                        <option value="planned">Planned</option>
                        <option value="in-progress">In progress</option>
                        <option value="success">Success</option>
                        <option value="failure">Failure</option>
                    </select>
                    
                </div>

                <button>Save</button>
            </form>

        
        
    )
}

export default MissionEditForm;
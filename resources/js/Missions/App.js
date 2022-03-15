import React from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import MissionEditForm from './MissionEditForm';
import MissionList from './MissionList';

function App() {
    return (
        <BrowserRouter>

            <nav>
                <Link to="/missions">List of missions</Link>
                &nbsp;
                <Link to="/missions/create">Create a new mission</Link>
            </nav>

            <Routes>
                
                <Route exact path="/missions" element={ <MissionList /> } />
                <Route exact path="/missions/create" element={ <MissionEditForm />} />
            
            </Routes>
        </BrowserRouter>
    )
}

export default App;
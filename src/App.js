import React, { useState } from 'react';
import './App.css';
import { CardList } from './components/Card';
import { Form } from './components/Form'

const App = ({title}) => {
    const [state, setState] = useState({profiles: []});

    const addNewProfile = (profileData) => {
        setState({
            profiles: [...state.profiles, profileData]
        });
    }

    return (
        <div>
            <div className="header">
                {title}
            </div>
            <Form onSubmit={addNewProfile}/>
            <CardList profiles={state.profiles}/>
        </div>
    );
}

export default App;

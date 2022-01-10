import React, { useState } from 'react';
import './App.css';
import { CardList } from './components/Card';
import { Form } from './components/Form'

const App = ({title}) => {
    
    const testData = [
        {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
        {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
        {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
        {name: "Nick Peceniak", avatar_url: "https://avatars2.githubusercontent.com/u/55647?v=4", company: "Magnite"},
    ];

    const [state, setState] = useState({profiles: testData});

    return (
        <div>
            <div className="header">
                {title}
            </div>
            <Form />
            <CardList profiles={state.profiles}/>
        </div>
    );
}

export default App;

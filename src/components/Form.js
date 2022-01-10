import React, {useState} from "react";
import axios from "axios";

export const Form = (props) => {
    const [state, setState] = useState({userName: ''});
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${state.userName}`);
        props.onSubmit(response.data);
        setState({userName: ''})
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Github Username"
                required
                value={state.userName}
                onChange={event => setState({userName: event.target.value})}></input>
            <button>Add Card</button>
        </form>
    )
}
import React, {useState} from "react";

export const Form = () => {
    // const userNameInput = React.createRef();
    const [state, setState] = useState({userName: ''});
    // debugger
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(userNameInput.current.value);
        console.log(state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Github Username"
                required
                value={state.value}
                onChange={event => setState({userName: event.target.value})}></input>
            <button>Add Card</button>
        </form>
    )
}
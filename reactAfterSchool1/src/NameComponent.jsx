import { useState } from 'react';

function NameComponent() {
    const [name, setName] = useState("bssm");
    const [invisible, setInvisible] = useState(false);

    const toggleInvisible = () => {
        setInvisible(prevInvisible => !prevInvisible); 
    };

    return (
        <div>
            <h2>name : {invisible ? '' : name}</h2> 
            <button onClick={toggleInvisible}>
                {invisible ? "Visible" : "Invisible"}
            </button>
        </div>
    );
}

export default NameComponent;

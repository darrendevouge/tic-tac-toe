import { useState } from 'react';

function Player({ name, symbol }) {

    const [ isEditing, setIsEditing ] = useState(false);
    
    const handleEditClick = () => {
        setIsEditing(true);
    }

    let playerName = (isEditing) ? <input type="text" required /> :
        <span className="player-name">{name}</span> 
             
    return (
        <>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </>
    )
}

export default Player
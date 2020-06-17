import React, { useState } from 'react';

export const Context2 = React.createContext(null);

const CharacterContext = props => {
    const [state, setState] = useState({
        characters: null,
        getCharacters: async url => {
            const resp = await fetch(url);
            const data = await resp.json();
            setState(prevState => {
                return { ...prevState, characters: data }
            })
        }
    })

    return (
        <Context2.Provider value={state}>
            {props.children}
        </Context2.Provider>
    )

}

export default CharacterContext;
import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const Detail = props => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getCharacter("https://swapi.dev/api/people/" + props.match.params.id + "/");
    }, [])

    return (
        <>
            <h1>Detail</h1>
            <p>{!!store.character && store.character.name}</p>
        </>
    )
}

export default Detail;
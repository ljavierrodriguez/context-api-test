import React, { useState, useEffect } from 'react';
import getState from './store';

export const Context = React.createContext(null);

const inyectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }));

        useEffect(() => {
            //
            state.actions.getCharacters("https://swapi.dev/api/people/");
            state.actions.getVehicles("https://swapi.dev/api/vehicles/");
        }, []);

        return (
            <Context.Provider value={state}>
               <PassedComponent {...props} />
            </Context.Provider>
        )
    }

    return StoreWrapper;
}

export default inyectContext;
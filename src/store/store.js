const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: null,
            character: null,
            vehicles: null,
        },
        actions: {
            getCharacters: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    characters: data
                })
            },
            getCharacter: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    character: data
                })
            },
            getVehicles: async url => {
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({
                    vehicles: data
                })
            }
        }
    }
}

export default getState;
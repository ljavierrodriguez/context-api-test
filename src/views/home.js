import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Home = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <h1>Home</h1>
            <ul>
                {
                    !!store.characters &&
                    store.characters.results.map((charac, i) => {
                        return <li key={i}>
                            <img src={"/img/"+ (charac.name.toLowerCase().replace(" ", "-")+".jpg")} alt={charac.name.toLowerCase().replace(" ", "-")}/>
                            {charac.name}
                            <Link className="btn btn-info" to={"/character/" + (
                                charac.url.replace("http://swapi.dev/api/people/", "").replace("/", "")
                            ) + "/details"}>Leer Mas {i}</Link>
                        </li>
                    })
                }
            </ul>

            <button className="btn btn-warning"
            onClick={() => {
                actions.getCharacters(store.characters.next.replace("http", "https"));
            }}>Next</button>
        </>
    )
}

export default Home;
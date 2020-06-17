import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import Card from '../components/card';
import CardBody from '../components/card-body';
import CardFooter from '../components/card-footer';

const Home = props => {
    const { store, actions } = useContext(Context);
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Home</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        !!store.characters &&
                        store.characters.results.map((charac, i) => {
                            return (
                                <div className="col-md-4" key={i}>
                                    <Card>
                                        <img src={"/img/" + (charac.name.toLowerCase().replace(" ", "-") + ".jpg")} className="card-img-top" alt={charac.name.toLowerCase().replace(" ", "-")} />
                                        <CardBody>
                                            <p className="card-text">Name: {charac.name}</p>
                                            <p className="card-text">Eyes: {charac.eye_color}</p>
                                            <p className="card-text">Hair: {charac.hair_color}</p>
                                            <p className="card-text">Gender: {charac.gender}</p>
                                        </CardBody>
                                        <CardFooter>
                                            <Link className="btn btn-info" to={"/character/" + (
                                                charac.url.replace("http://swapi.dev/api/people/", "").replace("/", "")
                                            ) + "/details"}>Leer Mas {i}</Link>
                                        </CardFooter>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <Card width={"540px"}>
                        <div className="row no-gutters">
                            <div className="col-md-5">
                                <img src="http://placehold.it/400x400/" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-7">
                                <CardBody>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </CardBody>
                            </div>
                        </div>
                        <CardFooter class=" d-flex justify-content-end">
                            <button className="btn btn-info m-1">
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn btn-danger m-1">
                                <i className="fa fa-trash"></i>
                            </button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-warning"
                            onClick={() => {
                                actions.getCharacters(store.characters.next.replace("http", "https"));
                            }}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
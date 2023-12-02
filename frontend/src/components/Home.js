import React from 'react';
import Container from 'react-bootstrap/Container';
import travellight from '../images/Travel_Light.png'
import map from '../images/Junktown_map.png'
import packrat from "../images/Pack_Rat.png";
import leader from "../images/Leader.png";
import bruiser from "../images/FoT_Bruiser.png";
import betrayer from "../images/Betrayer.png";
function Home({ isAuthenticated, username }) {
    return (
    <Container>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb mt-2">
                <li className="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
        </nav>

        <div className={"clearfix"}></div>

            <div className={"row"}>
                <div className={"col-lg-6 mt-2"}>
                    <div className={"card"}>
                        <div className={"card-body"}>
                            <a href={"/CharacterSheet"} className="btn btn-lg btn-outline-success col-12" role={"button"}>
                                Play as [ACTIVE CHARACTER]
                            </a>

                            <div>
                                <h2 className={"mt-2"}>{ username }'s Characters</h2>

                                <ul>
                                    <li>
                                        <div className={"row"}>
                                            <div className={"col-6"}>
                                                <p>Jimmy Bob (Lvl 20)</p>
                                            </div>
                                            <div className={"col-3"}>
                                                <button type="button" className="btn btn-outline-primary disabled">Select</button>
                                            </div>
                                            <div className={"col-3"}>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={"row"}>
                                            <div className={"col-6"}>
                                                <p>Bobby Jim (Lvl 10)</p>
                                            </div>
                                            <div className={"col-3"}>
                                                <button type="button" className="btn btn-primary">Select</button>
                                            </div>
                                            <div className={"col-3"}>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={"row"}>
                                            <div className={"col-6"}>
                                                <p>Bobby Jim (Lvl 10)</p>
                                            </div>
                                            <div className={"col-3"}>
                                                <button type="button" className="btn btn-primary">Select</button>
                                            </div>
                                            <div className={"col-3"}>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={"row"}>
                                            <div className={"col-6"}>
                                                <p>Bobby Jim (Lvl 10)</p>
                                            </div>
                                            <div className={"col-3"}>
                                                <button type="button" className="btn btn-primary">Select</button>
                                            </div>
                                            <div className={"col-3"}>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={"row"}>
                                            <div className={"col-6"}>
                                                <p>Bobby Jim (Lvl 10)</p>
                                            </div>
                                            <div className={"col-3"}>
                                                <button type="button" className="btn btn-primary">Select</button>
                                            </div>
                                            <div className={"col-3"}>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <hr />
                                <div className={"row"}>
                                    <div className={"col-6"}>
                                        <p className={"text-muted offset-2 mt-5 h3"}>Happy trails!</p>
                                    </div>
                                    <div className={"col-6"}>
                                        <img src={travellight} alt="" className={"col-md-8 offset-2 mt-md-2"} />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className={"col-lg-6 mt-2"}>
                    <div className={"card"}>
                        <div className={"card-body"}>
                            <a href={"/CreateCharacter"} className="btn btn-lg btn-outline-secondary col-12" role={"button"}>
                                Create a new character
                            </a>
                            <div className={"cpanel"}>
                                <h2 className={"mt-2"}>What is this tool?</h2>
                                <p>The <strong>Fallout Tabletop Character Creator</strong> is an interactive character sheet and character management tool for Fallout-themed tabletop campaigns.</p>
                                <h3>Pro Tips</h3>
                                <ul>
                                    <li>Radiation icons can be hovered over to view a tooltip. Try it now! <span data-toggle="tooltip" data-placement="top" title="Howdy!"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-radioactive" viewBox="0 0 16 16">
                              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                              <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                            </svg></span></li>
                                </ul>
                                <h3>Useful Links</h3>
                                <ul>
                                    <li><a href={"https://fallout.wiki/wiki/Character_creation_(Fallout:_New_Vegas)"}>Character Creation (Fallout: New Vegas)</a></li>
                                    <li><a href={"https://www.youtube.com/watch?v=zzICMIu5zFY"}>Marty Robbins - Big Iron</a></li>
                                </ul>
                            </div>
                            <img src={map} alt="" className={"mt-md-2 col-md-10 offset-1 img-fluid"} width={"90%"} />
                        </div>
                    </div>
                </div>
            </div>

    </Container>
    );
}
export default Home;

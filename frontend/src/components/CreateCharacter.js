import React from 'react';
import Container from 'react-bootstrap/Container';
import educated from '../images/Educated.png'
import livinganatomy from "../images/living_anatomy.png";

function CreateCharacter({ isAuthenticated, username }) {
    return (
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-2">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Create a Character</li>
                </ol>
            </nav>

            <h2>Create a Character</h2>


            <hr />
                <h3 className={"mt-3"}>General Information</h3>

                    <form>
                        <div className={"form-group mt-2"}>
                            <label htmlFor="name">Name</label>
                            <input type="text" className={"form-control"} id="name" placeholder="[CHAR NAME]" />
                        </div>
                    </form>

                    <form>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" rows="3"></textarea>
                        </div>
                    </form>

                    <form>
                        <div className="form-group">
                            <label htmlFor="backstory">Backstory</label>
                            <textarea className="form-control" id="backstory" rows="3"></textarea>
                        </div>
                    </form>

                    <form>
                        <div className={"form-group"}>
                            <label htmlFor="karma">Karma</label>
                            <select className={"form-control"} id={"karma"} defaultValue={"Neutral"}>
                                <option>Very Good</option>
                                <option>Good</option>
                                <option>Neutral</option>
                                <option>Evil</option>
                                <option>Very Evil</option>
                            </select>
                        </div>
                    </form>
            <hr />
            <h3 className={"mt-3"}>S.P.E.C.I.A.L.</h3>

                <p>Distribute 40 S.P.E.C.I.A.L. points between the seven primary stats. (Min=1, Max=10)</p>

                <form>
                    <div className={"row"}>
                        <div className={"form-group col-lg-3 mt-2"}>
                            <label htmlFor="strength">
                                Strength&nbsp;
                                <span data-toggle="tooltip" data-placement="top" title="A measure of your raw physical strength.">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                    </svg>
                                </span>
                            </label>
                            <input type="number" min="1" max="10" className={"form-control"} id="strength" placeholder="1" />
                        </div>
                        <div className={"form-group col-lg-3 mt-2"}>
                            <label htmlFor="perception">
                                Perception&nbsp;
                                <span data-toggle="tooltip" data-placement="top" title="How well you use your five senses, and also pertains to a 'sixth sense'.">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                    </svg>
                                </span>
                            </label>
                            <input type="number" min="1" max="10" className={"form-control"} id="perception" placeholder="1" />
                        </div>
                        <div className={"form-group col-lg-3 mt-2"}>
                            <label htmlFor="endurance">
                                Endurance&nbsp;
                                <span data-toggle="tooltip" data-placement="top" title="Your health and overall physical fitness.">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                    </svg>
                                </span>
                            </label>
                            <input type="number" min="1" max="10" className={"form-control"} id="endurance" placeholder="1" />
                        </div>
                        <div className={"form-group col-lg-3 mt-2"}>
                            <label htmlFor="charisma">
                                Charisma&nbsp;
                                <span data-toggle="tooltip" data-placement="top" title="Your overall attractiveness and likeability.">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                    </svg>
                                </span>
                            </label>
                            <input type="number" min="1" max="10" className={"form-control"} id="charisma" placeholder="1" />
                        </div>
                        <div className={"form-group col-lg-3 mt-2"}>
                            <label htmlFor="intelligence">
                                Intelligence&nbsp;
                                <span data-toggle="tooltip" data-placement="top" title="Your basic intellect, curiosity in the world and adeptness at critical thinking.">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                    </svg>
                                </span>
                            </label>
                            <input type="number" min="1" max="10" className={"form-control"} id="intelligence" placeholder="1" />
                        </div>
                        <div className={"form-group col-lg-3 mt-2"}>
                            <label htmlFor="agility">
                                Agility&nbsp;
                                <span data-toggle="tooltip" data-placement="top" title="A measure of your quickness and dexterity.">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                    </svg>
                                </span>
                            </label>
                            <input type="number" min="1" max="10" className={"form-control"} id="agility" placeholder="1" />
                        </div>
                        <div className={"form-group col-lg-3 mt-2"}>
                            <label htmlFor="luck">
                                Luck&nbsp;
                                <span data-toggle="tooltip" data-placement="top" title="How often good things happen to you by chance.">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                    </svg>
                                </span>
                            </label>
                            <input type="number" min="1" max="10" className={"form-control"} id="luck" placeholder="1" />
                        </div>
                    </div>
                </form>

            <hr />
            <h3 className={"mt-3"}>Skills</h3>

                <p>Select 3 favourite skills to tag (+15 points to tagged skills).</p>

                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <form>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="barter" />
                                <label className="form-check-label" htmlFor="barter">
                                    &nbsp;Barter&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Charisma x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="energy" />
                                <label className="form-check-label" htmlFor="energy">
                                    &nbsp;Energy Weapons&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Perception x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="explosives" />
                                <label className="form-check-label" htmlFor="explosives">
                                    &nbsp;Explosives&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Perception x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="guns" />
                                <label className="form-check-label" htmlFor="guns">
                                    &nbsp;Guns&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Agility x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="lockpick" />
                                <label className="form-check-label" htmlFor="lockpick">
                                    &nbsp;Lockpick&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Perception x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="medicine" />
                                <label className="form-check-label" htmlFor="medicine">
                                    &nbsp;Medicine&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Intelligence x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="melee" />
                                <label className="form-check-label" htmlFor="melee">
                                    &nbsp;Melee Weapons&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Strength x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="repair" />
                                <label className="form-check-label" htmlFor="repair">
                                    &nbsp;Repair&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Intelligence x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="science" />
                                <label className="form-check-label" htmlFor="science">
                                    &nbsp;Science&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Intelligence x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="sneak" />
                                <label className="form-check-label" htmlFor="sneak">
                                    &nbsp;Sneak&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Agility x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="speech" />
                                <label className="form-check-label" htmlFor="speech">
                                    &nbsp;Speech&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Charisma x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="survival" />
                                <label className="form-check-label" htmlFor="survival">
                                    &nbsp;Survival&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Endurance x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="unarmed" />
                                <label className="form-check-label" htmlFor="unarmed">
                                    &nbsp;Unarmed&nbsp;
                                    <span data-toggle="tooltip" data-placement="top" title="Initial level = 2 + (Endurance x 2) + (Luck / 2)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className={"col-md-4 offset-2 d-none d-sm-block"}>
                        <img src={educated} alt="" className={"mt-3 col-md-12 col-lg-8"} />
                    </div>
                </div>
            <hr />
            <div className={"mt-3 mb-5 d-flex justify-content-center"}>
                <button className="btn btn-lg btn-success">
                    Submit
                </button>
            </div>

        </Container>

    );
}
export default CreateCharacter;
import React from 'react';
import Container from 'react-bootstrap/Container';


function Level({ isAuthenticated, username }) {
    return (
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-2">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/CharacterSheet">Character Sheet</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Level Up</li>
                </ol>
            </nav>

            <h2>Level Up</h2>

            <p>When leveling up, you may allocate <strong>10 skill points</strong> and choose <strong>1 perk</strong>. All other changes come from perks, or should be done with your DM.</p>
            <p>Remember to update your hit points! Hover over the tooltip icons for more information.</p>
            <p>Leave any fields that you don't need to use untouched to use current values.</p>

            <hr />
            <h3 className={"mt-3"}>General</h3>
            <p>Add 1 to your level each time you level up, and ask your DM if your karma has changed.</p>
            <form>
                <div className={"row"}>
                    <div className={"form-group col-md-6 mt-2"}>
                        <label htmlFor="level">Level</label>
                        <input type="number" min="1" max="50" className={"form-control"} id="level" placeholder="[LEVEL]" />
                    </div>
                    <div className={"form-group col-md-6 mt-2"}>
                        <label htmlFor="karma">Karma</label>
                        <select className={"form-control col-sm-10"} id={"karma"} defaultValue={"Neutral"}>
                            <option>Very Good</option>
                            <option>Good</option>
                            <option>Neutral</option>
                            <option>Evil</option>
                            <option>Very Evil</option>
                        </select>
                    </div>
                </div>
            </form>

            <hr />
            <h3 className={"mt-3"}>S.P.E.C.I.A.L.</h3>
            <p>If you take the intense training perk, you may allocate one extra point to one of your S.P.E.C.I.A.L. stats.</p>
            <p>Each S.P.E.C.I.A.L. stat adds to skills, so check the tooltip to see which skills they add to.</p>

            <form>
                <div className={"row"}>
                    <div className={"form-group col-lg-3 mt-2"}>
                        <label htmlFor="strength">
                            Strength&nbsp;
                            <span data-toggle="tooltip" data-placement="top" title="+2 to Melee Weapons per point.">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                    <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                </svg>
                            </span>
                        </label>
                        <input type="number" min="1" max="10" className={"form-control"} id="strength" placeholder="[STRENGTH]" />
                    </div>
                    <div className={"form-group col-lg-3 mt-2"}>
                        <label htmlFor="perception">
                            Perception&nbsp;
                            <span data-toggle="tooltip" data-placement="top" title="+2 to Energy Weapons, Explosives, and Lockpick per point.">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                    <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                </svg>
                            </span>
                        </label>
                        <input type="number" min="1" max="10" className={"form-control"} id="perception" placeholder="[PERCEPTION]" />
                    </div>
                    <div className={"form-group col-lg-3 mt-2"}>
                        <label htmlFor="endurance">
                            Endurance&nbsp;
                            <span data-toggle="tooltip" data-placement="top" title="+2 to Survival,Unarmed, and Radiation Resistance, +5 to Poison Resistance, and +20 to Hit Points per point.">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                    <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                </svg>
                            </span>
                        </label>
                        <input type="number" min="1" max="10" className={"form-control"} id="endurance" placeholder="[ENDURANCE]" />
                    </div>
                    <div className={"form-group col-lg-3 mt-2"}>
                        <label htmlFor="charisma">
                            Charisma&nbsp;
                            <span data-toggle="tooltip" data-placement="top" title="+2 to Speech and Barter per point.">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                    <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                </svg>
                            </span>
                        </label>
                        <input type="number" min="1" max="10" className={"form-control"} id="charisma" placeholder="[CHARISMA]" />
                    </div>
                    <div className={"form-group col-lg-3 mt-2"}>
                        <label htmlFor="intelligence">
                            Intelligence&nbsp;
                            <span data-toggle="tooltip" data-placement="top" title="+2 to Repair and Science per point.">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                    <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                </svg>
                            </span>
                        </label>
                        <input type="number" min="1" max="10" className={"form-control"} id="intelligence" placeholder="[INTELLIGENCE]" />
                    </div>
                    <div className={"form-group col-lg-3 mt-2"}>
                        <label htmlFor="agility">
                            Agility&nbsp;
                            <span data-toggle="tooltip" data-placement="top" title="+2 to Sneak and Guns, +3 to Action Points per point.">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                    <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                </svg>
                            </span>
                        </label>
                        <input type="number" min="1" max="10" className={"form-control"} id="agility" placeholder="[AGILITY]" />
                    </div>
                    <div className={"form-group col-lg-3 mt-2"}>
                        <label htmlFor="luck">
                            Luck&nbsp;
                            <span data-toggle="tooltip" data-placement="top" title="+1 to all skills and Critical Chance per point.">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-radioactive" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                    <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                </svg>
                            </span>
                        </label>
                        <input type="number" min="1" max="10" className={"form-control"} id="luck" placeholder="[LUCK]" />
                    </div>
                </div>
            </form>

            <hr />
            <h3 className={"mt-3"}>Skills</h3>

            <form>
                <div className={"row"}>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="barter">Barter</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="barter" placeholder="[BARTER]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="energy">Energy Weapons</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="energy" placeholder="[ENERGY WEAPONS]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="explosives">Explosives</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="explosives" placeholder="[EXPLOSIVES]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="guns">Guns</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="guns" placeholder="[GUNS]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="lockpick">Lockpick</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="lockpick" placeholder="[LOCKPICK]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="medicine">Medicine</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="medicine" placeholder="[MEDICINE]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="melee">Melee Weapons</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="melee" placeholder="[MELEE WEAPONS]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="repair">Repair</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="repair" placeholder="[REPAIR]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="science">Science</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="science" placeholder="[SCIENCE]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="sneak">Sneak</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="sneak" placeholder="[SNEAK]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="speech">Speech</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="speech" placeholder="[SPEECH]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="survival">Survival</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="survival" placeholder="[SURVIVAL]" />
                    </div>
                    <div className={"form-group col-lg-2 mt-2"}>
                        <label htmlFor="unarmed">Unarmed</label>
                        <input type="number" min="2" max="100" className={"form-control"} id="unarmed" placeholder="[UNARMED]" />
                    </div>
                </div>
            </form>

            <hr />
            <h3 className={"mt-3"}>Attributes</h3>

                <form>
                    <div className={"row"}>
                        <div className={"form-group col-lg-2 mt-2"}>
                            <label htmlFor="hp">Hit Points</label>
                            <input type="number" min="0" max="400" className={"form-control"} id="hp" placeholder="[HIT POINTS]" />
                        </div>
                        <div className={"form-group col-lg-2 mt-2"}>
                            <label htmlFor="ac">Base Armor</label>
                            <input type="number" min="0" max="100" className={"form-control"} id="ac" placeholder="[BASE ARMOR]" />
                        </div>
                        <div className={"form-group col-lg-2 mt-2"}>
                            <label htmlFor="ap">Action Points</label>
                            <input type="number" min="65" max="120" className={"form-control"} id="ap" placeholder="[ACTION POINTS]" />
                        </div>
                        <div className={"form-group col-lg-2 mt-2"}>
                            <label htmlFor="poison">Poison Resistance</label>
                            <input type="number" min="0" max="85" className={"form-control"} id="poison" placeholder="[POISON RESIST]" />
                        </div>
                        <div className={"form-group col-lg-2 mt-2"}>
                            <label htmlFor="rad">Radiation Resistance</label>
                            <input type="number" min="0" max="85" className={"form-control"} id="rad" placeholder="[RAD RESIST]" />
                        </div>
                        <div className={"form-group col-lg-2 mt-2"}>
                            <label htmlFor="crit">Critical Chance</label>
                            <input type="number" min="1" max="10" className={"form-control"} id="crit" placeholder="[CRIT CHANCE]" />
                        </div>
                    </div>
                </form>

            <hr />
            <h3 className={"mt-3"}>Perks</h3>

                <div className={"row"}>
                    <form className={"col-md-6"}>
                        <div className="form-group">
                            <select className="form-control" id="perks">
                                <option>[PERK NAME]</option>
                                <option>[PERK NAME]</option>
                                <option>[PERK NAME]</option>
                                <option>[PERK NAME]</option>
                            </select>
                            <button type="submit" className="btn btn-outline-primary mt-2">View</button>
                        </div>
                    </form>
                    <div className={"col-md-6"}>
                        <h3>[PERK TITLE]</h3>
                        <p>[PERK DESCRIPTION]</p>
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
export default Level;
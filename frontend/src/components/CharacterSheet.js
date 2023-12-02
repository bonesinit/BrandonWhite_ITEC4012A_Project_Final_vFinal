import React from 'react';
import Container from 'react-bootstrap/Container';
import leader from '../images/Leader.png'
import bruiser from '../images/FoT_Bruiser.png'
import betrayer from '../images/Betrayer.png'
import packrat from '../images/Pack_Rat.png'
import livinganatomy from '../images/living_anatomy.png'
import radresist from '../images/Rad_Resistance.png'

function CharacterSheet({ isAuthenticated, username }) {
    return (
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-2">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Character Sheet</li>
                </ol>
            </nav>
            <div>
                <h2>[CHAR NAME], (Lvl. [CHAR LEVEL])</h2>

                <p className={"text-muted"}><em>([KARMA])</em></p>

            </div>
            <hr />
            <div className={"row"}>
                <h3>Stats</h3>
                <div className={"col-xs-12 col-lg-6"}>
                    <div className={"card"}>
                        <div className="card-body">

                            <h4>S.P.E.C.I.A.L.</h4>
                            <p>S.P.E.C.I.A.L. stats are your primary statistics. Each stat affects different skills, and can be used in a similar way to skill checks as well.</p>

                            <table className={"table table-bordered table-dark"}>
                                <tbody>
                                <tr className={"text-center"}>
                                    <th scope={"row"}>
                                        Strength&nbsp;
                                        <span data-toggle="tooltip" data-placement="top" title="A measure of your raw physical strength.">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                            </svg>
                                        </span>
                                    </th>
                                    <td>[ST]</td>
                                </tr>
                                <tr className={"text-center"}>
                                    <th scope={"row"}>
                                        Perception&nbsp;
                                        <span data-toggle="tooltip" data-placement="top" title="How well you use your five senses, and also pertains to a 'sixth sense'.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                    </th>
                                    <td>[PE]</td>
                                </tr>
                                <tr className={"text-center"}>
                                    <th scope={"row"}>
                                        Endurance&nbsp;
                                        <span data-toggle="tooltip" data-placement="top" title="Your health and overall physical fitness.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                    </th>
                                    <td>[EN]</td>
                                </tr>
                                <tr className={"text-center"}>
                                    <th scope={"row"}>
                                        Charisma&nbsp;
                                        <span data-toggle="tooltip" data-placement="top" title="Your overall attractiveness and likeability.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                    </th>
                                    <td>[CH]</td>
                                </tr>
                                <tr className={"text-center"}>
                                    <th scope={"row"}>
                                        Intelligence&nbsp;
                                        <span data-toggle="tooltip" data-placement="top" title="Your basic intellect, curiosity in the world and adeptness at critical thinking.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                    </th>
                                    <td>[IN]</td>
                                </tr>
                                <tr className={"text-center"}>
                                    <th scope={"row"}>
                                        Agility&nbsp;
                                        <span data-toggle="tooltip" data-placement="top" title="A measure of your quickness and dexterity.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                    </th>
                                    <td>[AG]</td>
                                </tr>
                                <tr className={"text-center"}>
                                    <th scope={"row"}>
                                        Luck&nbsp;
                                        <span data-toggle="tooltip" data-placement="top" title="How often good things happen to you by chance.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                    </th>
                                    <td>[LU]</td>
                                </tr>
                                </tbody>
                            </table>

                            <div className={"d-none d-md-block row"}>
                                <img src={packrat} alt="" className={"col-md-3 mt-md-4"} />
                                <img src={leader} alt="" className={"col-md-3 mt-md-4"} />
                                <img src={bruiser} alt="" className={"col-md-3 mt-md-4"} />
                                <img src={betrayer} alt="" className={"col-md-3 mt-md-4"} />
                                <p className={"text-muted text-center mt-3"}>Hall of Fame</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"col-xs-12 col-lg-6"}>
                    <div className={"card"}>
                        <div className="card-body">
                            <h4>Skills</h4>
                            <p>Skills are used to determine your effectiveness at certain actions, and can also be used for skill checks.</p>
                            <div>
                                <table className={"table table-bordered table-dark"}>
                                    <tbody>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Barter&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at trading and haggling. Also used to negotiate better quest rewards or occasionally as a bribe-like alternative to Speech.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[BARTER]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Energy Weapons&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at using energy-based weapons.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[ENERGY WEAPONS]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Explosives&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at using explosive weaponry, disarming mines, and crafting explosives.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[EXPLOSIVES]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Guns&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at using weapons that fire standard ammunition.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[GUNS]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Lockpick&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at picking locks.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[LOCKPICK]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Medicine&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at using medical tools, drugs, and for crafting Doctor's Bags.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[MEDICINE]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Melee Weapons&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at using melee weapons.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[MELEE WEAPONS]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Repair&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at repairing items and crafting items and ammunition.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[REPAIR]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Science&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at hacking terminals, recycling energy ammunition at workbenches, crafting chems, and many dialog checks.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[SCIENCE]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Sneak&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at remaining undetected and stealing.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[SNEAK]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Speech&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at persuading others. Also used to negotiate for better quest rewards and to talk your way out of combat, convincing people to give up vital information and succeeding in multiple Speech checks.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[SPEECH]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Survival&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at cooking, making poisons, and crafting 'natural' equipment and consumables. Also yields increased benefits from food.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[SURVIVAL]</td>
                                    </tr>
                                    <tr className={"text-center"}>
                                        <th scope={"row"}>
                                            Unarmed&nbsp;
                                            <span data-toggle="tooltip" data-placement="top" title="Proficiency at unarmed fighting.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="greenyellow" className="bi bi-radioactive" viewBox="0 0 16 16">
                                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"/>
                                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                                    </svg>
                                                </span>
                                        </th>
                                        <td>[UNARMED]</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={"clearfix"}></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div className={"card"}>
                    <div className="card-body row">
                        <h2>Perks</h2>
                        <div className={"col-md-6"}>
                            <div className="form-group">
                                <select className="form-control" id="perkselect">
                                    <option>[PERK NAME]</option>
                                    <option>[PERK NAME]</option>
                                    <option>[PERK NAME]</option>
                                    <option>[PERK NAME]</option>
                                </select>
                                <button type="submit" className="btn btn-outline-primary mt-2">View</button>
                            </div>
                        </div>
                        <div className={"col-md-6"}>
                            <h3>[PERK TITLE]</h3>
                            <p>[PERK DESCRIPTION]</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className={"row"}>
                <div className={"col-xs-12 col-lg-6"}>
                    <div className={"card"}>
                        <div className="card-body">
                            <h2>Condition</h2>
                            <div className={"row"}>
                                <div className={"col-md-8"}>
                                    <table className={"table table-bordered table-dark"}>
                                        <tbody>
                                        <tr className={"text-center"}>
                                            <th scope={"row"}><label htmlFor="hp">Hit Points</label></th>
                                            <td><input type="number" min="0" max="400" className={"form-control"} id="hp" placeholder="[HIT POINTS]" /></td>
                                            <td><button className="btn btn-outline-warning">Update</button></td>
                                        </tr>
                                        <tr className={"text-center"}>
                                            <th scope={"row"}><label htmlFor="ac">Base Armor</label></th>
                                            <td><input type="number" min="0" max="100" className={"form-control"} id="ac" placeholder="[BASE ARMOR]" /></td>
                                            <td><button className="btn btn-outline-warning">Update</button></td>
                                        </tr>
                                        <tr className={"text-center"}>
                                            <th scope={"row"}><label htmlFor="rads">Rads</label></th>
                                            <td><input type="number" min="0" max="1000" className={"form-control"} id="rads" placeholder="[RADS]" /></td>
                                            <td><button className="btn btn-outline-warning">Update</button></td>
                                        </tr>
                                        <tr className={"text-center"}>
                                            <th scope={"row"}><label htmlFor="effects">Effects</label></th>
                                            <td><input type="text" className={"form-control"} id="effects" placeholder="[EFFECTS]" /></td>
                                            <td><button className="btn btn-outline-warning">Update</button></td>
                                        </tr>
                                        <tr className={"text-center"}>
                                            <th scope={"row"}><label htmlFor="radeffects">Rad Effects</label></th>
                                            <td><input type="text" className={"form-control"} id="radeffects" placeholder="[RAD EFFECTS]" /></td>
                                            <td><button className="btn btn-outline-warning">Update</button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={"col-md-4 d-none d-sm-block"}>
                                    <img src={livinganatomy} alt="" className={"mt-3"} width={"100%"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-xs-12 col-lg-6"}>
                    <div className={"card"}>
                        <div className="card-body">
                            <h2>Attributes</h2>
                            <div className={"row mb-3"}>
                                <div className={"col-md-8"}>
                                    <table className={"table table-bordered table-dark"}>
                                        <tbody>
                                            <tr className={"text-center"}>
                                                <th scope={"row"}><label htmlFor="ap">Action Points</label></th>
                                                <td><input type="number" min="65" max="120" className={"form-control"} id="ap" placeholder="[ACTION POINTS]" /></td>
                                                <td><button className="btn btn-outline-warning">Update</button></td>
                                            </tr>
                                            <tr className={"text-center"}>
                                                <th scope={"row"}><label htmlFor="poison">Poison Resistance</label></th>
                                                <td><input type="number" min="0" max="85" className={"form-control"} id="poison" placeholder="[POISON RESIST]" /></td>
                                                <td><button className="btn btn-outline-warning">Update</button></td>
                                            </tr>
                                            <tr className={"text-center"}>
                                                <th scope={"row"}><label htmlFor="rad">Radiation Resistance</label></th>
                                                <td><input type="number" min="0" max="85" className={"form-control"} id="rad" placeholder="[RAD RESIST]" /></td>
                                                <td><button className="btn btn-outline-warning">Update</button></td>
                                            </tr>
                                            <tr className={"text-center"}>
                                                <th scope={"row"}><label htmlFor="crit">Critical Chance</label></th>
                                                <td><input type="number" min="1" max="10" className={"form-control"} id="crit" placeholder="[CRIT CHANCE]" /></td>
                                                <td><button className="btn btn-outline-warning">Update</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={"col-md-4 d-none d-sm-block"}>
                                    <img src={radresist} alt="" className={"mt-3"} width={"100%"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div className={"card"}>
                    <div className="card-body">
                        <h2>Inventory</h2>

                            <h3>Weapons</h3>

                                <div className={"table-responsive"}>
                                    <table className={"table table-bordered table-dark"}>
                                        <thead>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <th scope={"col"}>Name</th>
                                            <th scope={"col"}>Type</th>
                                            <th scope={"col"}>Range</th>
                                            <th scope={"col"}>AP Costs</th>
                                            <th scope={"col"}>Ammo</th>
                                            <th scope={"col"}>Special Abilities</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><button className="btn btn-outline-danger">Delete</button></td>
                                            <td>[WEAPON NAME]</td>
                                            <td>[WEAPON TYPE]</td>
                                            <td>[WEAPON RANGE]</td>
                                            <td>Single: [AP SINGLE]<br />Targeted: [AP TARGETED]<br />Burst: [AP BURST]</td>
                                            <td>
                                                [AMMO TYPE]<br />
                                                <div className={"form-group mt-2"}>
                                                    <label htmlFor="ammo">Ammo Count</label>
                                                    <input type="number" min="0" max="999" className={"form-control"} id="ammo" placeholder="[AMMO]" />
                                                </div>
                                            </td>
                                            <td>[SPECIAL]</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <button className="btn btn-outline-primary mb-3">Add</button>


                            <h3>Armor</h3>
                                <div className={"table-responsive"}>
                                    <table className={"table table-bordered table-dark"}>
                                        <thead>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <th scope={"col"}>Name</th>
                                            <th scope={"col"}>Type</th>
                                            <th scope={"col"}>Armor Class</th>
                                            <th scope={"col"}>Damage Reduction</th>
                                            <th scope={"col"}>Effects</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><button className="btn btn-outline-danger">Delete</button></td>
                                            <td>[ARMOR NAME]</td>
                                            <td>[ARMOR TYPE]</td>
                                            <td>[ARMOR CLASS]</td>
                                            <td>[DR]</td>
                                            <td>[EFFECTS]</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <button className="btn btn-outline-primary mb-3">Add</button>

                            <h3>Items</h3>
                                <div className={"table-responsive"}>
                                    <table className={"table table-bordered table-dark"}>
                                        <thead>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <th scope={"col"}>Name</th>
                                            <th scope={"col"}><label htmlFor="qty">Quantity</label></th>
                                            <th scope={"col"}>Value</th>
                                            <th scope={"col"}>Description</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><button className="btn btn-outline-danger">Delete</button></td>
                                            <td>[NAME]</td>
                                            <td>[VALUE]</td>
                                            <td><input type="number" min="0" max="999" className={"form-control"} id="qty" placeholder="[QTY]" /></td>
                                            <td>[DESC]</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <button className="btn btn-outline-primary">Add</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className={"mb-5 d-flex justify-content-center"}>
                <a href={"/CharacterSheet/Level"} className="btn btn-lg btn-success" role={"button"}>
                    Level Up
                </a>
            </div>


        </Container>
    );
}
export default CharacterSheet;

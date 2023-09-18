import React from 'react'

import '../../styles/MatchCard.css'

const MatchCard: React.FC = () => {
    return (
        <div>
            <div className='match-card'>
                <h3 className='title'>Last Match</h3>
                <div className='match-card-content'>
                    <div className='team'>
                        <div className='team-container'>
                            <img className='team-logo' src="./src/assets/teams/2.png" alt="" />
                            <div className='team-flag'>
                                <img src="./src/assets/flags/brazil.png" alt="" />
                            </div>
                        </div>
                        <h3>Imperial</h3>
                    </div>

                    <div className='info'>
                        <h3 className='event-name'>IEM RIO 2022</h3>
                        <p className='date'>11/02/2023</p>
                        <div className='score'>
                            <h3 className='winner'>16</h3>
                            <h3>:</h3>
                            <h3 className='loser'>12</h3>
                        </div>
                        <p className='stats'>Stats</p>
                    </div>

                    <div className='team'>
                        <div className='team-container'>
                            <img className='team-logo' src="./src/assets/teams/1.png" alt="" />
                            <div className='team-flag'>
                                <img src="./src/assets/flags/brazil.png" alt="" />
                            </div>
                        </div>
                        <h3>Furia</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchCard
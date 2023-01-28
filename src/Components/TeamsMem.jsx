import React from 'react';
import Teams from './Teams';
import team1 from '../images/team.png'
import team2 from '../images/f team.png'
import team3 from '../images/f team.png'
import teams4 from '../images/team.png'

function Feature() {
  return (
    <div id='features'>
      <h1>Team Member</h1>
      <div className="a-container">
        <Teams image={team1} title="Lorem" />
        <Teams image={team2} title="Lorem" />
        <Teams image={team3} title="Lorem" />
        <Teams image={teams4} title="Lorem" />
      </div>

    </div>
  )
}

export default Feature;
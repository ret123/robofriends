import React from 'react'
import Card from './Card';

const CardList = ({robots}) => {
    const renderRobots = robots.map(robot => <Card robot={robot} key={robot.id} />);
  return (
    <div>
      {renderRobots}
    </div>
  )
}
export default CardList;

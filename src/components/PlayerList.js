import React from 'react';
import Player from './Player';

function PlayerList(props) {  

  
const players = props.playerData.map(play => {
return (<Player 
  key={play.gamerTag}
gamerTag={play.gamerTag} 
firstName={play.firstName} 
lastName={play.lastName}
 wins={play.wins} />)
    
});
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
      </section>
  );
}
export default PlayerList;
//import {playerData} from '../data/ playerData';

//import matchData from './data/matchData';
import playerData from '../data/playerData';

export const  preparePlayerData = () => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerHelperArray, matchData) => {
  return playerHelperArray.map(player => {
    const currentWins = matchData.reduce((accumulator,match) => {
      if(match.winner === player.gamerTag){
        return accumulator += 1;
      } else {
        return accumulator;
      }
       },0);
       player.wins = currentWins;

       return player
  })
 

}

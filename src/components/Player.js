import { useDispatch, useSelector } from "react-redux";


const Player = ({ session, player }) => {

  const playerPosition = player.position.charAt(0).toUpperCase() + player.position.slice(1).toLowerCase();

  const allPlayersList = useSelector(store => store.player);

  const handleClick = async ({ type }) => {

    try {
      
      const newPlayer = allPlayersList?.allPlayers?.[1];

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        "next_player_id": newPlayer?.id || null,
        "bid_status": type,
        "bought_at": session?.current_session?.bid_amount,
        "player_id": player.id,
        "team_id": session?.current_session?.playerObj?.current_team
      });

      if(!session?.current_session?.bid_amount || session?.current_session?.bid_amount < 5) {

        window.alert('Cannot bought for that amount!');
        return;
      }
  
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
      await fetch("http://localhost:3000/complete_bid", requestOptions);

      if(!newPlayer) {

        window.alert('Round Complete!');
        return;
      }

      window.alert('Bid complete for this player!');

      window.location.href = '/';

    } catch (error) {

      console.error(error);
      window.alert('Cannot complete bid!')
    }
    
  }

  return (
    <div className="mt-5 w-1/3 flex flex-wrap justify-center h-5/6">
      <div className="p-8 text-5xl bg-slate-700 mb-4 text-center text-white w-5/6">
        <h1 className="my-7"> (POT {session?.current_session?.playerObj?.pot})</h1>
        <h1 className="py-4 bg-gray-900 rounded-lg"> {player.name} </h1>
        <h1 className="my-7"> Position: </h1>
        <h1 className="py-4 bg-gray-900 rounded-lg"> {playerPosition} </h1>

        <div className="mt-16">

        </div>

        <h1 className="py-4 bg-gray-900 rounded-lg text-2xl"> CURRENT BID: <br /><span className="text-6xl">{session?.current_session?.bid_amount || 0} M</span> </h1>

      </div>
      <div className="my-4 mx-20">
        <button
          onClick={() => {
            handleClick({ type: 1 })
          }}
          className="px-4 py-2 bg-emerald-700 my-2 mx-2  mb-4 text-center rounded-lg text-white">
          Sold
        </button>
        <button
          onClick={() => {
            handleClick({ type: -1 })
          }}
          className="px-2 py-2 bg-red-700 my-2 mx-2 mb-4 text-center rounded-lg text-white">
          Unsold
        </button>
      </div>
    </div>
  )
}

export default Player

import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MAX_COUNT, POT } from "../utils/constants";
import { addCurrentSession } from "../utils/sessionSlice";

const Bid = ({ team, session }) => {

  const dispatch = useDispatch();

  const currentSession = session;
  const bidValue = useRef(0);

  // Use state to store and manage the team data
  const [teamData, setTeamData] = useState(null);

  // Update teamData when the team prop changes
  useEffect(() => {

    setTeamData(team);

  }, []);

  const handleClick = async () => {
    // Now you can safely use teamData in the onClick handler
    if (!teamData) {
      console.error("Team is undefined");
      return;
    }

    const currentTeam = currentSession?.current_session?.teamObj?.[teamData.id];
    const currentBidAmount = bidValue?.current?.value;

    if (Number(currentBidAmount) < Number(Number(currentSession?.current_session?.bid_amount || 0) + 2)) {
      window.alert("Increase Bid Amount");
      return;
    }

    if (currentTeam?.total_players_bought === MAX_COUNT.TOTAL_PLAYERS) {
      window.alert("This team cannot buy more players.");
    }

    if (
      currentSession?.current_session?.playerObj.pot === POT.A &&
      currentTeam?.pot_a_players === MAX_COUNT.POT_PLAYERS
    ) {
      window.alert("This team cannot buy more POT A players.");
    }

    if (
      currentSession?.current_session?.playerObj.pot === POT.B &&
      currentTeam?.pot_b_players === MAX_COUNT.POT_PLAYERS
    ) {
      window.alert("This team cannot buy more POT B players.");
    }

    if (currentTeam.max_bid < bidValue.current.value) {
      window.alert("This team cannot bid this amount.");
    }

    await makeBid({ team_id: teamData.id, bid_amount: currentBidAmount });

    // Assuming current_session.teamObj is an object with nested objects
    let newTeamObj = {
      ...currentSession.current_session.teamObj,
      [teamData.id]: {
        ...currentSession.current_session.teamObj[teamData.id],
        current_bid: currentBidAmount,
      },
    };

    // Now, newTeamObj should have the updated current_bid value


    // Assuming current_session.teamObj is an object
    let newPlayerObj = {
      ...currentSession.current_session.playerObj,
      current_team: teamData.id,
    };

    // Now, newPlayerObj should have the updated team_id value


    dispatch(addCurrentSession({
      teamObj: newTeamObj,
      playerObj: newPlayerObj,
      bid_amount: currentBidAmount
    }));
  };

  const makeBid = async ({ team_id, bid_amount }) => {

    try {

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "team_id": team_id,
        "bid_amount": bid_amount
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const data = await fetch("http://localhost:3000/make_bid", requestOptions);

      console.log(':::::::::::::', data);

      window.alert('Bid Raised');

    } catch (error) {

      console.error(':::::::::::::', error.message);

      window.alert('Bid Fail');
    }
  };

  return (
    <div className={
      currentSession?.current_session?.playerObj?.current_team == teamData?.id ? 
      "bg-emerald-300 m-2 p-4 rounded-lg h-1/6 justify-between my-auto w-1/3 shadow-lg shadow-slate-500" :
      "bg-slate-300 m-2 p-4 rounded-lg h-1/6 justify-between my-auto w-1/3 shadow-lg shadow-slate-500"
      }>
      <h1>Team's Bid: {currentSession?.current_session?.teamObj?.[teamData?.id]?.current_bid || 0}M</h1>
      <div className="my-4">
        <input
          ref={bidValue}
          className="w-1/3 bg-slate-50 border-black border-solid border-opacity-100 rounded-lg"
        />
        <button
          className="mx-2 rounded-lg font-bold bg-slate-500 text-white px-4"
          onClick={handleClick}
        >
          Bid
        </button>
      </div>
    </div>
  );
};

export default Bid;

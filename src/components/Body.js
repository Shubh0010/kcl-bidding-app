import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPlayers, removePlayers } from "../utils/playerSlice"
import { addCurrentSession, removeCurrentSession } from "../utils/sessionSlice"
import { addteam, removeteam } from "../utils/teamSlice"
import GroupList from "./GroupList"
import Player from "./Player"
import Shimmer from "./Shimmer"

const Body = () => {

  const dispatch = useDispatch();

  const teams = useSelector((store) => store.team);
  const players = useSelector((store) => store.player);
  const currentSession = useSelector((store) => store.session);

  const fetchAllPlayerData = async () => {

    var requestOptions = {
      method: 'GET'
    };

    const data = await fetch("http://localhost:3000/players", requestOptions);

    const json = await data.json();

    dispatch(addPlayers(json?.data?.data));
  };

  const fetchAllTeamsdata = async () => {

    var requestOptions = {
      method: 'GET'
    };

    const data = await fetch("http://localhost:3000/teams", requestOptions);

    const json = await data.json();

    dispatch(removeteam());

    dispatch(addteam(json?.data?.data));
  };

  const fetchSessionData = async () => {

    var requestOptions = {
      method: 'GET'
    };

    const data = await fetch("http://localhost:3000/session", requestOptions);

    const json = await data.json();

    dispatch(addCurrentSession(json?.data?.data));
  };

  useEffect(() => {

    fetchAllPlayerData();
    fetchAllTeamsdata();
    fetchSessionData();

  }, []);

  const allTeams = teams?.allTeams;
  const allPlayers = players?.allPlayers;

  const groupATeams = allTeams?.filter((team, index) => index < 4);
  const groupBTeams = allTeams?.filter((team, index) => index >= 4);
  const currentPlayer = allPlayers?.[0];

  if ((!currentPlayer)) {

    return <Shimmer />;
  }

  return (
    <div
      className="bg-[url('https://images.jdmagicbox.com/comp/chandigarh/m5/0172px172.x172.190912034053.t2m5/catalogue/kick-start-chandigarh-sector-44b-chandigarh-dj-system-on-rent-8q286l7o5m.jpg')]">
      <div className="flex justify-between p-2 bg-opacity-85 bg-slate-900 h-screen">
        {/**
       * Team From Pool A
       * Player Details
       * Team From Pool B
       */}

        <GroupList teams={groupATeams} session={currentSession}/>
        <Player player={currentPlayer} session={currentSession} />
        <GroupList type={'right'} teams={groupBTeams} session={currentSession}/>
      </div>
    </div>

  )
}

export default Body;
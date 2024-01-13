import Team from "./Team"


const GroupList = ({ type, teams, session }) => {

  return (
    <div className='w-3/6'>

      {
        teams.map(team => {

          let teamData = { ...team, max_bid: session?.current_session?.teamObj?.[team.id]?.max_bid };
          return <Team key={team.id} type={type} team={teamData} session={session}/>
        })
      }

    </div>
  )
}

export default GroupList;
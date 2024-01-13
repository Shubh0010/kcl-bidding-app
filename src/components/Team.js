import Bid from "./Bid"

const Team = ({ type, team, session }) => {

  return (
    <div
      className={type === 'right' ?
        'my-2 w-auto flex justify-end' :
        'my-2 w-auto flex'}
    >
      {type === 'right' ? <Bid team={team} session={session}/> : ''}
      <div className="bg-slate-700 m-2 p-2 rounded-lg shadow-lg shadow-slate-500 flex text-white w-96">
        <div>
          <h1 className="p-4 text-center font-bold w-60">{team.name} <br/>({team.capitan_name})</h1>
          <h1 className="font-normal bg-stone-200 text-black m-1 px-2 rounded-md w-60">Players
            <span className="font-semibold text-cyan-600">: {team.players_bought}/5</span>
          </h1>
          <h1 className="font-normal bg-stone-200 text-black m-1 px-2 rounded-md w-60">Budget Left
            <span className="font-semibold text-cyan-600">: {team.remaining_budget}M</span>
          </h1>
          <h1 className="font-normal bg-stone-200 text-black m-1 px-2 rounded-md w-60">Max bid
            <span className="font-semibold text-cyan-600">: {team.max_bid}M</span>
          </h1>
        </div>

        <div className="mt-24">
          <h1 className="font-normal bg-stone-200 text-black m-1 px-2 rounded-md">Pot A
            <span className="font-semibold text-cyan-600">: {team.pot_a_players}</span>
          </h1>
          <h1 className="font-normal bg-stone-200 text-black m-1 px-2 rounded-md">Pot B
            <span className="font-semibold text-cyan-600">: {team.pot_b_players}</span>
          </h1>
        </div>
      </div>

      {type !== 'right' ? <Bid team={team} session={session}/> : ''}
    </div>
  )
}

export default Team;
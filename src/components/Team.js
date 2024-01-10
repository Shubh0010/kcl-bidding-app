import Bid from "./Bid"

const Team = ({ type }) => {
  return (
    <div
      className={type === 'right' ?
        'my-2 w-auto flex justify-end' :
        'my-2 w-auto flex'}
    > 
      {type === 'right' ? <Bid /> : ''}
      <div className="bg-slate-300 m-2 p-2 rounded-lg shadow-lg shadow-slate-500">
        <h1 className="p-4 text-center font-bold">Manchester United (Ten Hag)</h1>
        <h1 className="font-normal bg-stone-200 m-1 px-2 rounded-md">Players Bought
          <span className="font-semibold text-cyan-600">: 3/5 (Mainoo, Garnacho, Hojlund, greenwood, mount)</span>
        </h1>
        <h1 className="font-normal bg-stone-200 m-1 px-2 rounded-md">Budget Left
          <span className="font-semibold text-cyan-600">: 45M</span>
        </h1>
        <h1 className="font-normal bg-stone-200 m-1 px-2 rounded-md">max bid for this round
          <span className="font-semibold text-cyan-600">: 35M</span>
        </h1>
      </div>

      {type !== 'right' ? <Bid /> : ''}
    </div>
  )
}

export default Team;

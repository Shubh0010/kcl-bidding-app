import Bid from "./Bid"

const Team = ({ type }) => {
  return (
    <div
      className={type === 'right' ?
        'my-2 w-auto flex justify-end' :
        'my-2 w-auto flex'}
    >
      {type === 'right' ? <Bid /> : ''}
      <div className="bg-slate-300 m-2 p-2 rounded-lg shadow-lg shadow-slate-500 flex">
        <div>
          <h1 className="p-4 text-center font-bold">Manchester United (Ten Hag)</h1>
          <h1 className="font-normal bg-stone-200 m-1 px-2 rounded-md">Players
            <span className="font-semibold text-cyan-600">: 3/5</span>
          </h1>
          <h1 className="font-normal bg-stone-200 m-1 px-2 rounded-md">Budget Left
            <span className="font-semibold text-cyan-600">: 45M</span>
          </h1>
          <h1 className="font-normal bg-stone-200 m-1 px-2 rounded-md">Max bid
            <span className="font-semibold text-cyan-600">: 35M</span>
          </h1>
        </div>

        <div className="mt-14">
          <h1 className="font-normal bg-stone-200 m-1 px-2 rounded-md">Pot A
            <span className="font-semibold text-cyan-600">: 3</span>
          </h1>
          <h1 className="font-normal bg-stone-200 m-1 px-2 rounded-md">Pot B
            <span className="font-semibold text-cyan-600">: 2</span>
          </h1>
        </div>
      </div>

      {type !== 'right' ? <Bid /> : ''}
    </div>
  )
}

export default Team;

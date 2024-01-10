
const Bid = () => {
  return (
    <div className="bg-slate-300 m-2 p-4 rounded-lg h-1/6 justify-between my-auto w-1/3 shadow-lg shadow-slate-500">
      <h1>Current Bid: 0M</h1>
      <div className="my-4">
        <input
          className="w-1/3 bg-slate-100 rounded-lg"
        />
        <button className="mx-2 rounded-lg font-bold bg-slate-500 text-white px-4">Bid</button>
      </div>
    </div>
  )
}

export default Bid;

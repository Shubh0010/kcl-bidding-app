const Player = () => {
  return (
    <div className="mt-5 w-1/3 flex flex-wrap justify-center h-5/6">
      <h1 className="p-4 text-2xl bg-slate-400 mb-4 w-2/3 text-center">
        Lisandro Martinez
      </h1>
      <h1 className="p-4 text-2xl bg-slate-400 mt-2 w-2/3 mb-4 text-center">
        Position: Left Center back
      </h1>
      <img
        className="w-2/3"
        alt="player_image"
        src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ42lnDJlT9xEeGXpjILgH3oZuscN2P58-b2-cZJsnntYKSJcwOljYV6q9kEqzWwCAU91IFBVVAiH2JhfQ"
      />
      <div className="my-4 mx-20">
        <button className="px-4 py-2 bg-emerald-400 my-2 mx-2  mb-4 text-center rounded-lg">Sold</button>
        <button className="px-2 py-2 bg-red-400 my-2 mx-2 mb-4 text-center rounded-lg">Unsold</button>
      </div>
    </div>
  )
}

export default Player

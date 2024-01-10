import GroupList from "./GroupList"
import Player from "./Player"

const Body = () => {

  return (
    <div className="flex justify-between p-2 bg-slate-200 h-screen">
      {/**
       * Team From Pool A
       * Player Details
       * Team From Pool B
       */}

      <GroupList />
      <Player />
      <GroupList type={'right'}/>
    </div>
  )
}

export default Body;
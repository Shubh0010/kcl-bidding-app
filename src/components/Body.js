import GroupList from "./GroupList"
import Player from "./Player"

const Body = () => {

  return (
    <div 
      className="bg-[url('https://images.jdmagicbox.com/comp/chandigarh/m5/0172px172.x172.190912034053.t2m5/catalogue/kick-start-chandigarh-sector-44b-chandigarh-dj-system-on-rent-8q286l7o5m.jpg')]">
      <div className="flex justify-between p-2 bg-opacity-85 bg-slate-200 h-screen">
        {/**
       * Team From Pool A
       * Player Details
       * Team From Pool B
       */}

        <GroupList />
        <Player />
        <GroupList type={'right'} />
      </div>
    </div>

  )
}

export default Body;
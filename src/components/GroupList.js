import Team from "./Team"


const GroupList = ({ type }) => {

  return (
    <div className='w-1/3'>
      <Team type={type} />
      <Team type={type} />
      <Team type={type} />
      <Team type={type} />
    </div>
  )
}

export default GroupList;
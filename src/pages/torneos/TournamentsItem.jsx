import Groups from './Groups'
import FixtureContainer from './FixtureContainer'

const Tournaments = ({ data, mode }) => {
  return (
    <>
      <Groups
        group={data}
        tournament={data.id}
        mode={mode}
      />

      <FixtureContainer
        group_id={data.id}
        type={data.type}
      />
    </>
  )
}

export default Tournaments

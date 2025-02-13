import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const SeriesMatches = ({ id }) => {
  const { data, loading } = useFetch(`/series/${id}/matches`)
  if (loading) return <Loader />

  return (
    <section className='fade-in'>
      <div className='overflow-x-auto text-sm'>
        <table className='table w-full mb-3'>
          <thead>
            <tr>
              <th>Enfrentamientos</th>
              <th>Partido</th>
              <th>Score</th>
              <th>L/V</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <Link
                    to={`/jugadores/${item.playerhome1_id}`}
                    className='text-primary hover:underline font-semibold'
                  >
                    {item.playerhome1_name}
                  </Link>
                  {item.playerhome2_id > 0 && ' y '}
                  <Link
                    to={`/jugadores/${item.playerhome2_id}`}
                    className='text-primary hover:underline font-semibold'
                  >
                    {item.playerhome2_name}
                  </Link>
                  &nbsp;vs.&nbsp;
                  <Link
                    to={`/jugadores/${item.playeraway1_id}`}
                    className='text-primary hover:underline font-semibold'
                  >
                    {item.playeraway1_name}
                  </Link>
                  {item.playeraway2_id > 0 && ' y '}
                  <Link
                    to={`/jugadores/${item.playeraway2_id}`}
                    className='text-primary hover:underline font-semibold'
                  >
                    {item.playeraway2_name}
                  </Link>
                </td>
                <td>{item.type}</td>
                <td>{item.score}</td>
                <td>
                  <div className='h-7 w-7 rounded-full flex justify-center items-center border border-primary text-primary'>
                    {item.result}
                  </div>
                </td>
                <td>
                  <div>{item.status}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default SeriesMatches

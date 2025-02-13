import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Matches from './Matches'
import Header from '../../components/Header'
import TeamItem from './Team'
import Messages from '../../components/Messages'

const Series = () => {
  let { id } = useParams()
  const { data, loading } = useFetch(`/series/${id}`)
  if (loading) return <Loader />
  if (data === null) return <Messages text='No se encontró la serie 🥲' />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='flex flex-col items-center text-center'>
        <h1 className='font-semibold text-primary text-xl'>{`${data.date} ${data.hour}`}</h1>
        <div>
          <Link
            to={`/torneos/${data.tournament_id}`}
            className='hover:underline font-medium'
          >
            {data.tournament_name}
          </Link>
        </div>
      </div>

      <div className='flex justify-center items-center gap-x-4 text-center max-w-xl m-auto'>
        <TeamItem
          id={data.home_id}
          name={data.home_name}
          image={data.home_image}
          type='Local'
        />
        <div className='flex items-center justify-center'>
          {data.winner > 0 ? (
            <div className='flex flex-col items-center font-semibold text-xl'>
              <span>{data.score}</span>
            </div>
          ) : (
            <h1 className='font-semibold'>Vs.</h1>
          )}
        </div>
        <TeamItem
          id={data.away_id}
          name={data.away_name}
          image={data.away_image}
          type='Visitante'
        />
      </div>

      {data.winner > 0 ? <Matches id={id} /> : <Messages text='Aún no se disputó esta serie ☝️' />}

      <Helmet>
        <title>IML Tenis {data.date + ' ' + data.hour}</title>
      </Helmet>
    </section>
  )
}

export default Series

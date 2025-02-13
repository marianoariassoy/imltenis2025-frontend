import { Link } from 'react-router-dom'

const TeamItem = ({ id, name, image, type }) => {
  return (
    <div className='flex flex-col gap-y-3 items-center'>
      <div className='avatar'>
        <div className='w-20 rounded-full'>
          <Link
            to={`/equipos/${id}`}
            className='hover:opacity-70 transition-all'
          >
            <img
              src={image}
              width='80'
              height='80'
              alt={name}
            />
          </Link>
        </div>
      </div>
      <div className='px-3 flex flex-col text-sm'>
        <Link
          to={`/equipos/${id}`}
          className='hover:underline text-primary font-semibold'
        >
          {name}
        </Link>
        <span className='text-secondary'>{type}</span>
      </div>
    </div>
  )
}

export default TeamItem

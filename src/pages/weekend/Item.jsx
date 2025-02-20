import { Link } from 'react-router-dom'

const Item = ({ data }) => {
  return (
    <Link
      to={`/weekend/torneos/${data.id}`}
      className='link-hover flex flex-col items-center text-sm'
    >
      <span className='text-primary font-medium'>{data.title}</span>
      <span>
        {data.date} {data.hour}
      </span>
    </Link>
  )
}

export default Item

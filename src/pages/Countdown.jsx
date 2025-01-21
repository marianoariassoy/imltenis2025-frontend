import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Counter from './Counter'

const Soon = () => {
  return (
    <div className='fade-in-slow flex flex-col items-center justify-center h-full'>
      <h1 className='text-4xl mb-3 animate-bounce'>🚀</h1>
      <Counter />

      <div className='text-primary text-center flex flex-col gap-y-3'>
        <div className='flex flex-col font-bold text-3xl'>
          <span>Apertura 2025</span>
          <span>15 de Marzo</span>
        </div>

        {/* <span className=''>Aprocha los descuentos por anticipado</span> */}
        <span className=' font-bold'>
          <Link
            to='/presentacion'
            className='underline'
          >
            Mira la presentación del torneo acá
          </Link>
        </span>
        <span>
          Más info{' '}
          <a
            href='https://wa.me/5491130171475'
            className='underline'
            target='_blank'
          >
            {' '}
            +54 9 11 3017-1475
          </a>
        </span>
      </div>

      <Helmet>
        <title>IML Tenis Liga de clubes</title>
      </Helmet>
    </div>
  )
}

export default Soon

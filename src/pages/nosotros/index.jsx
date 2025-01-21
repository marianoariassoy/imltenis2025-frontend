import { Helmet } from 'react-helmet'
import Header from '../../components/Header'

const Nosotros = () => {
  return (
    <section className='fade-in text-center max-w-2xl m-auto flex flex-col gap-y-6'>
      <Header
        title='¡Hola!'
        emoji='👋'
      />

      <div className='flex flex-col gap-y-6 text-sm px-6'>
        <div className='[&>span]:font-bold [&>span]:text-primary'>
          <span>Director:</span> Luis Armando Pujol <br />
          <span>Coordinadores:</span> Mariano Arias, Emiliano Carro, Carmelo Grieco. <br />
          <span>RRSS:</span> Joaquina Yagua <br />
          <span>Sistemas: </span>
          <a
            href='https://www.marianoarias.soy'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Mariano Arias
          </a>
          <br />
          <span>Comercial:</span> Luis Armando Pujol <br />
          <span>Legales: </span>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Estudio Jurídico Massi
          </a>
          <br />
          <span>Logo: </span>
          <a
            href='http://www.nicolasbarraza.com.ar/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Nicolas Barraza
          </a>
          <br />
        </div>
        <div className='[&>span]:font-bold [&>span]:text-primary'>
          {/* <span>IML Weekend:</span> Adrián Micheli. <br /> */}
          <span>IML Juniors:</span> Marcos Velazquez
        </div>
      </div>

      <Helmet>
        <title>IML Tenis Nosotros</title>
      </Helmet>
    </section>
  )
}

export default Nosotros

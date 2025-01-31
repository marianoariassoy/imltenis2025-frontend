import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import Item from './Item'
import Counter from '../Counter'

const Presentacion = () => {
  const data = [
    {
      title: '🤔 ¿Qué necesito para realizar la inscripción?',
      text: `Para inscribirte necesitás leer la información completa de cómo se lleva adelante el torneo y armar tu equipo con un mínimo de 6 participantes en la lista de buena fe y un máximo de 18 jugadores. Tener o alquilar 3 canchas de tenis de la misma superficie para poder hacer de local, aceptamos clubes con 2 canchas.`
    },
    {
      title: '📅 Fechas',
      text: `Inicio del torneo: <strong>Sábado 15 y Domingo 16 de Marzo.</strong><br />
Cierre de Inscripción: <strong>8 de Marzo.</strong>`
    },
    {
      title: '🏆 ¿Cómo es el formato de juego y del torneo?',
      text: `En todas las categorías con exepción de las categorías Mixtas se disputarán <strong >1 single y 2 dobles.</strong> En las categorías Mixtas se disputarán 2 dobles.<br/>
      Todos los partidos se disputarán al mejor de 3 sets, con tie break. El tercer set será Super Tie break a 10 puntos con diferencia de dos.<br/>
      Todos los resultados y el reglamento general podrán ser vistos en este sitio web.`
    },
    {
      title: '⭐ ¿En qué categorías puedo inscribirme?',
      text: `<strong>Los Domingos:</strong> Primera Libre, Segunda Libre, Tercera Libre, Cuarta Libre, Quinta Libre, Sexta Libre (con admisión). <br/> 
      <strong>Sábados y Domingos:</strong> Damas Segunda, Damas Tercera, Damas Cuarta. <br/> 
      <strong>Sábados:</strong> Mixto Libre, Mixto 3ra/4ta, Caballeros Segunda +35, Caballeros Tercera +35.`
    },
    {
      title: '📈 ¿Cómo se a que categoría corresponde mi equipo?',
      text: `<strong>Niveles orientativos: </strong>
        Quinta: Jugadores categoría 125, C. Cuarta: Jugadores categoría 250, B2, B-. Tercera: Jugadores categoría 500,
        B1 Segunda: Jugadores categoría 750, A1, A2 Primera: Jugadores categoría 1000, Super A.`
    },
    {
      title: '🔞 ¿Hay restricciones por edad?',
      text: `Solamente en la categoría Segunda y Tercera +35, el resto de las categorías son libres de edad.`
    },
    {
      title: '🌍 ¿Dónde se juega?',
      text: `Cada equipo <strong >representa a un club o barrio</strong> que jugará de local reservando o alquilando cancha según corresponda.<br/>
      Zonas de juego: Zona Norte y Zona Oeste de Buenos Aires.`
    },
    {
      title: '🕛 ¿Qué día y horario se juega por categoría?',
      text: `Las categorías de los Domingos de <strong>9 a 17 hs.</strong><br/>Las categorías de los Sábados de <strong>13 a 17 hs.</strong> <br/><br/>
      Cada equipo puede elegir el horario cuando actúa de local.`
    },
    {
      title: '🤔 ¿Hay un mínimo de encuentros o series a disputar?',
      text: `No podemos saber con exactitud cuantas series se disputarán por categoría pero garantizamos 8 series por equipo.`
    },
    {
      title: '🎾 Pelotas',
      text: `Las pelotas serán responsabilidad del <strong >equipo local</strong>, deben ser nuevas o con un solo uso reciente, puediendo ser sueltas o de tubo presurizado.`
    },
    {
      title: '💵 ¿Cuál es el valor y como abonar la inscripción por cada equipo?',
      text: `
      <strong>Hasta el 15 de Febrero $150.000.- </strong><br/>
      <strong>Hasta el 15 de Marzo $180.000.- </strong><br/>
      Las categorías Mixtas y Caballeros Segunda +35 tienen un descuento del 50% en la inscripción. 
      <br/> <br/>
      Alias: imltenis.2024<br/>
      Emiliano Carro
      <br/><br/>
      Enviar comprobante al área administrativa +54 9 11 3017-1475 <br/>
      Consulta descuentos por cantidad de equipos.`
    },
    {
      title: '💵 ¿Cuál es el valor a abonar cada partido?',
      text: `El costo a abonar cada jugador en conceptos de alquiler de canchas al club local será definido antes del comienzo del torneo.`
    },
    {
      title: '😀 ¿Cómo llevo adelante la inscripción?',
      text: `Cada equipo deberá tener un capitán responsable, quien será el encargado de realizar la inscripción y de enviar la lista de buena fe de su equipo hasta la fecha indicada. `
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-6 max-w-2xl m-auto'>
      <div className='flex flex-col items-center -mb-2'>
        <div className='text-3xl text-center'>🏆</div>
        <Counter />
      </div>

      <div className='aspect-square lg:aspect-video'>
        <img
          className='w-full h-full object-cover'
          src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjZub2JldzIxdHllajVodzlzd3gycjY0cDAxeTdnazFnamJndjgzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kaYlcLV0XifKZFfwUm/giphy.gif'
        />
      </div>

      <article className='text-sm flex flex-col gap-y-3'>
        <p>
          Llega el <span className='text-primary font-bold'>Torneo Apertura 2025</span> y vas a poder formar parte de
          uno de los
          <span className='text-primary'> interclubes más importantes</span> de la zona. Participá junto a tu grupo de
          amigos representando a tu club o barrio, jugando en tus canchas y también conociendo otros lugares y jugadores
          cada semana, siempre con
          <span className='text-primary'> resultados y rankings actualizados</span> en nuestro sitio web.
        </p>
        <p>
          No te pierdas la oportunidad de poder ser elegido el
          <span className='text-primary'> jugador destacado de la fecha</span> o recibir importantes premios al final de
          la temporada liderando el <span className='text-primary'> ranking de jugadores</span> y también ayudar a tu
          club a ganar la competencia anual de clubes en el
          <span className='text-primary'> ranking de clubes.</span>
        </p>
        <p>
          Como si fuera poco, sobre todas las cosas, queremos mucho a nuestra comunidad tenistica y también tenemos
          momentos de entretenimiento, como
          <span className='text-primary'> la batalla de los clubes</span>,
          <span className='text-primary'> la elección de los mejores capitanes</span> y los nuevos
          <span className='text-primary'> IML Awards.</span>
        </p>
        <p>
          Además de participar de las finales junto a todas las categorías en un evento de cierre con entrega de premios
          y sorteos.
        </p>
      </article>

      {data.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          text={item.text}
        />
      ))}

      <div className='text-sm'>
        Podes ver el reglamento completo en este{' '}
        <NavLink
          to='/reglamento'
          className='underline hover:text-primary'
        >
          enlace
        </NavLink>
      </div>
      <div className='text-primary text-sm'>
        Inscribite o consultanos al <span className='font-semibold'>WhatsApp</span>{' '}
        <a
          href='https://wa.me/5491130171475'
          className='hover:underline font-semibold'
          target='_blank'
        >
          +54 9 11 3017-1475
        </a>
      </div>
      <div className='text-primary font-semibold text-sm'>¡Nos vemos en la cancha! 😉</div>

      <div className='aspect-square lg:aspect-video overflow-hidden'>
        <img
          className='w-full h-full object-cover block'
          src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGx5MXNua2M1Nm1od2IzdDR2aWVteDVvaWswOXRscjJ6dG9pdnY5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z24C2dyo2XpkWKJQqG/giphy.gif'
        />
      </div>

      <Helmet>
        <title>IML Tenis Presentación</title>
      </Helmet>
    </section>
  )
}

export default Presentacion

import { WhatsApp } from '../lib/icons'

const Footer = () => {
  const year = new Date().getFullYear()
  const logos = [
    {
      alt: 'Logo de Yuka',
      url: 'https://www.instagram.com/yuka_ant/',
      image: '/assets/logos/yuka.svg'
    },
    {
      alt: 'Logo Mito Gafas',
      url: 'https://www.instagram.com/mitogafas/',
      image: '/assets/logos/mito.svg'
    },
    {
      alt: 'Logo de TYP',
      url: 'https://www.instagram.com/typdeportes/',
      image: '/assets/logos/typ.svg'
    },
    {
      alt: 'Logo de Tienda Vinica',
      url: 'https://www.instagram.com/tiendavinica/',
      image: '/assets/logos/vinica.svg'
    }
  ]

  return (
    <footer className='p-6 mt-6'>
      <div className='flex gap-x-8 lg:gap-x-12 items-center justify-center mb-3'>
        {logos.map((logo, index) => (
          <div
            key={index}
            className='flex justify-center'
          >
            <a
              href={logo.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={logo.image}
                alt={logo.alt}
                className=' opacity-30 hover:opacity-80 transition-opacity'
              />
            </a>
          </div>
        ))}
      </div>

      <div className='text-sm text-center flex flex-col justify-center items-center text-secondary'>
        <div>
          <span className='font-bold'>Liga de clubes IML Tenis</span>
        </div>
        <div className='flex gap-x-1 items-center flex-wrap justify-center'>
          <span>
            <a
              href='https://wa.me/5491130171475'
              className='hover:underline flex items-center gap-x-1'
            >
              <WhatsApp />
              <span>11 3017 1475</span>
            </a>
          </span>
          <span>-</span>
          <span>
            <a
              href='mailto:hola@imltenis.com.ar'
              className='hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              hola@imltenis.com.ar
            </a>
          </span>
          <span>-</span>
          <span>Hecho con ❤︎ en {year}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

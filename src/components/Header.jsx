const Header = ({ title, subtitle = '', description = '', emoji = '' }) => {
  return (
    <header className='text-center flex flex-col gap-y-2'>
      {emoji && <div className='text-2xl'>{emoji}</div>}
      <div className='flex gap-x-2 justify-center text-lg text-primary'>
        <h1 className='font-semibold whitespace-nowrap'>{title}</h1>
        {subtitle && <span className='font-semibold whitespace-nowrap'>{subtitle}</span>}
      </div>
      <div className='font-medium text-sm'>{description}</div>
    </header>
  )
}

export default Header

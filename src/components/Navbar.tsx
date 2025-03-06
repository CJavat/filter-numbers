

export const Navbar = () => {
  return (
    <nav className='border-b border-indigo-500 p-4 flex justify-between items-center'>
      <h1 className="text-indigo-500 uppercase text-5xl font-bold relative">
        Filter
        <span className='text-black'>Numbers</span>
        <span className="absolute top-0 -right-3 text-[25px]">#</span>
      </h1>
    </nav>
  )
}

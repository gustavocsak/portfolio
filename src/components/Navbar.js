

export default function Navbar() {
  return (
    <nav className='py-8 flex justify-between'>
        <h1 className='text-xl font-semibold'>gustavo</h1>
        <ul className='flex items-center'>
            <li>
                <a className='bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-2 text-white rounded-md ml-8' href='#'>
                    Resume
                </a>
            </li>
        </ul>
    </nav>
  )
}

import { BsFillMoonStarsFill } from 'react-icons/bs'


export default function Example() {
  return (
    <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='text-xl font-semibold'>gustavo</h1>
        <ul className='flex items-center'>
            <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
            </li>
            <li>
                <a className='bg-gradient-to-r from-sky-400 to-cyan-500 px-4 py-2 text-white rounded-md ml-8' href='#'>
                    Resume
                </a>
            </li>
        </ul>
    </nav>
  )
}

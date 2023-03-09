import { BsFillMoonStarsFill } from 'react-icons/bs'

export default function Navbar() {
  return (
    <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl">gustavo</h1>
        <ul className="flex items-center">
            <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
                <a href="#" className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</a>
            </li>
        </ul>
    </nav>
  )
}

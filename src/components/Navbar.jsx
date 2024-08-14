import Themebtn from './ThemeBtn'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
        <Themebtn />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <FaLinkedin/>
          <FaGithub/>
          <FaSquareXTwitter/>
          <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar
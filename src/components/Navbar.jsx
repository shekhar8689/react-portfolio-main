import Themebtn from './ThemeBtn'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaFileDownload  } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
        <Themebtn />
        </div>
        <div className='lg:m-8 flex items-center justify-center gap-4 text-2xl'>
         <Link to="https://www.linkedin.com/in/shekhar-gawai-00a782248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
         <FaLinkedin/></Link>
         <Link to="https://github.com/shekhar8689"><FaGithub/></Link>
         <Link to="https://x.com/shekhargaw50951?t=Lpjca4v7lLBqI8M-TNt8tA&s=08"><FaSquareXTwitter/></Link>
         <a href="/CV_Shekhargawai.pdf" download="CV_Shekhargawai.pdf">
         <FaFileDownload />
         </a>
          
        </div>
    </nav>
  )
}

export default Navbar
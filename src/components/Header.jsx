import { navLinks } from "@/staticData";
import Image from "next/image"
import {BiMenu} from 'react-icons/bi'
import MobileMenu from "./MobileMenu";


const Header = ({ isMenuOpen, setIsMenuOpen}) => {

  return (
    <div className="flex justify-between items-center h-9">
      <Image src="/logo.svg" alt="logo" width={50} height={50}/>
      <div>
        <BiMenu className="text-4xl cursor-pointer md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen}/>}
        <ul className="items-center gap-6 hidden md:flex">
          {navLinks.map((link, i) => (
            <li key={i} className="cursor-pointer font-sans text-gray-700" >{link}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
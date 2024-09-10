
import logo1 from "../assets/logo1-removebg-preview.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Navbar() {
  return (
  <nav className=" mb-20 flex items-center  justify-between py-6">
<div className="flex flex-shrink-0 items-center">
<img src={logo1} className="w-20" alt="logo" />
</div>
<div className="m-7 flex items-center justify-center gap-4 text-2xl text-white">
 <a href="https://www.facebook.com/">   <FaFacebook/></a>
<a href="https://github.com/">    <FaGithub/></a>
    <a href="https://www.instagram.com/"><FaInstagram/></a>
 <a href="https://www.linkedin.com/in/rittik-chauhan-556a28284/">   <FaLinkedin/></a>
</div>

  </nav>
  )
}

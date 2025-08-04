import React, { useEffect } from 'react'
import { FaApple, FaSearch, FaLock, FaBars } from "react-icons/fa"


const navLink = [
  {
    name: "Store",
    href: "#"
  },
  {
    name: "Mac",
    href: "#"
  },
  {
    name: "iPad",
    href: "#"
  },
  {
    name: "iPhone",
    href: "#"
  },
  {
    name: "Watch",
    href: "#"
  },
  {
    name: "AirPods",
    href: "#"
  },
  {
    name: "TV & Home",
    href: "#"
  },
  {
    name: "Entertainment",
    href: "#"
  },
  {
    name: "Accessories",
    href: "#"
  },
  {
    name: "Support",
    href: "#"
  },
]

const Navbar = () => {

  useEffect(() => {

    const sidenav = document.getElementById("sidenav")
    const menubar = document.getElementById("menubar")
    const closenav = document.getElementById("closenav")


    if (menubar && closenav && sidenav) {
      menubar.addEventListener("click", () => {
        sidenav.style.top = "0"
      })
      closenav.addEventListener("click", () => {
        sidenav.style.top = "-200%"
      })

      //clean up event
      return () =>{
        menubar.removeEventListener("click", () => {})
        closenav.removeEventListener("click", () => {})
      }
    }

  }, [])

  return (
    <nav>
      <section className='flex items-center justify-between gap-8 py-4 px-4 lg:px-2 lg:justify-center mx-auto sticky top-0 bg-white z-10'>
        <h1><FaApple className='text-xl cursor-pointer' /></h1>
        <ul className="hidden lg:flex space-x-10 text-sm">
          {navLink.map((link, index) => (
            <li key={index}>
              <a href={link.href} className='cursor-pointer'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex items-center space-x-8 '>
          <FaSearch className='opacity-60 cursor-pointer' />
          <FaLock className=' opacity-60 cursor-pointer' />
          <FaBars id='menubar' className=' opacity-60 lg:hidden cursor-pointer' />
        </div>
      </section>

      <section id='sidenav' className="space-y-5 fixed z-20 bg-white text-black top-0 text-left p-6 transition-all duration-700 lg:hidden" style={{ width: "100%", height: "100vh", top: "-200%" }}>
        <div className='text-right p-5'>
          <p id='closenav' className='cursor-pointer text-xl font-bold'>X</p>
        </div>
        <ul className="space-y-5">
          {navLink.map((link, index) => (
            <li key={index} >
              <a href={link.href} className='cursor-pointer text-xl font-bold'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}


export default Navbar
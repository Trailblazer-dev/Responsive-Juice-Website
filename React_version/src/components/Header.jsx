import { useState } from 'react'
import logo from '../assets/logo.png'
import { header } from '../constraits/constrait'
import { AlignJustify } from 'lucide-react'
import { X } from 'lucide-react'
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className='fixed top-0 left-0 w-full bg-hero-pattern bg-cover shadow-md flex flex-row items-center justify-between px-5 z-50'>
      <div>
        <a href="#hero" className='hover:cursor-pointer'>
          <img src={logo} alt="logo" className='w-[50px] md:w-[60px]' />
        </a>
      </div>
      
      <nav className={` ${showMenu?'block':'hidden'} md:block absolute left-0 top-[3.1rem] w-full bg-hero-pattern bg-cover shadow-md z-20 transition-opacity ease-in-out duration-1000 delay-400 md:relative md:bg-none md:top-0 md:w-0 md:shadow-none md:z-0 `}>
        <ul className='flex flex-col md:flex-row items-center  gap-2 md:justify-center'>
            {header.map((item)=>(
              <li key={item.id} className='py-2 md:px-4 w-[120px]md:w-auto'>
                <a href={item.href} className='hover:text-orange-500 font-normal sm:text-xl flex font-third text-nav' onClick={()=>setShowMenu(!showMenu)}>
                  <item.icon className='inline-block mr-2'/>
                  {item.title}</a>
              </li>
            ))}
        </ul>
      </nav>
      <div className=''>
        <button className='border-2 border-menu_icon_bg rounded-md px-2 py-1 font-semibold md:text-xl hover:animate-pulse'>sign up</button>
      </div>
      {showMenu?<X className='md:hidden hover:cursor-pointer text-title' onClick={handleMenu}/>:<AlignJustify className='md:hidden hover:cursor-pointer text-title' onClick={handleMenu}/> }
      
    </div>
  )
}

export default Header
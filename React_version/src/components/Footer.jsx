import { socialList } from "../constraits/constrait"


function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-8 pb-4 sm:flex-row sm:gap-8" id="footer">
        <div className="flex justify-center items-center">
            <ul className="flex flex-row justify-between items-center gap-2 sm:gap-4 ">
                {socialList.map((social,index)=>(
                    <li key={index} className="flex justify-center items-center">
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="bg-menu_icon_color rounded-full p-2 hover:bg-menu_icon_bg hover:text-social_linkbg text-desc text-base">
                            <social.title className="" size={24}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <p className="text-title font-first select-none text-center hover:cursor-pointer">
            © 2025 Dscode | All rights reserved.
        </p>
    </div>
  )
}

export default Footer
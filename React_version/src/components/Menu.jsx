
import { Heart } from "lucide-react";
import { menu, menuItem } from "../constraits/constrait";

function Menu() {
  return (
    <div className="mt-10 select-none">
      <h2 className="section__title text-title font-bold text-center">
        {menu.title} <br /> {menu.desc}
      </h2>

      <div className="relative  flex flex-col custom:flex-row custom:flex-wrap custom:mx-2 md:mx-8 justify-center items-center gap-6 mt-8 lg:mt-14 mb-10 lg:mb-16 md:gap-10 ">
        {menuItem.map((item) => (
          <div className="relative w-[200px] h-[200px] md:w-[30%] md:h-max-[30%] lg:w-[290px] lg:h-[300px] bg-menu_bg border-menu_border border-2 rounded-3xl shadow-lg shadow-[#8e712b] hover:scale-110 transition-transform delay-150 duration-300 ease-in-out cursor-pointer" key={item.id}>
            <div className="flex justify-center items-center overflow-hidden">
              <img src={item.img} alt={item.title} className={`w-[100px] lg:w-[150px] mx-auto h-auto object-cover ${item.id === 3 ?"rotate-90 w-[70px] lg:h-[150px] lg:w-[100px] lg:mb-4" :""}`}/>
            </div>
            <div className="flex flex-col justify-center mx-6">
              <h3 className="text-title font-third font-semibold lg:text-2xl">{item.title}</h3>
              <p className="text-sm font-second text-desc mb-1 lg:text-base">{item.desc}</p>
              <p className="text-title font-third font-bold lg:text-lg">
                <span className="text-dollar font-bold ">$</span>
                {item.price}</p>
            </div>
            <div className="absolute flex justify-center items-center bg-menu_icon_bg p-3  lg:p-4 top-0 right-0  rounded-tr-3xl rounded-bl-3xl">
                <Heart className="text-menu_icon_color"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

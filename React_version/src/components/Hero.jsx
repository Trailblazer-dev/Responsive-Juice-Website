import { hero } from "../constraits/constrait"

function Hero() {
  return (
    <div className='pt-[6rem] flex flex-col md:flex-row px-2 md:px-4 lg:px-8 pb-6 lg:gap-4 justify-center items-center' id="hero">
        <div className="md:w-1/2 mb-6 sm:mb-8 md:mb-0">
            <h1 className="hero font-bold text-title leading-tight mb-4 lg:leading-normal lg:pr-4">
                {hero.title}<br></br>{hero.title2}
            </h1>
            <p className="font-second text-desc w-4/5 lg:w-auto mx-auto md:mx-0 h3">
                {`"${hero.subtitle}"`}
            </p>
            <div className="flex flex-wrap gap-4 mt-4 items-center justify-center font-third md:justify-normal">
                <button className="bg-title text-menu_icon_color py-2 px-[.4rem] rounded-md hover:bg-social_linkbg hover:text-title"><a href="#menu">{hero.btnOne}</a></button>
                <button className="bg-transparent  text-title border-2 border-title py-2 px-[.4rem] rounded-md hover:bg-social_linkbg hover:border-menu_icon_bg">{hero.btnTwo}</button>
            </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center ">
            <img src={hero.img} alt="hero image" className="object-cover "/>
        </div>
        
        </div>
  )
}

export default Hero
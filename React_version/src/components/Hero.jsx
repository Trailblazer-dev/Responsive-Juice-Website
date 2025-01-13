import { hero } from "../constraits/constrait"

function Hero() {
  return (
    <div className='pt-[6rem] flex flex-col md:flex-row'>
        <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold">
                {hero.title}<br></br>{hero.title2}
            </h1>
            <p className="">
                {hero.subtitle}
            </p>
            <div className="">
                <button className="">{hero.btnOne}</button>
                <button className="">{hero.btnTwo}</button>
            </div>
        </div>
        <div className="md:w-1/2">
            <img src={hero.img} alt="" />
        </div>
        
        </div>
  )
}

export default Hero
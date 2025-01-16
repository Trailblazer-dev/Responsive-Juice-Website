import { features, featuresImage } from "../constraits/constrait";

const Features = () => {
  return (
    <div id="features" className="py-4 mt-8 flex flex-col justify-center items-center px-2 md:px-4 lg:px-8 pb-6 md:flex-row lg:mb-2">
      <div className="flex flex-col justify-center items-center md:w-2/5">
        <h1 className="section__title font-bold text-title md:text-left">
          Why you <br /> should <br />
          choose us?
        </h1>
        <p className="h3 font-third text-desc w-4/5 text-center md:text-left">
            {features.desc}
        </p>
      </div>
      <div className="relative flex flex-col sm:flex-col gap-2 items-center justify-center h-[40rem] sm:h-96 md:h-72 w-full md:w-3/5">
        {featuresImage.map((item, index) => (
            <div className={`absolute bg-feature_bg top-4 h-[190px] custom:h-[230px] md:h-[200px] w-5/12 custom:w-[45%] sm:w-[30%] ${index % 2 === 0 ? "first:left-4  sm:first:left-2 " : "even:right-4 even:top-48 sm:even:top-24 sm:even:right-auto"} last:left-4 last:top-[23rem] sm:last:top-4 sm:last:left-auto  sm:last:right-2 rounded-xl flex items-center justify-center overflow-hidden hover:scale-105 transition-transform delay-150 duration-300 ease-in-out cursor-pointer shadow-md shadow-[#575030]`} key={item.id}>
                <img src={item.img} alt={item.alt} className={`object-cover ${index === 1 ? "second-img" : "w-full"} `}  />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

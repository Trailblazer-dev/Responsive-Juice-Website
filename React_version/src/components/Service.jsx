import { services } from "../constraits/constrait"


function Service() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-8 lg:mx-8 mt-8">
      <div className="order-2 md:order-1 flex justify-center items-center md:w-1/2 md:items-end">
        <img src={services.img} alt="" />
      </div>
      <div className="order-1 md:order-2 flex flex-col items-center  justify-center md:w-1/2 select-none">
        <h1 className="section__title font-bold text-title md:mb-4 text-center">
          {services.title}
        </h1>
        <p className="font-second text-desc text-center md:text-left w-4/5">
          {`${services.desc}`}
        </p>
      </div>
    </div>
  );
}

export default Service
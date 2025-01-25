import { about } from "../constraits/constrait"


function About() {
  return (
    <div className="my-4 mt-8 flex flex-col md:flex-row justify-center items-center mx-4 md:mx-8 lg:mx-8" id="about">
        <div className="flex flex-col items-center md:items-start justify-center md:w-1/2 select-none">
          <h1 className="section__title font-bold text-title md:mb-4">
            {about.title}
          </h1>
          <p className="font-second text-desc text-center md:text-left w-4/5">
            {`"${about.desc}"`}
          </p>
        </div>
        <div className="flex justify-center items-center md:w-1/2">
          <img src={about.img} alt="img" />
        </div>
    </div>
  )
}

export default About
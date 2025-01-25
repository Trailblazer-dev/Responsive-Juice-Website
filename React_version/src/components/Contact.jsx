import { contact, siteList } from "../constraits/constrait";
import logo from "../assets/logo.png";
import { Mail, Phone } from "lucide-react";

function Contact({handleClick}) {


  
  return (
    <div
      id="contact"
      className="relative grid grid-cols-1 custom:grid-cols-2 custom:grid-rows-2 place-content-start justify-items-center mx-4 md:mx-8 lg:mx-8 mt-8 md:grid-cols-3 md:grid-rows-1"
    >
      <div className="flex flex-col items-center justify-center mb-4 custom:col-span-2 sm:col-span-1 ">
        <h2 className="section__title text-title font-bold select-none">{contact.title}</h2>
        <p className="font-third text-desc mb-2 select-none">{contact.desc}</p>
        <form
          action=""
          method="post"
          className="flex flex-col justify-center items-left gap-4 mx-auto"
        >
          <input type="text" name="name" id="name" placeholder="Full name" className="w-fit pl-2 rounded-lg outline-none border-1 border-menu_border py-2"/>
          <input type="email" name="email" id="email" placeholder="Your email" className="w-fit pl-2 rounded-lg outline-none border-1 border-menu_border py-2"/>
          <textarea
            name="message"
            id="message"
            cols="25"
            rows="5"
            placeholder="Your message..."
            className="w-fit pl-2 rounded-lg outline-none border-1 border-menu_border pt-2"
          ></textarea>
          <button type="submit" className="bg-menu_icon_bg border-2 border-menu_icon_color text-nav rounded-lg w-fit px-3 py-1 hover:bg-social_linkbg">Submit</button>
        </form>
      </div>
      <div className="mb-4 flex flex-col items-center justify-center custom:col-span-1 custom:row-span-1 custom:grid-cols-1 sm:col-span-1 sm:row-span-1 sm:justify-items-start sm:self-start">
        <h2 className="section__title text-title font-bold select-none">
            {contact.site}
        </h2>
        <p className="font-third text-desc mb-4 select-none">
            {contact.siteDesc}
        </p>
        <ul className="list-inside list-disc">
            {siteList.map((item,index)=>(
                <li key={index} className="sm:my-4">
                    <a href={item.href} className="hover:cursor-pointer hover:underline text-xl text-nav/70" onClick={()=>{
                      if (index === 1) handleClick('about');
                      if (index === 2) handleClick('service');
                      if (index === 3) handleClick('blog');
                      
                    }}>
                    {item.title}
                    </a>
                </li>
            ))}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center custom:col-span-1 custom:row-span-1 sm:col-span-2 sm:row-span-1 sm:self-start md:col-span-1 md:row-span-1"> 
        <div>
          <a href="#hero" className="hover:cursor-pointer">
            <img src={logo} alt="logo" className="w-[80px] custom:w-[100px] md:w-[150px]" />
          </a>
        </div>
        <div className="flex flex-col justify-center gap-4">
            <a href="tel:+084002000" className="hover:underline flex items-center justify-center"><Phone size={20} className="mr-2" />
                {contact.phone}</a>
            <a href="mailto:xyz@gmail.com" className="hover:underline flex items-center">
                <Mail className="mr-2" size={20}/>
                {contact.email}
            </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import features1 from "../assets/feauture-1.png";
import features2 from "../assets/feature-2.png";
import features3 from "../assets/feature-3.png";

import menu1 from "../assets/menu-1.png";
import menu2 from "../assets/menu-2.png";
import menu3 from "../assets/menu-3.png";

import aboutImg from "../assets/about.png";
import servicesImg from "../assets/services.png";
import blogImg from "../assets/blog.png";
import { AlignLeft, House, StarHalf, UserRoundSearch } from "lucide-react";
import imgUrl from "../assets/home.png";


// px-2 md:px-4 lg:px-8 pb-6

export const header=[
    {
        id:1,
        title:"Home",
        href:"#hero",
        icon:House
    },
    {
        id:2,
        title:"Features",
        href:"#features",
        icon:StarHalf
    },
    {
        id:3,
        title:"Menu",
        href:"#menu",
        icon:AlignLeft

    },
    {
        id:4,
        title:"Contact",
        href:"#contact",
        icon:UserRoundSearch
    }
]


// Hero section
export const hero={
    title:"Revitalize Your Routine,",
    title2: "Fresh, Fruity, Fantastic!",
    subtitle: "Savor the Symphony of Flavors, with Nature's Sweetness & deliciousness.Get the best variety of juices here!",
    btnOne:"View Menu",
    btnTwo:"Discount",
    img:imgUrl
}

// Features section
export const features=
    {
        desc:"Our commitment to excellence in the realm of juices sets us apart from the competition.",
    };

export const featuresImage=[
    {
        id:1,
        alt:"We use only the freshest, highest-quality ingredients in our juices.",
        img:features1,
    },
    {
        id:2,
        alt:"Choose from a wide variety of delicious juice blends, each made with care.",
        img:features2
    },
    {
        id:3,
        alt:"Order online and have your juice delivered right to your doorstep, whenever you want.",
        img:features3
    }
]

// Menu section

export const menu={
        title:"Explore best",
        desc:"menu selections",
    }
export const menuItem=[    
    {
        id:1,
        title:"Mango Bliss Burst",
        desc:"Description of the item.",
        price:"10.00",
        img:menu1
    },
    {
        id:2,
        title:"Pure Kiwi Joy",
        desc:"Description of the item",
        price:"8.00",
        img:menu2
    },
    {
        id:3,
        title:"Berry Burst Bliss",
        desc:"Description of the item",
        price:"11.00",
        img:menu3
    }
]

// About
export const about={
    title:"Who We Are",
    desc:"At our juice bar, we pride ourselves on delivering the freshest and most delicious juices made from the highest quality ingredients. Our story began with a passion for health and wellness, and we continue to innovate with unique flavor combinations.",
    img:{aboutImg}

}

// Services
export const services={
    title:"What Services Do We Offer?",
    desc:"We offer a variety of services to cater to your needs, including customized juice blends, health consultations, and a subscription service for regular juice deliveries. Our expert staff is here to help you find the perfect juice for your lifestyle.",
    img:{servicesImg}
}

// Blog
export const blog={
    title:'Want to Stay Updated?',
    desc:"Stay updated with our latest news, health tips, and delicious recipes on our blog. We share insights on the benefits of various fruits and vegetables, and provide inspiration for living a healthy and vibrant life.",
    img:{blogImg}
}

// Contact section
export const contact={
    title:"Contact Us",
    desc:"Send us a message",
    phone:"(08) 400 2000",
    email:"xyz@gmail.com"
}

export const siteList=[
    {
        title:"Home",
        href:"#home",
    },
    {
        title:"About Us",
        href:"#about",
    },
    {
        title:"Services",
        href:"#services",
    },
    {
        title:"Blog",
        href:"#blog",
    },
    {
        title:"Contact Us",
        href:"#contact",
    }
]

export const socialList=[
    {
        title:"Facebook",
        href:"#",
    },
    {
        title:"Twitter",
        href:"#",
    },
    {
        title:"Instagram",
        href:"#",
    },
    
]


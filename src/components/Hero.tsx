import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaXingSquare,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/hero.jpg";
import { PageWrapper } from "./PageWrapper";

const Hero = () => {
  return (
    <PageWrapper name="home" classString="h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-11/12">
          <h2 className="text-4xl sm:text-7xl font-bold ">Ingo</h2>
          <h3 className="text-2xl uppercase text-zinc-500 pt-5">
            happy husband - proud dad - passionate dev
          </h3>
          <p className=" py-4 max-w-md">
            I have over 10 years of experience building software. Currently, I
            love to work on web application using technologies like React,
            Tailwind, Remix and Typescript.
          </p>

          <div className="flex gap-3 mt-10">
            <a
              href="https://www.linkedin.com/in/ingo-k-129a32196/"
              target="_blank"
            >
              <FaLinkedin
                size={32}
                className="hover:scale-110 duration-200 cursor-pointer hover:text-[#2D64BC]"
              />
            </a>
            <a
              href="https://www.xing.com/profile/Ingo_Krumbein"
              target="_blank"
            >
              <FaXingSquare
                size={32}
                className="hover:scale-110 duration-200 cursor-pointer hover:text-[#BFDD63]"
              />
            </a>
            <a href="https://github.com/Jings" target="_blank">
              <FaGithubSquare
                size={32}
                className="hover:scale-110 duration-200 cursor-pointer hover:text-black"
              />
            </a>
            <a href="https://facebook.com/ingo.krumbein" target="_blank">
              <FaFacebookSquare
                size={32}
                className="hover:scale-110 duration-200 cursor-pointer hover:text-[#3F5894]"
              />
            </a>
            <a href="mailto:website@ingo-krumbein.de?subject=Kontaktaufnahme">
              <IoMail
                size={32}
                className="hover:scale-110 duration-200 cursor-pointer hover:text-[#BE5442]"
              />
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Hero;

import {
  FaGithubSquare,
  FaLinkedin,
  FaPatreon,
  FaXingSquare,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import HeroImage from "../assets/hero.jpg";
import { AnimatedPage } from "../components/AnimatedPage";

export default function Hero() {
  return (
    <AnimatedPage>
      <div className="flex flex-auto flex-col justify-evenly gap-4 pb-10 md:flex-row">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold sm:text-7xl">Ingo</h2>
          <h3 className="pt-5 text-2xl uppercase text-zinc-500">
            happy husband - proud dad - passionate dev
          </h3>
          <p className="max-w-md py-4">
            I have about 10 years of experience building software. Currently, I
            love to work on web applications using technologies like React,
            Tailwind, Remix and Typescript.
          </p>

          <div className="mt-10 flex gap-3">
            <a
              href="https://www.linkedin.com/in/ingo-k-129a32196/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={32}
                className="cursor-pointer duration-200 hover:scale-110 hover:text-[#2D64BC]"
              />
            </a>
            <a
              href="https://www.xing.com/profile/Ingo_Krumbein"
              target="_blank"
              rel="noreferrer"
            >
              <FaXingSquare
                size={32}
                className="cursor-pointer duration-200 hover:scale-110 hover:text-[#BFDD63]"
              />
            </a>
            <a href="https://github.com/Jings" target="_blank" rel="noreferrer">
              <FaGithubSquare
                size={32}
                className="cursor-pointer duration-200 hover:scale-110 hover:text-black"
              />
            </a>
            <a
              href="https://patreon.com/IngoKrumbein"
              target="_blank"
              rel="noreferrer"
            >
              <FaPatreon
                size={32}
                className="cursor-pointer duration-200 hover:scale-110 hover:text-[#ff424d]"
              />
            </a>
            <a href="mailto:website@ingo-krumbein.de?subject=Kontaktaufnahme">
              <IoMail
                size={32}
                className="cursor-pointer duration-200 hover:scale-110 hover:text-[#BE5442]"
              />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={HeroImage}
            alt="Ingo Krumbein"
            className="max-w-xs rounded-lg md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </AnimatedPage>
  );
}

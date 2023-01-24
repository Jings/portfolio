import { FaGithubSquare, FaLinkedin, FaXingSquare } from "react-icons/fa";
import { AnimatedPage } from "../components/AnimatedPage";

const Contact = (): JSX.Element => {
  return (
    <AnimatedPage>
      <div className="p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 text-2xl font-bold md:text-4xl">
            Contact
          </p>
          <p className="py-6">
            Feel free to contact me by sending an email to{" "}
            <a href="mailto:website@ingo-krumbein.de?subject=Kontaktaufnahme">
              website(at)ingo-krumbein(dot)de
            </a>
          </p>
          <div className="mt-10 flex gap-3">
            <a
              href="https://www.linkedin.com/in/ingo-k-129a32196/"
              target="_blank"
            >
              <FaLinkedin
                size={32}
                className="cursor-pointer duration-200 hover:scale-110 hover:text-[#2D64BC]"
              />
            </a>
            <a
              href="https://www.xing.com/profile/Ingo_Krumbein"
              target="_blank"
            >
              <FaXingSquare
                size={32}
                className="cursor-pointer duration-200 hover:scale-110 hover:text-[#BFDD63]"
              />
            </a>
            <a href="https://github.com/Jings" target="_blank">
              <FaGithubSquare
                size={32}
                className="cursor-pointer duration-200 hover:scale-110 hover:text-black"
              />
            </a>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;

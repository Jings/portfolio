import { DiCss3, DiHtml5, DiMysql, DiPhp } from "react-icons/di";
import { FaHeart } from "react-icons/fa";
import { AnimatedPage } from "../components/AnimatedPage";

const About = (): JSX.Element => {
  return (
    <AnimatedPage>
      <div className="pb-8">
        <p className="inline border-b-4 border-gray-500 text-2xl font-bold md:text-4xl">
          About
        </p>
      </div>

      <p className="mt-10 text-xl">
        I started programming about 15 years ago. <br />
        Back in the days i learned Visual Basic 6 and VB.NET.
        <br />
        After some time i realized that Visual Basic only works on Windows
        machines. And since i wanted my apps to work on all distributions i came
        across web development. I then started learning{" "}
        <DiHtml5 className="inline" size={26} />,{" "}
        <DiCss3 className="inline" size={26} />,{" "}
        <DiPhp className="inline" size={48} />
        and <DiMysql className="inline" size={32} /> all by myself. After school
        i started studying Information Technology and worked a little bit as a
        kind of Freelancer. In 2014 i started my professional career.
      </p>

      <br />

      <p className="mt-10 text-xl">
        In Nov. 2021 i became a Dad. It completely changed my Life but i am more
        than proud and happy to be dad of the cutest girl in the world.{" "}
        <FaHeart color="red" className="inline" /> <br />
        In Oct. 2022 i finally married my wife! I{" "}
        <FaHeart color="red" className="inline" /> U!
        <br />
      </p>

      <p className="mt-10 pb-10 text-xl">
        When i find the time i enjoy taking photos, spent time with friends and
        do other typical stuff.
      </p>
    </AnimatedPage>
  );
};

export default About;

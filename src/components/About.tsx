import { FaHeart } from "react-icons/fa";
import { PageWrapper } from "./PageWrapper";
import { DiHtml5, DiCss3, DiPhp, DiMysql } from "react-icons/di";

const About = (): JSX.Element => {
  return (
    <PageWrapper name="about" classString="h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I started programming about 15 years ago. <br />
          Back in the days i learned Visual Basic 6 and VB.NET.
          <br />
          After some time i realized that Visual Basic only works on Windows
          machines. And since i wanted my apps to work on all distributions i
          came across web development. I then started learning{" "}
          <DiHtml5 className="inline" size={26} />,{" "}
          <DiCss3 className="inline" size={26} />,{" "}
          <DiPhp className="inline" size={48} />
          and <DiMysql className="inline" size={32} /> all by myself. After
          school i started studying Information Technology and worked a little
          bit as a kind of Freelancer. In 2014 i started my professional
          training.
        </p>

        <br />

        <p className="text-xl mt-10">
          In Nov. 2021 i became a Dad. It completely changed my Life but i am
          more than proud and happy to be dad of the cutest girl in the world.{" "}
          <FaHeart color="red" className="inline" /> <br />
          In Oct. 2022 i finally married my wife! I{" "}
          <FaHeart color="red" className="inline" /> U!
          <br /> When i find the time i enjoy taking photos, spent time with
          friends and other typical stuff.
        </p>
      </div>
    </PageWrapper>
  );
};

export default About;

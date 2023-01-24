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
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;

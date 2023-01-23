import { AnimatedPage } from "../components/AnimatedPage";

const Contact = (): JSX.Element => {
  return (
    <AnimatedPage>
      <div className="p-4">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Contact me by sending an email to{" "}
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

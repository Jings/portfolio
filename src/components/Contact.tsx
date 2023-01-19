import { PageWrapper } from "./PageWrapper";

const Contact = (): JSX.Element => {
  return (
    <PageWrapper name="contact" classString="h-screen">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Cotact
          </p>
          <p className="py-6">
            Contact me by sending an email to{" "}
            <a href="mailto:website@ingo-krumbein.de?subject=Kontaktaufnahme">
              website(at)ingo-krumbein(dot)de
            </a>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;

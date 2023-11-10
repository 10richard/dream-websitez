import Accordion from "./Accordion";
import { FAQList } from "./FAQList";

const FAQs = () => {
  return (
    // Have a dropdown
    <section id="faq" className="flex justify-center w-full py-20">
      <div className="w-5/6 flex flex-col justify-center items-center gap-16">
        <h1 className="text-5xl font-bold">FAQs</h1>

        <div className="flex flex-col gap-5 max-[800px]:w-full w-[800px]">
          {FAQList.map((faq, idx) => (
            <Accordion key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

import { useState } from "react";
import chevron from "../../assets/chevron-down.svg";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="grid gap-2">
      <button
        type="button"
        className="flex justify-between items-center gap-10 w-full"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <div className="grid text-left gap-3">
          <p className="font-bold text-lg min-[625px]:text-xl">{question}</p>
          <p className={`${toggle ? "" : "hidden"}`}>{answer}</p>
        </div>

        <img
          className={`w-[35px] ${
            toggle ? "rotate-180" : null
          } duration-500 self-start`}
          src={chevron}
          alt="Chevron down"
        />
      </button>
      <span className="bg-black h-[1px] my-2"></span>
    </div>
  );
};

export default Accordion;

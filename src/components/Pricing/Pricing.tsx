import MainButton from "../MainButton";
import { PricingList } from "./PricingList";
import onlineMeeting from "../../assets/online-meeting.svg";

const Pricing = () => {
  return (
    <section id="pricing" className="flex justify-center w-full bg-pink py-20">
      <div className="w-5/6 flex flex-col justify-center gap-16">
        <h1 className="text-5xl font-bold text-center">Select a Package</h1>

        <div className="grid min-[1316px]:grid-cols-3 gap-5">
          {PricingList.map((plan, idx) => (
            <div key={idx} className="grid gap-2">
              <div className="grid bg-white p-8">
                <h2 className="text-2xl font-bold self-start mb-12">
                  {plan.name}
                </h2>

                <div className="mb-10">
                  <h1 className="text-4xl font-bold mb-1.5">${plan.price}</h1>
                  <p className="text-xs opacity-50">One time payment</p>
                </div>

                <MainButton text="Get Started" />
              </div>

              <div className="flex flex-col gap-5 bg-white p-8 text-sm h-[350px]">
                <h1 className="font-bold">What's inluded: </h1>
                <ul className="grid gap-3 list-disc ml-4">
                  {plan.included.map((perk, _idx) => (
                    <li
                      key={_idx}
                      className={`${idx == 1 && _idx > 3 ? "font-bold" : null}`}
                    >
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="grid max-[1316px]:text-center max-[1316px]:gap-10 bg-white p-8">
            <div className="flex flex-col gap-5">
              <img
                className="w-[150px] self-center"
                src={onlineMeeting}
                alt="Virtual meeting"
              />
              <h1 className="font-bold text-2xl">Get a custom quote</h1>
              <p>Tailored solutions to meet your unique requirements.</p>
              <div>
                <a className="font-bold text-sm" href="calendly">
                  Book a call
                </a>
              </div>
            </div>

            <span className="bg-black h-[2px]"></span>

            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl">Request a discovery call</h1>
              <p>Learn more about us and how we can help you.</p>
              <div>
                <a className="font-bold text-sm" href="calendly">
                  Book discovery call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

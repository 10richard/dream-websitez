import FeaturedTestimonial from "../Testimonials/FeaturedTestimonial";
import { BenefitsList } from "./BenefitsList";
import Lottie from "lottie-react";

const Benefits = () => {
  return (
    <section id="benefits" className="flex justify-center w-full py-20">
      <div className="flex flex-col justify-center items-center text-center gap-28">
        <h1 className="text-5xl font-bold">What's Included</h1>
        <div className="flex flex-wrap items-center justify-center gap-24">
          {BenefitsList.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h1 className="font-bold text-3xl">{benefit.heading}</h1>
              <Lottie className="w-[225px]" animationData={benefit.animation} />
              <p className="text-lg w-[325px]">{benefit.description}</p>
            </div>
          ))}
        </div>
        <FeaturedTestimonial />
      </div>
    </section>
  );
};

export default Benefits;

import { TestimonialsList } from "./TestimonialsList";
import fiveStars from "../../assets/five-stars.svg";

const Testimonials = () => {
  return (
    <section className="flex justify-center w-full py-20 bg-secondary">
      <div className="w-5/6 flex flex-col justify-center gap-16">
        <div className="grid gap-5 text-center">
          <h1 className="text-5xl font-bold">Testimonials</h1>
          <p className="text-xl">Our Wall of Love.</p>
        </div>

        <div className="grid min-[940px]:grid-cols-2 min-[1315px]:grid-cols-3 gap-8">
          {TestimonialsList.map((testimonial, idx) => (
            <div
              key={idx}
              className={`bg-white grid justify-center p-10 rounded-xl border border-slate-400 gap-8 ${
                idx == 0 ? "min-[1315px]:col-span-2" : null
              }`}
            >
              <div>
                <img
                  className="h-[15px] mb-5"
                  src={fiveStars}
                  alt="Five star rating"
                />
                <h2 className="mb-5 max-[1315px]:hidden text-2xl">
                  {testimonial.highlighted}
                </h2>
                <p className="text-sm">{testimonial.review}</p>
              </div>

              <div className="flex items-center self-end gap-5">
                <img
                  className="w-[50px] rounded-full"
                  src={testimonial.portrait}
                  alt="Portrait of reviewer"
                />
                <h2 className="font-bold">{testimonial.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

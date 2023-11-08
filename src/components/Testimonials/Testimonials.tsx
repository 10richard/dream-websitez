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

        <div className="grid grid-cols-3 gap-8">
          {TestimonialsList.map((testimonial, idx) => (
            <div
              key={idx}
              className={`${testimonial.position} bg-white grid justify-center p-10 h-[300px] rounded-xl`}
            >
              <div>
                <img
                  className="h-[15px] mb-5"
                  src={fiveStars}
                  alt="Five star rating"
                />
                <p className="text-sm">{testimonial.review}</p>
              </div>

              <div className="self-end">
                <img src="" alt="" />
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

import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import MainButton from "./MainButton";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-center items-center bg-primary h-[90vh] relative overflow-hidden"
    >
      <div className="hero-text z-30 w-[900px] flex flex-col gap-5 text-center min-[785px]:mt-28 mt-20">
        <h1 className="font-bold text-7xl max-[800px]:text-5xl">
          Transforming Dreams into Digital Reality
        </h1>
        <h2 className="text-2xl"> Empowering your online presence.</h2>

        <div className="w-[250px] self-center">
          <MainButton text="See Plans" link="#pricing" />
        </div>
      </div>

      {/* Have little clouds moving in the background? */}

      <div className="">
        <img
          className="cloud-left absolute z-10 w-[500px] left-[-12%] top-[20%]"
          src={cloud1}
          alt="Pink cloud one"
        />
      </div>

      <div className="">
        <img
          className="cloud-right absolute z-10 w-[650px] right-[-15%] bottom-0"
          src={cloud2}
          alt="Pink cloud two"
        />
      </div>
    </section>
  );
};

export default Hero;

import quote from "../../assets/quote.svg";
import lacoste from "../../assets/company-logos/lacoste.svg";

const FeaturedTestimonial = () => {
  return (
    <div className="bg-pink w-5/6 h-[325px] flex flex-col items-center justify-center gap-8 relative">
      <img className="w-[50px]" src={quote} alt="Quotation" />
      <h1 className="font-bold text-3xl max-[665px]:text-2xl text-center px-3">
        "Their work is simply outstanding —
        <br className="max-[705px]:hidden" /> brilliant and professional!"
      </h1>
      <img className="w-[75px]" src={lacoste} alt="Lacoste logo" />
    </div>
  );
};

export default FeaturedTestimonial;

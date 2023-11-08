import heineken from "../../assets/company-logos/heineken.svg";
import linkedin from "../../assets/company-logos/linkedin.svg";
import redbull from "../../assets/company-logos/redbull.svg";
import revlon from "../../assets/company-logos/revlon.svg";
import spotify from "../../assets/company-logos/spotify.svg";
import tesla from "../../assets/company-logos/tesla.svg";
import netflix from "../../assets/company-logos/netflix.svg";
import paypal from "../../assets/company-logos/paypal.svg";
import sony from "../../assets/company-logos/sony.svg";

const ClientsCarousel = () => {
  return (
    <div className="bg-black py-4 relative">
      <div className="absolute -top-5 left-10 z-30 -rotate-3 bg-white px-3 py-2 rounded-xl">
        <h1 className="font-bold">Our Clients</h1>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img className="w-[90px]" src={heineken} alt="Heineken" />
          </li>
          <li>
            <img className="w-[90px]" src={linkedin} alt="Linkedin" />
          </li>
          <li>
            <img className="w-[90px]" src={redbull} alt="Redbull" />
          </li>
          <li>
            <img className="w-[90px]" src={revlon} alt="Revlon" />
          </li>
          <li>
            <img className="w-[90px]" src={spotify} alt="Spotify" />
          </li>
          <li>
            <img className="w-[90px]" src={tesla} alt="Tesla" />
          </li>
          <li>
            <img className="w-[90px]" src={netflix} alt="Netflix" />
          </li>
          <li>
            <img className="w-[90px]" src={paypal} alt="Paypal" />
          </li>
          <li>
            <img className="w-[90px]" src={sony} alt="Sony" />
          </li>
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img className="w-[90px]" src={heineken} alt="Heineken" />
          </li>
          <li>
            <img className="w-[90px]" src={linkedin} alt="Linkedin" />
          </li>
          <li>
            <img className="w-[90px]" src={redbull} alt="Redbull" />
          </li>
          <li>
            <img className="w-[90px]" src={revlon} alt="Revlon" />
          </li>
          <li>
            <img className="w-[90px]" src={spotify} alt="Spotify" />
          </li>
          <li>
            <img className="w-[90px]" src={tesla} alt="Tesla" />
          </li>
          <li>
            <img className="w-[90px]" src={netflix} alt="Netflix" />
          </li>
          <li>
            <img className="w-[90px]" src={paypal} alt="Paypal" />
          </li>
          <li>
            <img className="w-[90px]" src={sony} alt="Sony" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClientsCarousel;

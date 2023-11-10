import logo from "../assets/logo.png";
import instagram from "../assets/socials/instagram.svg";
import twitter from "../assets/socials/twitter.svg";
import facebook from "../assets/socials/facebook.svg";
import linkedin from "../assets/socials/linkedin.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center w-full bg-black text-white pt-20 pb-32">
      <div className="w-5/6 flex max-[850px]:flex-col justify-between items-center max-[850px]:gap-20">
        <div className="grid gap-2">
          <a href="#hero">
            <img
              className="invert w-[200px]"
              src={logo}
              alt="Dreamwebsitez logo"
            />
          </a>

          <div className="flex gap-5">
            <a href="group ">
              <img
                className="invert w-[35px] hover:scale-110 duration-300"
                src={instagram}
                alt=""
              />
            </a>
            <a href="">
              <img
                className="invert w-[35px] hover:scale-110 duration-300"
                src={twitter}
                alt=""
              />
            </a>
            <a href="">
              <img
                className="invert w-[35px] hover:scale-110 duration-300"
                src={facebook}
                alt=""
              />
            </a>
            <a href="">
              <img
                className="invert w-[35px] hover:scale-110 duration-300"
                src={linkedin}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 min-[480px]:gap-10 gap-8 text-sm">
          <div className="grid gap-4">
            <a href="#recentwork" className="hover:text-deeppurple">
              <button>Latest projects</button>
            </a>
            <a href="#pricing" className="hover:text-deeppurple">
              <button>Pricing</button>
            </a>
            <a
              target="_blank"
              href="https://calendly.com/dreamwebsitez/30min"
              className="hover:text-deeppurple"
            >
              <button>Contact</button>
            </a>
          </div>

          <div className="grid gap-4">
            <a href="#hero" className="hover:text-deeppurple">
              <button>Get started</button>
            </a>
            <a className="hover:text-deeppurple">
              <button>Terms & conditions</button>
            </a>
            <a className="hover:text-deeppurple">
              <button>Privacy policy</button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

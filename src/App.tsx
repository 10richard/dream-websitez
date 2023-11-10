import Benefits from "./components/Benefits/Benefits";
import CtaBanner from "./components/CtaBanner";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import RecentWork from "./components/RecentWork/RecentWork";
import Testimonials from "./components/Testimonials/Testimonials";
import ClientsCarousel from "./components/Clients/ClientsCarousel";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientsCarousel />
      <Benefits />
      <Testimonials />
      <RecentWork />
      <Pricing />
      <FAQs />
      <CtaBanner />
      <Footer />
    </>
  );
}

export default App;

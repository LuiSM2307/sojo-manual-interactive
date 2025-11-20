import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemaI from "@/components/sections/TemaI";
import ScrollToTop from "@/components/ScrollToTop";

const TemaIPage = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="pt-20">
        <TemaI />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TemaIPage;

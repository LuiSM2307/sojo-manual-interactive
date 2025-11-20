import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemaIV from "@/components/sections/TemaIV";
import ScrollToTop from "@/components/ScrollToTop";

const TemaIVPage = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="pt-20">
        <TemaIV />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TemaIVPage;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemaII from "@/components/sections/TemaII";
import ScrollToTop from "@/components/ScrollToTop";

const TemaIIPage = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="pt-20">
        <TemaII />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TemaIIPage;

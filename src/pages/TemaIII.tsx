import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemaIII from "@/components/sections/TemaIII";
import ScrollToTop from "@/components/ScrollToTop";

const TemaIIIPage = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="pt-20">
        <TemaIII />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TemaIIIPage;

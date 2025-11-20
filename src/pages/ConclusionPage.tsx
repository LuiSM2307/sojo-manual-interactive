import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Conclusion from "@/components/sections/Conclusion";
import ScrollToTop from "@/components/ScrollToTop";

const ConclusionPage = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="pt-20">
        <Conclusion />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ConclusionPage;

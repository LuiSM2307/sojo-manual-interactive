import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/sections/Introduction";
import TemaI from "@/components/sections/TemaI";
import TemaII from "@/components/sections/TemaII";
import TemaIII from "@/components/sections/TemaIII";
import TemaIV from "@/components/sections/TemaIV";
import Conclusion from "@/components/sections/Conclusion";
import Glossary from "@/components/sections/Glossary";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Introduction />
      <TemaI />
      <TemaII />
      <TemaIII />
      <TemaIV />
      <Conclusion />
      <Glossary />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Glossary from "@/components/sections/Glossary";
import ScrollToTop from "@/components/ScrollToTop";

const GlosarioPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    if (searchQuery) {
      // Scroll to glossary and trigger search
      const glossaryElement = document.getElementById("glosario");
      if (glossaryElement) {
        glossaryElement.scrollIntoView({ behavior: "smooth" });
      }
      // The search input will be populated by the Glossary component
    }
  }, [searchQuery]);

  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="pt-20">
        <Glossary initialSearch={searchQuery || ""} />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default GlosarioPage;

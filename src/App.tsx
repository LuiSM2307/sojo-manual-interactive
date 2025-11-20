import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Desarrolladores from "./pages/Desarrolladores";
import TemaIPage from "./pages/TemaI";
import TemaIIPage from "./pages/TemaII";
import TemaIIIPage from "./pages/TemaIII";
import TemaIVPage from "./pages/TemaIV";
import ConclusionPage from "./pages/ConclusionPage";
import GlosarioPage from "./pages/GlosarioPage";
import BusquedaPage from "./pages/BusquedaPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="manual-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnMount />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tema-i" element={<TemaIPage />} />
            <Route path="/tema-ii" element={<TemaIIPage />} />
            <Route path="/tema-iii" element={<TemaIIIPage />} />
            <Route path="/tema-iv" element={<TemaIVPage />} />
            <Route path="/conclusion" element={<ConclusionPage />} />
            <Route path="/glosario" element={<GlosarioPage />} />
            <Route path="/busqueda" element={<BusquedaPage />} />
            <Route path="/desarrolladores" element={<Desarrolladores />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

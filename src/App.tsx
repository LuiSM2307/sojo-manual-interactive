import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load heavy pages
const Desarrolladores = lazy(() => import("./pages/Desarrolladores"));
const TemaIPage = lazy(() => import("./pages/TemaI"));
const TemaIIPage = lazy(() => import("./pages/TemaII"));
const TemaIIIPage = lazy(() => import("./pages/TemaIII"));
const TemaIVPage = lazy(() => import("./pages/TemaIV"));
const ConclusionPage = lazy(() => import("./pages/ConclusionPage"));
const GlosarioPage = lazy(() => import("./pages/GlosarioPage"));
const BusquedaPage = lazy(() => import("./pages/BusquedaPage"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse text-primary text-lg font-medium">Cargando...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="manual-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnMount />
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

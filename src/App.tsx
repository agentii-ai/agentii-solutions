import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import FinanceUseCase from "./pages/FinanceUseCase";
import InsuranceUseCase from "./pages/InsuranceUseCase";
import VideoUseCase from "./pages/VideoUseCase";
import SyntheticUseCase from "./pages/SyntheticUseCase";
import SyntheticDataSolution from "./pages/SyntheticDataSolution";
import About from "./pages/About";
import DocumentProcessing from "./pages/DocumentProcessing";
import VideoAudioSolution from "./pages/VideoAudioSolution";
import RequestDemo from "./pages/RequestDemo";
import AgenticSearch from "./pages/AgenticSearch";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { i18n } = useTranslation();

  // Update document lang attribute when language changes
  document.documentElement.lang = i18n.language === 'zh' ? 'zh-CN' : 'en';

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/request-demo" element={<RequestDemo />} />
            <Route path="/solutions/document-processing" element={<DocumentProcessing />} />
            <Route path="/solutions/video-audio" element={<VideoAudioSolution />} />
            <Route path="/use-cases/finance" element={<FinanceUseCase />} />
            <Route path="/use-cases/insurance" element={<InsuranceUseCase />} />
            <Route path="/use-cases/video-generation" element={<VideoUseCase />} />
            <Route path="/use-cases/synthetic-data" element={<SyntheticUseCase />} />
            <Route path="/solutions/synthetic-data" element={<SyntheticDataSolution />} />
            <Route path="/research/agentic-search" element={<AgenticSearch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const App = () => (
  <Suspense fallback={<div className="flex h-screen items-center justify-center bg-background text-foreground">Loading...</div>}>
    <AppContent />
  </Suspense>
);

export default App;

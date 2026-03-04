import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FinanceUseCase from "./pages/FinanceUseCase";
import VideoUseCase from "./pages/VideoUseCase";
import SyntheticDataUseCase from "./pages/SyntheticDataUseCase";
import About from "./pages/About";
import DocumentProcessing from "./pages/DocumentProcessing";
import VideoAudioSolution from "./pages/VideoAudioSolution";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions/document-processing" element={<DocumentProcessing />} />
          <Route path="/solutions/video-audio" element={<VideoAudioSolution />} />
          <Route path="/use-cases/finance" element={<FinanceUseCase />} />
          <Route path="/use-cases/video-generation" element={<VideoUseCase />} />
          <Route path="/use-cases/synthetic-data" element={<SyntheticDataUseCase />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

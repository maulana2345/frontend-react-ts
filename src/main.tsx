import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from './App.tsx'

// Import BrowserRouter dari react router
import { BrowserRouter } from "react-router";

// Import QueryClient dan QueryClientProvider dari react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Init QueryClient
const queryClient = new QueryClient()

// Import AuthProvider
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
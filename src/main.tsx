import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './App'
import { RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={10}
        containerStyle={{
          padding: "10",
        }}
        toasterId="default"
        toastOptions={{
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            border: "1px solid #000",
            background: "#000",
            color: "#fff",
            borderRadius: "10px",
            padding: "16px 25px",
            fontFamily: "sans-serif",
          },
          success: {
            duration: 5000,
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
        }}
      />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryclient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryclient}> */}
    <App />
    {/* </QueryClientProvider>
    <ReactQueryDevtools /> */}
  </React.StrictMode>
);

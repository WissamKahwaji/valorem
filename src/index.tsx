import React from "react";
import { createRoot } from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Wrapper from "./Wrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const container = document.getElementById("root")!;
const root = createRoot(container);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Wrapper />
    </React.StrictMode>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

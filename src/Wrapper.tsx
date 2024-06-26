import React from "react";
// import { store } from "./app/store";
import Routes from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga4";

const Wrapper = () => {
  ReactGA.initialize("G-NMZBB9Z5D3");
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    // <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ToastContainer />
      <Routes />
    </QueryClientProvider>
    // </Provider>
  );
};

export default Wrapper;

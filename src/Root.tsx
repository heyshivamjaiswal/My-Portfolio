import { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppLoader from "./components/AppLoader";

export default function Root() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.remove();
    }
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  );
}

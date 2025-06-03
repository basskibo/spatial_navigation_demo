import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { init } from "@noriginmedia/norigin-spatial-navigation";

init({
   debug: false,
   visualDebug: false,
   nativeMode: false,
   throttle: 50,
   useGetBoundingClientRect: true,
   shouldFocusDOMNode: true,
   distanceCalculationMethod: "center",
   shouldUseNativeEvents: false 
});

document.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
    }
  }, { passive: false });
  
createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </StrictMode>
);

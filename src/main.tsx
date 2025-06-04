import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { init } from "@noriginmedia/norigin-spatial-navigation";

const isTV =
   /Tizen|Web0S|SmartTV|TV/.test(navigator.userAgent) || 
   (navigator.userAgent.includes("SMART-TV") || navigator.userAgent.includes("HbbTV"));

   console.log('Navigator agetn ', navigator.userAgent)
init({
   debug: true,
   visualDebug: true,
   nativeMode: true,
   throttle: 50,
   useGetBoundingClientRect: true,
   shouldFocusDOMNode: true,
   distanceCalculationMethod: "center",
   shouldUseNativeEvents: false 
});

document.addEventListener('keydown', (e) => {
    console.log("Key pressed:", e.key, "KeyCode:", e.keyCode);

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

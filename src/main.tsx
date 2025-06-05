import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { init, setKeyMap } from "@noriginmedia/norigin-spatial-navigation";

const isTV = /Tizen|Web0S|SmartTV|TV|VIDAA|HbbTV/.test(navigator.userAgent);
const nativeMode = isTV && !/VIDAA/.test(navigator.userAgent);

console.log("Navigator agent ", navigator.userAgent);
console.log("Native mode ", nativeMode);
init({
   debug: false,
   visualDebug: false,
   nativeMode,
   throttle: isTV ? 100 : 50,
   useGetBoundingClientRect: true,
   shouldFocusDOMNode: true,
   distanceCalculationMethod: "center",
   shouldUseNativeEvents: false
});

setKeyMap({
   left: 37,
   up: 38,
   right: 39,
   down: 40,
   enter: 13,
   back: 461,
});

if (!nativeMode) {
   window.addEventListener("keydown", (e) => {
      if (
         ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"].includes(
            e.key
         )
      ) {
         e.preventDefault();
      }
   });
}

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </StrictMode>
);

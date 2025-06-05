import React, { useMemo } from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { scrollIntoViewConfig } from "../config/configuration";

const FeaturedBanner: React.FC<{ parentKey: string }> = ({
    parentKey
}) => {
   const { ref, focused } = useFocusable({
      focusKey: `${parentKey}-featured`,
      onFocus:() => {
        console.log('Scroolling into view !!!!')
        ref.current?.scrollTo(scrollIntoViewConfig);
        
      }
   });
   //   const isTV =
   //   /Tizen|Web0S|SmartTV|TV/.test(navigator.userAgent) ||
   //   (navigator.userAgent.includes("SMART-TV") || navigator.userAgent.includes("HbbTV") || navigator.userAgent.includes("VIDAA"));
   const isVIDAA = useMemo(() => /VIDAA/.test(navigator.userAgent), []);
   return (
      <div
         ref={ref}
         style={{
            display: "flex",
            flexDirection: "column",
            height: "40vh",
            width: "100%",
            borderRadius: "12px",
            // overflow: "hidden",
            marginBottom: "32px",
            // position: "relative",
            backgroundColor: "#000",
            backgroundImage:
               "linear-gradient(to right, #000 30%, transparent 70%)",
         }}
      >
         <div
            style={{
               padding: "32px",
               display: "flex",
               flexDirection: "column",
               justifyContent: "flex-end",
               height: "100%",
               color: "white",
               maxWidth: "40%",
            }}
         >
            <h2
               style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  marginBottom: "16px",
               }}
            >
               Featured Movie
            </h2>
            <p
               style={{
                  fontSize: "16px",
                  marginBottom: "24px",
                  lineHeight: 1.5,
               }}
            >
               A mysterious hero rises in a city of chaos. Will justice prevail?
               User agent {navigator.userAgent}
               {isVIDAA && (
                  <div style={{ fontSize: 12, opacity: 0.5 }}>
                     Optimized for VIDAA TV
                  </div>
               )}
            </p>
            <button
             ref={ref}
             className={`focusable ${focused ? 'focused' : ''}`}
               style={{
                  height: "60px",
                  width: "160px",
                  backgroundColor: focused
                     ? "#0f62fe"
                     : "rgba(51, 51, 51, 0.8)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "background-color 0.2s ease",
               }}
            >
               ▶ Watch Now
            </button>
         </div>
      </div>
   );
};

export default FeaturedBanner;

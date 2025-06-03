import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

const FeaturedBanner: React.FC<{ parentFocusKey: string }> = ({ parentFocusKey }) => {
   const { ref, focused } = useFocusable({
      focusKey: `${parentFocusKey}-featured`,
   });

   return (
      <div
         ref={ref}
         style={{
            height: "40vh",
            backgroundSize: "100%",
            backgroundPosition: "center",
            borderRadius: "12px",
            position: "relative",
            marginBottom: "24px",
            overflow: "hidden",
         }}
      >
         <div
            style={{
               position: "absolute",
               bottom: 0,
               padding: "20px",
               background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
               color: "white",
               width: "100%",
            }}
         >
            <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Featured Movie</h2>
            <p>
                Lorem ipsum ....
            </p>
            <button
               style={{
                  padding: "10px 20px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: focused ? "#00FFFF" : "#ffffff",
                  color: focused ? "#000000" : "#000000",
                  fontWeight: "bold",
                  cursor: "pointer",
               }}
            >
               Watch Now
            </button>
            

         </div>
      </div>
   );
};

export default FeaturedBanner;

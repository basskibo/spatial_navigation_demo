import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { PackageShelfProps } from "../../interfaces/interfaces";
import { scrollIntoViewConfig } from "../../../config/configuration";

const ShelfItemE: React.FC<PackageShelfProps> = ({
   item,
   config,
   index,
   parentKey,
}) => {
   const { ref, focused } = useFocusable({
      focusKey: `${parentKey}-item-${index}`,
      onFocus: () => {
         ref.current?.scrollIntoView(scrollIntoViewConfig);
         console.log(config);
      },
   });

   return (
      <div
         ref={ref}
         className={`focusable ${focused ? "focused" : ""}`}
         tabIndex={-1}
         style={{
            minWidth: "520px",
            height: "240px",
            background: focused
               ? "linear-gradient(135deg, #8a2be2, #4b0082)"
               : "#333",
            color: "#fff",
            borderRadius: "8px",
            display: "flex",
            backdropFilter: "blur(2px)",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            flexShrink: 0,
            // boxShadow: focused ? "0 0 0 3px white" : "none",
            // transition: "all 0.2s ease",
            padding: "16px",
            // position: "relative",
            overflow: "hidden",
         }}
      >
         <div
            style={{
               fontSize: "24px",
               fontWeight: "700",
               marginBottom: "8px",
               zIndex: 2,
               textAlign: "center",
            }}
         >
            {item.title}
         </div>

         <div
            style={{
               fontSize: "16px",
               color: focused ? "#fff" : "#eee",
               zIndex: 2,
               textAlign: "center",
            }}
         >
            {item.package_type || "Premium Package"}
         </div>

         <div
            style={{
               position: "absolute",
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               background: focused
                  ? "linear-gradient(135deg, rgba(138, 43, 226, 0.7), rgba(75, 0, 130, 0.7))"
                  : "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
               zIndex: 1,
            }}
         />

         {item.img && (
            <img
               src={item.img}
               alt=''
               style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
               }}
               loading="lazy"
            />
         )}
      </div>
   );
};

export default ShelfItemE;

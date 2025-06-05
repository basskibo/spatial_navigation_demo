import { ShelfConfig } from "../../../store/shelvesSlice";
import { scrollIntoViewConfig } from "../../../config/configuration";
import { memo, useEffect, useRef } from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

interface ShelfProps {
   item: { title: string; img: string };
   config: ShelfConfig;
   index: number;
   parentKey: string;
}

const ShelfItemA: React.FC<ShelfProps> = ({
   item,
   config,
   index,
   parentKey,
}) => {
   console.log(`##### ShelfItem ${parentKey}-item-${index}`);
   const { ref, focused } = useFocusable({
      focusKey: `${parentKey}-item-${index}`,
      onFocus: () => {
         ref.current?.scrollIntoView(scrollIntoViewConfig);

         console.log(`Focused: ${config.title}-item-${index}`);
      },
      extraProps: {},
   });

   return (
      <div
         ref={ref}
         className={`focusable ${focused ? "focused" : ""}`}
           tabIndex={-1}
         style={{
            width: "36vh",
            height: "10vh",
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
            position: "relative",
            margin: "10px",
            padding: "15px 10px",

            flexShrink: 0,
            // boxShadow: focused
            //    ? "0 0 0 3px #00FFFF"
            //    : "0 0 3px rgba(0, 0, 0, 0.5)",
            // transition: "transform 0.2s",
            // transform: focused ? "scale(1.05)" : "scale(1)",
            overflow: "hidden",
         }}
      />
   );
};

export default memo(ShelfItemA);

import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { memo, useEffect } from "react";
import { scrollIntoViewConfig } from "../../../config/configuration";

interface ShelfProps {
   item: string;
   config: {
      title: string;
   };
   index: number;
   parentKey: string;
}

const ShelfItemB: React.FC<ShelfProps> = ({
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

   useEffect(() => {
      console.log(`Item ${index} focused:`, focused);

      if (focused && ref.current) {
         ref.current.scrollIntoView(scrollIntoViewConfig);
      }
   }, [focused]);

   return (
      <div
         ref={ref}
         tabIndex={-1}
         className='focusable'
         style={{
            minWidth: "32vh",
            height: "32vh",
            backgroundColor: focused ? "#0f62fe" : "#333",
            color: "#fff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            flexShrink: 0,
            // boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
         }}
      >
         {item}
      </div>
   );
};

export default memo(ShelfItemB);

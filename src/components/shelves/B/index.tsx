import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";

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
         ref.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
         });
         console.log(`Focused: ${config.title}-item-${index}`);
      },
      extraProps: {},
   });

   useEffect(() => {
      console.log(`Item ${index} focused:`, focused);

      if (focused && ref.current) {
         ref.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
         });
      }
   }, [focused]);

   return (
      <div
         ref={ref}
         tabIndex={-1}
         className='focusable'
         style={{
            minWidth: "320px",
            height: "160px",
            backgroundColor: focused ? "#0f62fe" : "#333",
            color: "#fff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            flexShrink: 0,
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
         }}
      >
         {item}
      </div>
   );
};

export default ShelfItemB;

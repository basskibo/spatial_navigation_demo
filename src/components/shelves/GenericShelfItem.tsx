import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { ShelfItemProps } from "./GenericShelf";
import { useEffect } from "react";

const GenericShelfItem: React.FC<ShelfItemProps> = ({
   item,
   config,
   index,
   parentKey,
   itemStyle = {},
}) => {
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
   });

   useEffect(() => {
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
         className={`focusable ${focused ? "focused" : ""}`}
         style={{
            minWidth: "240px",
            height: "100px",
            backgroundColor: focused ? "#0f62fe" : "#333",
            color: "#fff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            flexShrink: 0,
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
            ...itemStyle,
         }}
      >
         {item}
      </div>
   );
};

export default GenericShelfItem;

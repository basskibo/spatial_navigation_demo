import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { ShelfItemProps } from "../interfaces/interfaces";



const GenericShelfItem: React.FC<ShelfItemProps> = ({
   item,
   config ,
   index,
   parentKey,
}) => {
   const { ref, focused } = useFocusable({
      focusKey: `${parentKey}-item-${index}`,
   });

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
            // boxShadow: focused? 'shadow-glow' : "0 2px 4px rgba(0,0,0,0.3)",
         }}
      >
         {item.title}
      </div>
   );
};

export default GenericShelfItem;

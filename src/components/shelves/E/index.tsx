// ShelfItemC.tsx
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

interface ShelfProps {
   item: string;
   config: { title: string };
   index: number;
   parentKey: string;
}

const ShelfItemC: React.FC<ShelfProps> = ({
   item,
   config,
   index,
   parentKey,
}) => {
   const { ref, focused } = useFocusable({
      focusKey: `${parentKey}-item-${index}`,
      onFocus: () => {
         ref.current?.scrollIntoView({ behavior: "smooth", inline: "center" });
         console.log(`Focused: ${config.title}-item-${index}`);
      },
   });

   return (
      <div
         ref={ref}
         className={`focusable ${focused ? "focused" : ""}`}
         tabIndex={-1}
         style={{
            minWidth: "200px",
            height: "200px",
            background: focused ? "purple" : "#444",
            border: "4px dashed white",
            color: "#fff",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            flexShrink: 0,
         }}
      >
         {item}
      </div>
   );
};

export default ShelfItemC;

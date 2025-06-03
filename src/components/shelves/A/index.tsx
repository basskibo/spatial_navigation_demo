import { SpatialNavigation, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { ShelfConfig } from "../../../store/shelvesSlice";

interface ShelfProps {
   item: {title: string; img: string;};
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
          ref.current?.scrollIntoView({
             behavior: "smooth",
             block: "nearest",
             inline: "center",
          });
          console.log(`Focused: ${config.title}-item-${index}`);
       },
       extraProps: {
 
       },
    });
 
 
 
    return (
       <div
          ref={ref}
          onClick={() => SpatialNavigation.setFocus(`${parentKey}-item-${index}`)}
          className={`focusable ${focused ? 'focused' : ''}`}
          tabIndex={-1}
         style={{
            width: "32vh",
            height: "12vh",
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
            position: "relative",
            margin: "0 8px",
            flexShrink: 0,
            boxShadow: focused
              ? "0 0 0 5px #00FFFF"
              : "0 0 4px rgba(0, 0, 0, 0.5)",
            transition: "transform 0.2s",
            transform: focused ? "scale(1.05)" : "scale(1)",
            overflow: "hidden",
          }}
       />

    );
 };

 export default ShelfItemA;
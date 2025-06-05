import React, { useEffect, useState, useContext, memo } from "react";
import {
   FocusContext,
   useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { ShelfConfig } from "../../store/shelvesSlice";

interface BaseShelfProps<T> {
   config: ShelfConfig;
   parentKey: string;
   loadItems: () => Promise<T[]>;
   renderItem: (item: T, index: number) => React.ReactNode;
}

function BaseShelf<T>({
   config,
   parentKey,
   loadItems,
   renderItem,
}: BaseShelfProps<T>) {
   const [items, setItems] = useState<T[]>([]);
   const [error, setError] = useState<string | null>(null);

   const { ref, focusKey } = useFocusable({
      focusKey: `${parentKey}-${config.id}`,
      trackChildren: true,
   });

   const focusContext = useContext(FocusContext);
   console.log("Parent focus key:", focusContext);

   useEffect(() => {
      console.log("Shelf focusKey:", focusKey);
   }, [focusKey]);

   useEffect(() => {
      loadItems()
         .then(setItems)
         .catch(() => setError(`Failed to load data for ${config.title}`));
   }, [config]);

   if (error) return <div>{error}</div>;

   return (
      <FocusContext.Provider value={focusKey}>
         <div ref={ref} className="shelfTypeContainer">
            <h3 style={{ color: "#fff", marginBottom: "12px" }}>{config.title}</h3>
            <div
               style={{
                  display: "flex",
                  gap: 36,
                  overflowX: "auto",
                  padding: "15px 0",
                  height: '100%' 
               }}
            >
               {items.map((item, index) => renderItem(item, index))}
            </div>
         </div>
      </FocusContext.Provider>
   );
}

export default memo(BaseShelf);

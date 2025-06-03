// ShelfTypeC.tsx
import React from "react";
import BaseShelf from "../GenericShelf";
import ShelfItemD from ".";
import { ShelfConfig } from "../../../store/shelvesSlice";

interface Props {
   config: ShelfConfig;
   parentKey: string;
}

const ShelfTypeE: React.FC<Props> = ({ config, parentKey }) => {
   const loadItems = () => {
      return new Promise<string[]>((resolve) => {
         setTimeout(() => {
            resolve(["Discovery+", "Paramount+", "HBO Go", "Crave", "Peacock"]);
         }, 500);
      });
   };

   return (
      <BaseShelf
         config={config}
         parentKey={parentKey}
         loadItems={loadItems}
         renderItem={(item, index) => (
            <ShelfItemD
               key={index}
               item={item}
               config={config}
               parentKey={parentKey}
               index={index}
            />
         )}
      />
   );
};

export default ShelfTypeE;

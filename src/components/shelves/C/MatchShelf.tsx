// ShelfTypeC.tsx
import React, { memo } from "react";
import BaseShelf from "../BaseShelf";
import ShelfItemC from "./MatchShelfItem";
import { ShelfConfig } from "../../../store/shelvesSlice";
import { MatchItem } from "../../interfaces/interfaces";

interface Props {
   config: ShelfConfig;
   parentKey: string;
}

const MatchShelf: React.FC<Props> = ({ config, parentKey }) => {
   const loadItems = () => {
      return new Promise<MatchItem[]>((resolve) => {
         setTimeout(() => {
            resolve(config.data);
         }, 500);
      });
   };

   return (
      <BaseShelf
         config={config}
         parentKey={parentKey}
         loadItems={loadItems}
         renderItem={(item, index) => (
            <ShelfItemC
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

export default memo(MatchShelf);

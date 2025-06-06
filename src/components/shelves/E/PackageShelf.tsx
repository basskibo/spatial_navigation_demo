import React, { memo } from "react";
import BaseShelf from "../BaseShelf";
import ShelfItemD from "./PackageShelfItem";
import { ShelfConfig } from "../../../store/shelvesSlice";
import { SingleShelfItemProps } from "../../interfaces/interfaces";

interface Props {
   config: ShelfConfig;
   parentKey: string;
}

const ShelfTypeE: React.FC<Props> = ({ config, parentKey }) => {
   const loadItems = () => {
      return new Promise<SingleShelfItemProps[]>((resolve) => {
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

export default memo( ShelfTypeE);

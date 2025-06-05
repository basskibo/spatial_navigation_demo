import GenericShelf from "../BaseShelf";
import GenericShelfItem from "../GenericShelfItem";
import { ShelfConfig } from "../../../store/shelvesSlice";
import BaseShelf from "../BaseShelf";
import { memo } from "react";

const ShelfTypeB = ({ config, parentKey }: { config: ShelfConfig; parentKey: string }) => {
   const loadItems = () =>
      new Promise<{ title: string; img: string }[]>((resolve, reject) => {
         setTimeout(() => {
            if (config.fail) reject();
            else
               resolve(config.data);
         }, 500);
      });

   return (
      <BaseShelf
         config={config}
         parentKey={parentKey}
         loadItems={loadItems}
         renderItem={(item: { title: string; img? : string;}, index) => (
            <GenericShelfItem
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

export default  memo(ShelfTypeB);

import { memo } from "react";
import { ShelfConfig } from "../../../store/shelvesSlice";
import ShelfItemA from "./AppsShelfItem";
import { SingleShelfItemProps } from "../../interfaces/interfaces";
import BaseShelf from "../BaseShelf";

const ShelfTypeA = ({
   config,
   parentKey,
}: {
   config: ShelfConfig;
   parentKey: string;
}) => {
   const loadItems = () =>
      new Promise<SingleShelfItemProps[]>((resolve, reject) => {
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
         renderItem={(item, index) => (
            <ShelfItemA
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

export default memo(ShelfTypeA);

import React, {memo} from "react";
import BaseShelf from "../BaseShelf";
import ShelfItemD from "./MovieShelfItem";
import { ShelfConfig } from "../../../store/shelvesSlice";

interface Props {
  config: ShelfConfig;
  parentKey: string;
}

const ShelfTypeD: React.FC<Props> = ({ config, parentKey }) => {
  const loadItems = () => {
    return new Promise<MovieItem[]>((resolve) => {
      setTimeout(() => {
        resolve(config.data);
      }, 300);
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

export interface MovieItem {
  title: string;
  year: string;
  image: string;
}

export default memo(ShelfTypeD);

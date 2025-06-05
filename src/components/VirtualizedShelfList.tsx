import React from "react";
import { ShelfConfig } from "../store/shelvesSlice";
import LazyShelfRenderer from "./LazyShelfRenderer";

interface VirtualizedShelfListProps {
  shelves: ShelfConfig[];
  parentFocusKey: string;
}

const ROW_HEIGHT = 350;

const VirtualizedShelfList: React.FC<VirtualizedShelfListProps> = ({
  shelves,
  parentFocusKey,
}) => {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "auto",
        width: "100vw",
      }}
    >
      {shelves.map((shelf, index) => (
        <div key={index} style={{ height: ROW_HEIGHT }}>
          <LazyShelfRenderer
            config={shelf}
            parentFocusKey={`${parentFocusKey}-shelf-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default VirtualizedShelfList;

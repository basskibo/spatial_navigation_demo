// components/LazyShelfRenderer.tsx
import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import ShelfRenderer from "./ShelfRenderer";
import { ShelfConfig } from "../store/shelvesSlice";

interface Props {
   config: ShelfConfig;
   parentFocusKey: string;
}

const LazyShelfRenderer: React.FC<Props> = ({ config, parentFocusKey }) => {
   const [ref, isVisible] = useIntersectionObserver({
      rootMargin: "400px", // preload before it actually appears
      threshold: 0.01,
   });

   return (
      <div ref={ref} style={{ minHeight: "200px" }}>
         {isVisible ? (
            <ShelfRenderer
               config={config}
               parentFocusKey={`${parentFocusKey}-${config.id}`}
            />
         ) : null}
      </div>
   );
};

export default LazyShelfRenderer;

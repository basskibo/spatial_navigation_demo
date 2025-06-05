import React, { memo } from "react";
import { ShelfConfig } from "../store/shelvesSlice";
import ShelfTypeA from "./shelves/A/AppsShelf";
import ShelfTypeC from "./shelves/C/MatchShelf";
import {
   FocusContext,
   useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import ShelfTypeD from "./shelves/D/MovieShelf";
import ShelfTypeE from "./shelves/E/PackageShelf";
import FeaturedBanner from "./FeaturedBanner";

interface Props {
   config: ShelfConfig;
   parentFocusKey: string;
}
const ShelfRenderer: React.FC<Props> = memo(({ config, parentFocusKey }) => {
   const { ref, focusKey } = useFocusable({
      focusKey: `${parentFocusKey}-${config.id}`,
      isFocusBoundary: false, // Changed from true to false
      saveLastFocusedChild: false,
   });
   //    console.log(`##### ShelfRenderer: ${parentFocusKey}-shelf-${config.id}`);

   return (
      <FocusContext.Provider value={focusKey}>
         <div ref={ref}>
            {(() => {
               switch (config.type) {
                  case "FEATURED":
                    console.log(`>>>${focusKey}-FEATURED`)
                     return <FeaturedBanner parentKey={focusKey} />;
                  case "TYPE_A":
                     return (
                        <ShelfTypeA
                           config={config}
                           parentKey={focusKey}
                           key={`${focusKey}-typeA`}
                        />
                     );
                  case "TYPE_B":
                     return (
                        <ShelfTypeA
                           config={config}
                           parentKey={focusKey}
                           key={`${focusKey}-typeB`}
                        />
                     );
                  case "TYPE_C":
                     return (
                        <ShelfTypeC
                           config={config}
                           parentKey={focusKey}
                           key={`${focusKey}-typeC`}
                        />
                     );
                  case "TYPE_D":
                     return (
                        <ShelfTypeD
                           config={config}
                           parentKey={focusKey}
                           key={`${focusKey}-typeD`}
                        />
                     );
                  case "TYPE_E":
                     return (
                        <ShelfTypeE
                           config={config}
                           parentKey={focusKey}
                           key={`${focusKey}-typeE`}
                        />
                     );
                  default:
                     console.warn(`Unknown shelf type: ${config.type}`);
                     return null;
               }
            })()}
         </div>
      </FocusContext.Provider>
   );
});

export default ShelfRenderer;

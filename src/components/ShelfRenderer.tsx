import React from "react";
import { ShelfConfig } from "../store/shelvesSlice";
import ShelfTypeA from "./shelves/A/ShelfTypeA";
import ShelfTypeB from "./shelves/B/ShelfTypeB";
import ShelfTypeC from "./shelves/C/ShelfTypeC";
import {
   FocusContext,
   useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import ShelfTypeD from "./shelves/D/ShelfTypeD";
import ShelfTypeE from "./shelves/E/ShelfTypeE";

interface Props {
   config: ShelfConfig;
   parentFocusKey: string;
}
const ShelfRenderer: React.FC<Props> = ({ config, parentFocusKey }) => {
   const { ref, focusKey } = useFocusable({
      focusKey: `${parentFocusKey}-${config.id}`,
      isFocusBoundary: false, // Changed from true to false
      saveLastFocusedChild: true,
   });
   console.log(`##### ShelfRenderer: ${parentFocusKey}-shelf-${config.id}`);

   return (
      <FocusContext.Provider value={focusKey}>
         <div ref={ref}>
            {(() => {
               switch (config.type) {
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
};

export default React.memo(ShelfRenderer);

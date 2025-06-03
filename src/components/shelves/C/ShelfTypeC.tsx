// ShelfTypeC.tsx
import React from "react";
import BaseShelf from "../GenericShelf";
import ShelfItemC from ".";
import { ShelfConfig } from "../../../store/shelvesSlice";

interface Props {
   config: ShelfConfig;
   parentKey: string;
}

const ShelfTypeC: React.FC<Props> = ({ config, parentKey }) => {
   const loadItems = () => {
      return new Promise<any[]>((resolve) => {
         setTimeout(() => {
            resolve([
               {
                  team1Logo: "🏐", // Replace with real image URLs
                  team2Logo: "🎯",
                  team1Name: "Diamond Food",
                  team2Name: "Khonkaen Star",
                  matchDate: "27 April",
                  matchTime: "09:30",
                  category: "WOMEN",
                  tournament: "VTL 2024-25",
                  channel: "true sports 2",
                  bgColor: "#ea4f9e",
               },
               {
                  team1Logo: "🏐",
                  team2Logo: "🌿",
                  team1Name: "Supreme",
                  team2Name: "Nakhon Ratchasima",
                  matchDate: "28 April",
                  matchTime: "05:00",
                  category: "WOMEN",
                  tournament: "VTL 2024-25",
                  channel: "true sports 2",
                  bgColor: "#ea4f9e",
               },
               {
                  team1Logo: "🛡️",
                  team2Logo: "🐍",
                  team1Name: "Proflex",
                  team2Name: "Air Force",
                  matchDate: "28 April",
                  matchTime: "09:30",
                  category: "MEN",
                  tournament: "VTL 2024-25",
                  channel: "true sports 2",
                  bgColor: "#4562f3",
               },
            ]);
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

export default ShelfTypeC;

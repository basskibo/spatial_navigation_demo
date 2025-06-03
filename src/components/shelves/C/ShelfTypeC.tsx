// ShelfTypeC.tsx
import React from "react";
import BaseShelf from "../GenericShelf";
import ShelfItemC from ".";
import { ShelfConfig } from "../../../store/shelvesSlice";
import { MatchItem } from "../../interfaces/interfaces";

interface Props {
   config: ShelfConfig;
   parentKey: string;
}

const ShelfTypeC: React.FC<Props> = ({ config, parentKey }) => {
   const loadItems = () => {
      return new Promise<MatchItem[]>((resolve) => {
         setTimeout(() => {
            resolve([
               {
                  team1Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png", // Replace with real image URLs
                  team2Logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/640px-FC_Barcelona_%28crest%29.svg.png",
                  team1Name: "Manchester United",
                  team2Name: "Barcelona",
                  matchDate: "27 April",
                  matchTime: "09:30",
                  category: "UCL",
                  tournament: "VTL 2024-25",
                  channel: "true sports 2",
                  bgColor: "#242424",
               },
               {
                  team1Logo: "https://pngdownload.io/wp-content/uploads/2024/02/Borussia-Dortmund-Logo-football-Bundesliga-transparent-PNG-image-jpg.webp",
                  team2Logo: "https://pngdownload.io/wp-content/uploads/2024/01/Bayern-Munich-Logo-football-Bundesliga-transparent-PNG-image-jpg.webp",
                  team1Name: "Borusia Dortmund",
                  team2Name: "Bayern Munich",
                  matchDate: "28 April",
                  matchTime: "05:00",
                  category: "WOMEN",
                  tournament: "VTL 2024-25",
                  channel: "true sports 2",
                  bgColor: "#FF3F33",
               },
               {
                team1Logo: "https://pngdownload.io/wp-content/uploads/2023/12/Juventus-Logo-emblem-of-the-football-club-transparent-png-image-jpg.webp",
                team2Logo: "https://pngdownload.io/wp-content/uploads/2023/12/AS-Roma-Logo-emblem-of-the-football-club-transparent-png-image-jpg.webp",
                  team1Name: "Juventus",
                  team2Name: "Roma",
                  matchDate: "28 April",
                  matchTime: "09:30",
                  category: "MEN",
                  tournament: "VTL 2024-25",
                  channel: "true sports 2",
                  bgColor: "#075B5E",
               },
               {
                team1Logo: "https://pngdownload.io/wp-content/uploads/2025/04/Bayer-Leverkusen-Logo-German-Football.webp",
                team2Logo: "https://pngdownload.io/wp-content/uploads/2025/05/Nottingham-Forest-Logo-English-Football.webp",
                  team1Name: "Bayer Leverkusen",
                  team2Name: "Nottingham Forest",
                  matchDate: "28 April",
                  matchTime: "09:30",
                  category: "MEN",
                  tournament: "VTL 2024-25",
                  channel: "true sports 2",
                  bgColor: "#242424",
               },
               {
                team1Logo: "https://pngdownload.io/wp-content/uploads/2025/05/Benfica-Logo-Portuguese-Football-Club-Emblem.webp",
                team2Logo: "https://pngdownload.io/wp-content/uploads/2025/04/Arsenal-FC-Logo-Premier-League-Football-Club.webp",
                  team1Name: "Benfica",
                  team2Name: "Arsenal",
                  matchDate: "28 April",
                  matchTime: "09:30",
                  category: "MEN",
                  tournament: "VTL 2024-25",
                  channel: "true sports 2",
                  bgColor: "#242424",
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

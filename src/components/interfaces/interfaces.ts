import { ShelfConfig } from "../../store/shelvesSlice";

export interface MatchItem {
   team1Logo: string;
   team2Logo: string;
   team1Name: string;
   team2Name: string;
   matchDate: string;
   matchTime: string;
   category: string;
   tournament: string;
   channel: string;
   bgColor: string;
}

export interface ShelfProps {
   item: MatchItem;
   config: { title: string };
   index: number;
   parentKey: string;
}

export interface ShelfItemProps {
   item: { title: string; img?: string };
   config: ShelfConfig;
   index: number;
   parentKey: string;
}

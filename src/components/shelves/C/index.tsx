import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

interface MatchItem {
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

interface ShelfProps {
   item: MatchItem;
   config: { title: string };
   index: number;
   parentKey: string;
}

const ShelfItemC: React.FC<ShelfProps> = ({
   item,
   config,
   index,
   parentKey,
}) => {
   const { ref, focused } = useFocusable({
      focusKey: `${parentKey}-item-${index}`,
      onFocus: () => {
         ref.current?.scrollIntoView({ behavior: "smooth", inline: "center" });
         console.log(`Focused: ${config.title}-item-${index}`);
      },
   });

   return (
      <div
         ref={ref}
         className={`focusable ${focused ? "focused" : ""}`}
         tabIndex={-1}
         style={{
            minWidth: "300px",
            height: "180px",
            background: item.bgColor,
            border: focused ? "4px solid white" : "4px solid transparent",
            borderRadius: "12px",
            color: "#fff",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            fontFamily: "sans-serif",
            flexShrink: 0,
         }}
      >
         <div style={{ fontSize: "14px", fontWeight: "bold" }}>{item.tournament}</div>
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               fontSize: "13px",
            }}
         >
            <div style={{ textAlign: "center" }}>
               <div style={{ fontSize: "24px" }}>{item.team1Logo}</div>
               <div>{item.team1Name}</div>
            </div>
            <div style={{ fontWeight: "bold" }}>VS</div>
            <div style={{ textAlign: "center" }}>
               <div style={{ fontSize: "24px" }}>{item.team2Logo}</div>
               <div>{item.team2Name}</div>
            </div>
         </div>
         <div style={{ fontSize: "12px", marginTop: "6px" }}>
            {item.matchDate} | {item.matchTime}
         </div>
         <div style={{ fontSize: "11px", opacity: 0.8 }}>{item.channel}</div>
      </div>
   );
};

export default ShelfItemC;

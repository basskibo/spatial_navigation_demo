import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { MovieItem } from "./ShelfTypeD";

interface Props {
  item: MovieItem;
  config: { title: string };
  index: number;
  parentKey: string;
}

const ShelfItemD: React.FC<Props> = ({ item, config, index, parentKey }) => {
  const { ref, focused } = useFocusable({
    focusKey: `${parentKey}-item-${index}`,
    onFocus: () => {
      ref.current?.scrollIntoView({ behavior: "smooth", inline: "center" });
    },
  });
  console.log(`Type D for ${config.title}`)
  return (
    <div
      ref={ref}
      className={`focusable ${focused ? "focused" : ""}`}
      tabIndex={-1}
      style={{
        width: "32vh",
        height: "48vh",
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "12px",
        position: "relative",
        margin: "0 8px",
        flexShrink: 0,
        boxShadow: focused
          ? "0 0 0 3px #00FFFF"
          : "0 0 4px rgba(0, 0, 0, 0.5)",
        transition: "transform 0.2s",
        transform: focused ? "scale(1.05)" : "scale(1)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "6px",
          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "bold",
          textShadow: "0 1px 2px rgba(0,0,0,0.5)",
        }}
      >
        {item.title}
        <br />
        <span style={{ fontWeight: "normal", fontSize: "12px" }}>
          {item.year}
        </span>
      </div>
    </div>
  );
};

export default ShelfItemD;

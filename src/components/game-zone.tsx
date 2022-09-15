import "./game-zone.scss";
import zero from "../icons/0";
import plus from "../icons/plus";

import React from "react";
import Plus from "../icons/plus";

interface GameZoneProps {
  data: any;
  
  onClick: any;
}

const GameZone: React.FC<GameZoneProps> = ({ data, onClick }) => (
  <div className="game-zone">
    {data.map((item: any, idx: any) => (
      <button
        onClick={() => onClick(idx)}
        disabled={item.disabled}
        key={idx}
        className="box"
      >
        {item.icon === "" ? "" : item.icon === "o" ? zero : Plus}
      </button>
    ))}
  </div>
);

export default GameZone;

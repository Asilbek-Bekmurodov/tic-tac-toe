import { O, Plus } from "../icons";
import "../assets/turn.scss";
import React from "react";

interface TurnProps {
  turn: string;
}

const Turn: React.FC<TurnProps> = ({ turn }) => {
  return (
    <div className="turn">
      <div className="turn_icons">
        <div>{O}</div>
        <div>{Plus}</div>
      </div>
      <div className="turn_dots">
        <div className={`turn_dots_dot ${turn === "o" && "active"}`}></div>
        <div className={`turn_dots_dot ${turn === "x" && "active"}`}> </div>
      </div>
    </div>
  );
};

export default Turn;

import { useState } from "react";
import { O, Plus } from "../icons";
import GameZone from "./game-zone";
import History from "./history";

export default function Tictac() {
  const [gameZone, setGameZone] = useState([
    { icon: "" },
    { icon: "" },
    { icon: O },
    { icon: "" },
    { icon: Plus },
    { icon: Plus },
    { icon: Plus },
    { icon: "" },
    { icon: "" },
  ]);

  return (
    <div className="container">
      <History />
      <GameZone data={gameZone} />
    </div>
  );
}

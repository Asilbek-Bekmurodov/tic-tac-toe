import { useEffect, useState } from "react";
import { O, Plus } from "../icons";
import GameZone from "./game-zone";
import History from "./history";
import Turn from "./turn";
import Winner from "./winner";
import "../assets/tic-tac.scss";
import HistoryCart from "./history-cart";

export default function Tictac() {
  const [turn, setTurn] = useState("x");
  const [winner, setWinner] = useState("o");

  const [gameZone, setGameZone] = useState([
    { icon: "", disabled: false },
    { icon: "", disabled: false },
    { icon: "", disabled: false },
    { icon: "", disabled: false },
    { icon: "", disabled: false },
    { icon: "", disabled: false },
    { icon: "", disabled: false },
    { icon: "", disabled: false },
    { icon: "", disabled: false },
  ]);

  const handleClick = (idx: number) => {
    let temp = [...gameZone];
    temp[idx].icon = turn;
    temp[idx].disabled = true;
    setGameZone(temp);
    localStorage.setItem("gameZone", JSON.stringify(temp));
    setTurn(turn === "o" ? "x" : "o");
  };

  return (
    <div className="container">
      <div className="container_nav">
        <Turn turn={turn} />
        {winner && <Winner icon={winner} />}
        <History />
      </div>
      <div className="container_content">
        <div className="none"></div>
        <GameZone data={gameZone} onClick={handleClick} />
        <div className="none"></div>
      </div>
    </div>
  );
}

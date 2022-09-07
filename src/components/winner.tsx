import { FC } from "react";
import "../assets/winner.scss";
import { Plus } from "../icons";
import { O } from "../icons";

interface WinnerProps {
  icon: "x" | "o";
}

const Winner: FC<WinnerProps> = ({ icon }) => {
  return (
    <div className="winnerBg">
      <div className="winnerBg_winner">
        <h1>winner</h1>
        <div className="icon">{icon === "x" ? Plus : O}</div>
      </div>
    </div>
  );
};

export default Winner;

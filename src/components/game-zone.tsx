import "./game-zone.scss";
import zero from "../icons/0";
import plus from "../icons/plus";

export default function GameZone() {
  return (
    <div className="game-zone">
      <div className="box">{zero}</div>
      <div className="box">{plus}</div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box">{zero}</div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
}

import React from "react";

interface HistoryCartProps {
  title: string;
}

const HistoryCart: React.FC<HistoryCartProps> = ({ title }) => (
  <div className="history-cart">
    <div className="history-child">{title}</div>
  </div>
);

export default HistoryCart;

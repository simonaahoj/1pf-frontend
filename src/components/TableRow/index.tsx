import React from "react";

import { Rate } from "../Types";
import "./TableRow.css";

export default function TableRow({
  shortName,
  country,
  name,
  amount,
  valBuy,
  valSell,
  valMid,
  currBuy,
  currSell,
  currMid,
  move,
  cnbMid,
}: Rate) {
  return (
    <tr>
      <td>{shortName}</td>
      <td>{country}</td>
      <td>{name}</td>
      <td className="right">{amount}</td>
      <td className="right">{valBuy.toFixed(2)}</td>
      <td className="right">{valSell.toFixed(2)}</td>
      <td className="right">{valMid.toFixed(3)}</td>
      <td className="right">{currBuy.toFixed(3)}</td>
      <td className="right">{currSell.toFixed(3)}</td>
      <td className="right">{currMid.toFixed(3)}</td>
      <td className="right">{move.toFixed(2)}</td>
      <td className="right">{cnbMid.toFixed(3)}</td>
    </tr>
  );
}

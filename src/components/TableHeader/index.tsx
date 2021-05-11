import React, { useState } from "react";
import { TableHeaderProps } from "../Types";
import { FaSortDown, FaSortUp } from "react-icons/fa";

import "./TableHeader.css";

export default function TableHeader({
  setParentNameOrder,
  setParentCurrencyOrder,
}: TableHeaderProps) {
  const ASC = "ascending"; //a-z
  const DESC = "descending"; //z-a
  const [nameOrder, setNameOrder] = useState(ASC);
  const [currencyOrder, setCurrencyOrder] = useState(ASC);

  function onCountryClick() {
    if (nameOrder === ASC) {
      setNameOrder(DESC);
      setParentNameOrder(DESC);
    } else {
      setNameOrder(ASC);
      setParentNameOrder(ASC);
    }
  }

  function onCurrencyClick() {
    if (currencyOrder === ASC) {
      setCurrencyOrder(DESC);
      setParentCurrencyOrder(DESC);
    } else {
      setCurrencyOrder(ASC);
      setParentCurrencyOrder(ASC);
    }
  }
  return (
    <thead>
      <tr>
        <th className="shortName">Short Name</th>
        <th className="country" onClick={onCountryClick}>
          Country {ASC === nameOrder ? <FaSortDown /> : <FaSortUp />}
        </th>
        <th className="name" onClick={onCurrencyClick}>
          Currency{ASC === currencyOrder ? <FaSortDown /> : <FaSortUp />}
        </th>
        <th className="amount">Quantity</th>
        <th className="valBuy">Val. Buy</th>
        <th className="valSell">Val. Sell</th>
        <th className="valMid">Val. Mid</th>
        <th className="currBuy">Curr. Buy</th>
        <th className="currSell">Curr. Sell</th>
        <th className="currMid">Curr. Mid</th>
        <th className="move">Change(%)</th>
        <th className="cnbMid">CNB-mid</th>
      </tr>
    </thead>
  );
}

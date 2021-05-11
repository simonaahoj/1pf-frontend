import React, { useState } from "react";

import Table from "react-bootstrap/Table";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import { RateProps } from "../Types";

export default function ExchangeRatesTable({ rates, filter }: RateProps) {
  const ASC = "ascending"; //a-z
  const DESC = "descending"; //z-a
  const [orderDirection, setOrderDirection] = useState(ASC);
  const [orderByColumn, setOrderByColumn] = useState("country");

  function countryOrderByChanged(orderDirection: string) {
    setOrderDirection(orderDirection);
    setOrderByColumn("country");
  }

  function currencyOrderByChanged(orderDirection: string) {
    setOrderDirection(orderDirection);
    setOrderByColumn("currency");
  }

  return (
    <Table striped bordered hover>
      <TableHeader
        setParentNameOrder={countryOrderByChanged}
        setParentCurrencyOrder={currencyOrderByChanged}
      />
      <tbody>
        {rates
          .sort((country1, country2) => {
            if (orderByColumn === "country") {
              if (orderDirection === DESC) {
                return country2.country.localeCompare(country1.country);
              } else {
                return country1.country.localeCompare(country2.country);
              }
            }

            if (orderByColumn === "currency") {
              if (orderDirection === DESC) {
                return country2.name.localeCompare(country1.name);
              } else {
                return country1.name.localeCompare(country2.name);
              }
            }

            return 0;
          })
          .filter(
            (rate) =>
              rate.country.toLowerCase().indexOf(filter.toLowerCase()) >= 0
          )
          .map((rate) => (
            <TableRow
              key={rate.shortName}
              shortName={rate.shortName}
              name={rate.name}
              country={rate.country}
              amount={rate.amount}
              valBuy={rate.valBuy}
              valSell={rate.valSell}
              valMid={rate.valMid}
              currBuy={rate.currBuy}
              currSell={rate.currSell}
              currMid={rate.currMid}
              move={rate.move}
              cnbMid={rate.cnbMid}
            />
          ))}
      </tbody>
    </Table>
  );
}

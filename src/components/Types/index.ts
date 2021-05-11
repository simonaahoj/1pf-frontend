export type Rate = {
    shortName: string,
    country: string,
    name: string,
    amount: number,
    valBuy: number,
    valSell: number,
    valMid: number,
    currBuy: number,
    currSell: number,
    currMid: number,
    move: number,
    cnbMid: number
}

export type RateProps = {
    rates: Rate[],
    filter: string
}

export type TableHeaderProps = {
    setParentNameOrder: (order: string) => void;
    setParentCurrencyOrder: (order: string) => void;
}

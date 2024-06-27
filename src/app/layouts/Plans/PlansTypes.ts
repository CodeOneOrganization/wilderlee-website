

export interface IBenefit {
  content: string
}
export interface ICard {
  title: string;
  time: {
    value: number,
    measure: string
  }
  price: {
    old: number,
    current: number
    installment: {
      value: number,
      amount: number
    }
  };
  benefits: IBenefit[],
  target: string;

}

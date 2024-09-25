export interface ISuscription {
  id: string;
  name: string;
  price: number;
  benefits: {
    vehicles: number;
    segure: string;
    time: number;
  };
}

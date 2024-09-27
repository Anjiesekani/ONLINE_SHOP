export interface Product {
  id: string;
  productName: string;
  description: string;
  image: string;
  details: Productdetails;
  ID: string;
}

export interface Productdetails {
  price: number;
  category: string;
}

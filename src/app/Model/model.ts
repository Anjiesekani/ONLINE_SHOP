export interface Product {
  id: number;
  productName: string;
  description: string;
  // price: number;
  image: File;
  details: Productdetails;
  ID: string;
}

export interface Productdetails {
  price: number;
  category: string;
}

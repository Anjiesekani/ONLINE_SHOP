export interface Product {
  id: string;
  productName: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export interface User {
  position: number;
  userName: string;
  nickname: string;
  password: string;
}

type Product = {
  title: string;
  price: number;
  description: string;
  brand: string;
  size: string;
  condition: string;
  fileNames: string[];
  category: string;
  type: string;
  username: string;
  productId: number;
  photoURLs: string[];
};

 export default  Product;
export type ProductsResponse = {
  products : Product[];
  totalProducts : number;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  /** Longer copy shown in the product detail modal. */
  details: string;
  suitableFor: string[];
  category?: string;
}

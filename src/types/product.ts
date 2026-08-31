export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  /** In-page or external link for the card action. Defaults to the contact section. */
  href?: string;
  category?: string;
}

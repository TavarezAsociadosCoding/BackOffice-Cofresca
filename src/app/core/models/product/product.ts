// Products
export interface Product {
  id?: number;
  title?: string;
  description?: string;
  type?: string;
  brand?: string;
  collection?: any[];
  category?: string;
  price?: number;
  sale?: boolean;
  discount?: number;
  stock?: number;
  new?: boolean;
  quantity?: number;
  tags?: any[];
  variants?: Variants[];
  images?: Images[];
}

// TODO:TERMINAR DE ARMAR LA LOGICA DE PRODUCTOS
export interface Products {
  id?: number;
  name?: string;
  image?: string;
  barCode?: string;
  prices?: number;
  stock?: number;
  quantity?: number;
  description?: string;
}

export interface Variants {
  variant_id?: number;
  id?: number;
  sku?: string;
  size?: string;
  color?: string;
  image_id?: number;
}

export interface Images {
  image_id?: number;
  id?: number;
  alt?: string;
  src?: string;
  variant_id?: any[];
}

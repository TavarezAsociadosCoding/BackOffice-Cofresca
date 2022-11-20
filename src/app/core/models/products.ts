// TODO:TERMINAR DE ARMAR LA LOGICA DE PRODUCTOS
export interface Products {
  id?: number;
  name?: string;
  image?: string;
  barCode: string;
  prices: number;
}

export interface ProductsEdit {
  id?: number;
  name?: string;
  image?: string;
  barCode?: string;
  prices?: number;
  stock?: number;
  quantity?: number;
  description?: string;
  categoryId?: number;
  type?: string;
}

export interface ProductsResult {
  message: Array<Products>;
}

//crear products

export interface CreateProductResult{
  isSucceded:boolean;
  errors:string;
  message:string;
}
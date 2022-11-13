import { Product } from '../product/product';
import { Products } from '../products';

// Order
export interface Order {
  shippingDetails?: any;
  product?: Product;
  orderId?: any;
  totalAmount?: any;
}

//TODO:ORDERN POST
export interface OrderPost {
  Id?: string;
  OrderDate?: string;
  TotalAmount?: number;
  CustomerId?: number;
  EmployeeId?: number;
  IsActive?: true;
  Status?: string;
  ShippingAddress?: string;
}

//TODO:ORDER GET
export interface Orders {
  id?: string;
  orderDate?: string;
  totalAmount?: number;
  companyName?: string;
  address?: string;
  isActive?: true;
  status?: string;
  userId?: string;
  isExpress?: string;
  shippingAddress?: string;
  ordersDetails?: orderDetails[];
}

export interface OrderInfos {
  nameCustomer: string;
  nameProduct: string;
  productType: string;
  productsID: number;
  totalProduct: number;
  totalProductCustomer: number;
  userId: string;
}

export interface TotalInfos {
  nameCustomer: string;
  nameProduct: string;
  productsID: number;
  totalProduct: number;
  totalQty: number;
  productType: string;
}

export interface OrdesList {
  orderInfo: Array<OrderInfos>;
  totalInfo: Array<TotalInfos>;
}

export interface Orders_success {
  id?: string;
  orderDate?: string;
  totalAmount?: number;
  customerId?: number;
  employeeId?: number;
  isActive?: true;
  status?: string;
  shippingAddress?: string;
  ordersDetails?: orderDetails[];
}
//ORDERDETAILS
export interface orderDetails {
  quantity?: number;
  amount?: number;
  unitPrice?: number;
  productsid?: number;
  ordersid?: number;
  products?: Products;
}
export interface ReOrders {
  id?: string;
  orderDate?: string;
  totalAmount?: number;
  customerId?: number;
  employeeId?: number;
  isActive?: true;
  status?: string;
  userId?: string;
  isExpress?: string;
  shippingAddress?: string;
  ordersDetails?: orderDetails[];
}

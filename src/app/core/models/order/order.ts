
import { Product } from "../product/product";
import { Products } from "../products";

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
  Id?: string;
  OrderDate?: string;
  TotalAmount?: number;
  CustomerId?: number;
  EmployeeId?: number;
  IsActive?: true;
  Status?: string;
  ShippingAddress?: string;
  ordersDetails?: orderDetails[];
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
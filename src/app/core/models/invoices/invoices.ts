import { Customer } from "../customer/customer";
import { Employee } from "../employee/employee";
import { Orders } from "../order/order";

export interface Invoices {
  id: string;
  orders: Orders;
  itbis: number;
  subTotal: number;
  total: number;
  createdDate: Date;
}

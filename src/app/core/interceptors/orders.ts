export interface Orders {
  ordersDetails: [
    {
      amount: number;
      id: number;
      quantity: number;
      unitPrice: number;
      products: {
        image: string;
        isActive: boolean;
        name: string;
        prices: number;
      };
    }
  ];
  customer: {
    firstName: string;
    id: number;
    identification: string;
    isActive: boolean;
    lastName: string;
    phone: string;
    typeDocument: string;
  };
  customerId: number;
  employee: {
    code: number;
    firstName: string;
    id: number;
    identification: string;
    isActive: boolean;
    lastName: string;
    phone: string;
    typeDocument: string;
  };
  employeeId: number;
  id: number;
  isActive: boolean;
  isExpress:boolean;
  orderDate: Date;
  shippingAddress: string;
  status: string;
  totalAmount: number;
}

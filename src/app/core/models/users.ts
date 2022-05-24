export interface UsersResult {
  message: Array<Users>;
  success: string;
}

export interface Users {
  profileId: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  identification: string;
  isActive: boolean;
  roles: string;
  createdDate: string;
}

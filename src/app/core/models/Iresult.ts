export interface LoginResult {
  username: string;
  role: string;
  userid: string;
  originalUserName: string;
  accesstoken: string;
  expiration: string;
  refreshToken: string;
  message: string;
  success: boolean;
}

export interface RegisterResult {
  message: string;
  success: string;
}

interface ProfileResult {}

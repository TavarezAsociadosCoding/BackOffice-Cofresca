export interface LoginResult {
  username: string;
  role: string;
  userid: string;
  originalUserName: string;
  accesstoken: string;
  expiration: string;
  refreshToken: string;
}

export interface RegisterResult {
  message: string;
  success: string;
}

interface ProfileResult {}

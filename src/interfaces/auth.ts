export interface LoginRequest {
  username: string;
  password: string;
}

export interface SignUpRequest extends LoginRequest {
  firstName: string;
  lastName: string;
  email: string;
  passwordConfirmation: string;
}

export interface RefreshRequest {
  refresh: string;
}

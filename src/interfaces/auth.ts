export interface LoginRequest {
  username: string;
  password: string;
}

export interface SignUpRequest extends LoginRequest {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password_confirmation: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  username: string;
  confirmPassword: string;
}
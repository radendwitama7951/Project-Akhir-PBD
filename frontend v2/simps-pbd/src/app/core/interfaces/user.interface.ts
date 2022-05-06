export interface UserInterface {
  user_id?: number;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  avatar: string;
  last_login?: string;
}

export interface UserCreateUpdateInterface {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

import { User } from '../../model/user.model';

export interface AuthState {
  // is a user authenticated?
  isAuthenticated: boolean;

  // if authenticated, there should be a user object
  user: User | null;

  // error message
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};


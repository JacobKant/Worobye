import { AuthState } from './reducer/auth.reducer';
import { ActionReducerMap, State } from '@ngrx/store';

export interface AppState {
  authState: AuthState;
}

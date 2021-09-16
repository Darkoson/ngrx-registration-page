import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.action";
import { AuthStateInterface } from "../types/auth-state.interface";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: false,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })) ,

  on(registerSuccessAction,
    (state, action): AuthStateInterface =>({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),

 on(registerFailureAction, 
    (state, action):AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    }))
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}

import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { registerAction } from "./action";
import { AuthStateInterface } from "../types/auth-state.interface";

const initialState: AuthStateInterface = {
    isSubmitting: false
}

const authReducer = createReducer(
    initialState,
    on(
        registerAction, 
        (state:AuthStateInterface) =>({...state, isSubmitting:true})
    )
)

export function reducers(state: AuthStateInterface, action: Action){
    return authReducer(state, action);
}
import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/types/backend-error.interface";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { RegisterRequestInterface } from "../../types/register-request.interface";
import { ActionType } from "../action.type";

export const registerAction = createAction(
    ActionType.REGISTER, 
    props<{request: RegisterRequestInterface }>()
) ;

export const registerSuccessAction = createAction(
    ActionType.REGISTER_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(
    ActionType.REGISTER_FAILURE ,
    props<{errors: BackendErrorsInterface}>()
)
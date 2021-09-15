import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/register-request.interface";
import { ActionType } from "./action.type";

export const registerAction = createAction(
    ActionType.REGISTER, props<{request: RegisterRequestInterface }>()
) ;
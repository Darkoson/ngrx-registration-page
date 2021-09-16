import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BackendErrorMessagesModule } from "../shared/modules/backend-errors-messages/backend-error-messages.module";
import { PersistanceService } from "../shared/services/persistance.service";

import { RegisterComponent } from "./components/register/register.component";
import { AuthService } from "./services/auth.service";
import { RegisterEffect } from "./store/effects/register.effect";
import { reducers } from "./store/reducers";


const routes: Routes = [
    {
        path:'register', component: RegisterComponent
    }
]

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        BackendErrorMessagesModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([RegisterEffect])
    ],
    declarations:[RegisterComponent],
    providers:[AuthService, PersistanceService]
})
export class AuthModule{

}
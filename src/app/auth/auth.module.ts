import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";

import { RegisterComponent } from "./components/register/register.component";
import { authService } from "./services/auth.service";
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
        RouterModule.forChild(routes),
        StoreModule.forFeature('auth', reducers)
    ],
    declarations:[RegisterComponent],
    providers:[authService]
})
export class AuthModule{

}
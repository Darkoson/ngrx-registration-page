import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { RegisterRequestInterface } from "../types/register-request.interface";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "../types/auth-response.interface";

@Injectable({providedIn: 'root'})
export class authService {
    constructor(private http: HttpClient) { }

    register(data: RegisterRequestInterface) : Observable<CurrentUserInterface>{
        const url = environment.apiUrl + '/users';
        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe( map((response:AuthResponseInterface) => response.user))
    }
    
}
import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "src/app/shared/types/backend-error.interface";

@Component({
    selector: 'app-backend-error-messages',
    templateUrl: './backend-error-messages.component.html',
    styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit{
    @Input('backendErrors')
    backendErrorsProps: BackendErrorsInterface

    errorMessages: string[]


    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrorsProps).map(
            (name:string) => {
                const message = this.backendErrorsProps[name].join(' ')
                return `${name} ${message}`
            }
        )
    }
}
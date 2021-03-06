import { Injectable } from "@angular/core";

@Injectable()
export class PersistanceService{

    set(key: string, data:any): void{
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch (error) {
            console.error("Error while saving to local storage", error);
            
        }
    }

    get(key: string): any{
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (error) {
            console.error("Error while getting data from local storage", error);
            return null
        }
    }
}
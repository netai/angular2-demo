import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
    
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    
    private WSURL_USERS: string = 'https://angular-demo-netai.c9users.io/assets/demo_json/users.json';
    
    constructor (private http: Http) {}
    
    public getAllUsers(): Observable<any>  {
        return this.http.get(this.WSURL_USERS)
            .map((response: Response) => {
                try {
                    return response.json();
                } catch (e) {
                    console.log(e);
                }
            })
            .catch((serverError: Response) => {
                return Observable.throw(`${serverError}`)
            })
    }
    
}
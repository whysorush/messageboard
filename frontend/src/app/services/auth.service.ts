import { ThisReceiver } from '@angular/compiler';
import { Injectable} from '@angular/core';
import { Http , Headers , RequestOptions} from '@angular/http' ;
import{ Router } from '@angular/router'


@Injectable()

export class AuthService{
    BASE_URL = 'http://localhost:2000/auth/'; 
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';
    constructor(private http:Http , private router:Router){}

    get name(){
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    get tokenHeader(){
        var header = new Headers({'Authorization':'Bearer ' + localStorage.getItem(this.TOKEN_KEY)});
        return new RequestOptions({headers : header});
    }
    login(loginData:any){
        this.http.post(this.BASE_URL + 'login', loginData).subscribe(res => {
            this.authenticate(res);
        });
    }
    register (user:any){
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + 'register', user).subscribe(res => {
            this.authenticate(res);
        })
    }
    logout(){
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);

    }
    authenticate(res:any){
        var authResponse = res.json();
        if(!authResponse.token){
            return;
        }
        // console.log(res.json())
        localStorage.setItem(this.TOKEN_KEY,authResponse.token)
        localStorage.setItem(this.NAME_KEY,authResponse.firstName)
        this.router.navigate(['/']);
    }
}
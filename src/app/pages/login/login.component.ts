import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.template.html'
})

export class LoginComponent{
    public login: string;
    public password: string;
    private _login = 'admin';
    private _password = '123';

    constructor(private route: Router){}

    public logined(): void{
        if(this.login === this._login && this.password === this._password){
            localStorage.setItem('admin', 'admin');
            this.route.navigateByUrl('/');
        }
    }
}
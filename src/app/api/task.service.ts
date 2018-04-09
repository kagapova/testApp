import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GetTask} from '../models/get-task';
import {CreateTask} from '../models/create-task';
import {OneTask} from '../models/one-task';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class TaskService{
    private  base_url = 'https://uxcandy.com/~shapoval/test-task-backend/';
    private  create_url = 'create';
    private edit_url = 'edit/';

    constructor(private http: HttpClient){ }

    public get (data?: GetTask) {
        let params = {};
        for(let parametr in data ){
            params[parametr] = data[parametr];
        }
        return this.http.get(this.base_url, {params: params});
    }

    public create (data: CreateTask) {
        const headers = new HttpHeaders();
        const form = new FormData();
        form.append('username', data.username);
        form.append('email', data.email);
        form.append('text', data.text);
        form.append('image', data.image);
        headers.append('Content-Type', "");
        return this.http.post(this.base_url + this.create_url, form,
            { params: {developer: 'KGustova'}});
    }

    public edit (data: OneTask){
        const headers = new HttpHeaders();
        headers.append('Content-Type', "");
        let form = new FormData();
form.append('status', data.status.toString());
form.append('text', data.text);
form.append('token', 'beejee');
let query = '';
        for(const pair of form['entries']()) {
            console.log(pair);
            query += encodeURIComponent(pair[0]) + '=' + encodeURIComponent(pair[1]) + '&';
        }
console.log(query, query.substr(0, query.length - 2))
        form.append('signature', Md5.hashStr(query.substr(0, query.length - 2)).toString());
        return this.http.post(this.base_url + this.edit_url + data.id, form,
            { params: {developer: 'KGustova'}});
    }
}
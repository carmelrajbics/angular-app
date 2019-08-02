import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from './app.usermodel';

@Injectable()
export class UsersService {
    // url = '/api/userDataFromDb'
    url='https://carmel-db.firebaseio.com/userdata.json'

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.url);
    }

    createUser(userModel: UserModel): Observable<UserModel> {
        let httpHeader = new HttpHeaders().set('Content-type', 'application/json');
        let options = {
            headers: httpHeader
        };
        return this.http.post<UserModel>(this.url, userModel, options);
    }
}
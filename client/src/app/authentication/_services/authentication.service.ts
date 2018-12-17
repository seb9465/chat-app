import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { config } from '../../app.module';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    public constructor (private http: HttpClient) { }

    public login (username: string, password: string) {
        return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    public logout(): void {
        localStorage.removeItem('currentUser');
    }
}

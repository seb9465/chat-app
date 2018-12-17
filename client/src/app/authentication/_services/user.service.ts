import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models/user";
import { config } from "../../app.module";


@Injectable({ providedIn: 'root' })
export class UserService {

    public constructor(private http: HttpClient,) { }

    public getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }
}
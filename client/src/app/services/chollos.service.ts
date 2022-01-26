import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chollo } from '../models/Chollo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChollosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getChollos() {
    return this.http.get(`${this.API_URI}/chollos`);
  }

  getChollo(id: string|number|undefined) {
    return this.http.get(`${this.API_URI}/chollos/${id}`);
  }

  deleteChollo(id: string) {
    return this.http.delete(`${this.API_URI}/chollos/${id}`);
  }

  saveChollo(chollo: Chollo) {
    return this.http.post(`${this.API_URI}/chollos`, chollo);
  }

  updateChollo(id: string|number|undefined, updateChollo: Chollo): Observable<Chollo> {
    return this.http.put(`${this.API_URI}/chollos/${id}`, updateChollo);
  }

}

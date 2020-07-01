import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from './model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getClients(){
    return this.http.get<IClient[]>(this.REST_API_SERVER + "/api/clients/all")
  }
}

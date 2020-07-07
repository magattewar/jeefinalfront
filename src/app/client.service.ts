import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient, Client } from './model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getClients(){
    return this.http.get<IClient[]>(this.REST_API_SERVER + "/api/clients/all")
  }

  public addClient(data){
    // var client = new Client(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.post<IClient[]>(this.REST_API_SERVER + "/api/clients/add", data)
  }
}

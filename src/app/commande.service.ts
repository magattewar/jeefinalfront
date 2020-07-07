import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICommande } from './model/commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getCommandes(){
    return this.http.get<ICommande[]>(this.REST_API_SERVER + "/api/commandes/all")
  }
}

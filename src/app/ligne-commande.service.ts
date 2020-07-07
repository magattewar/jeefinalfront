import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILigneCommande } from './model/ligne-commande.model';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getClients(){
    return this.http.get<ILigneCommande[]>(this.REST_API_SERVER + "/api/lignecommandes/all")
  }
}

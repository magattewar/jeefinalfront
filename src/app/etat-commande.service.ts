import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEtatCommande } from './model/etat-commande.model';

@Injectable({
  providedIn: 'root'
})
export class EtatCommandeService {

  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getEtatCommandes(){
    return this.http.get<IEtatCommande[]>(this.REST_API_SERVER + "/api/etatcommandes/all")
  }
}

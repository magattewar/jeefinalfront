import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduit } from './model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getClients(){
    return this.http.get<IProduit[]>(this.REST_API_SERVER + "/api/produits/all")
  }
}

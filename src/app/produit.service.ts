import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduit } from './model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getProduits(){
    return this.http.get<IProduit[]>(this.REST_API_SERVER + "/api/produits/all")
  }
  
  public getProduit(id){
    return this.http.get<IProduit>(this.REST_API_SERVER + "/api/produits/"+id)
  }

  public deleteProduit(id){
    return this.http.delete<IProduit[]>(this.REST_API_SERVER + "/api/produits/"+id)
  }

  public addProduit(data){
    // var Produit = new Produit(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.post<IProduit[]>(this.REST_API_SERVER + "/api/produits/add", data)
  }

  public editProduit(data){
    // var Produit = new Produit(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.put<IProduit[]>(this.REST_API_SERVER + "/api/produits", data)
  }
}

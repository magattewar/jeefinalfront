import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILigneCommande } from './model/ligne-commande.model';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getCommandes(){
    return this.http.get<ILigneCommande[]>(this.REST_API_SERVER + "/api/lignecommandes/all")
  }
  
  public getCommande(id){
    return this.http.get<ILigneCommande>(this.REST_API_SERVER + "/api/lignecommandes/"+id)
  }

  public deleteCommande(id){
    return this.http.delete<ILigneCommande[]>(this.REST_API_SERVER + "/api/lignecommandes/"+id)
  }

  public addCommande(data){
    // var Commande = new Commande(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.post<ILigneCommande[]>(this.REST_API_SERVER + "/api/lignecommandes/add", data)
  }

  public editCommande(data){
    // var Commande = new Commande(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.put<ILigneCommande[]>(this.REST_API_SERVER + "/api/lignecommandes", data)
  }
}

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

  
  public getEtatCommande(id){
    return this.http.get<IEtatCommande>(this.REST_API_SERVER + "/api/etateommandes/"+id)
  }

  public deleteEtatCommande(id){
    return this.http.delete<IEtatCommande[]>(this.REST_API_SERVER + "/api/etateommandes/"+id)
  }

  public addEtatCommande(data){
    // var EtatCommande = new EtatCommande(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.post<IEtatCommande[]>(this.REST_API_SERVER + "/api/etateommandes/add", data)
  }

  public editEtatCommande(data){
    // var EtatCommande = new EtatCommande(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.put<IEtatCommande[]>(this.REST_API_SERVER + "/api/etatcommandes", data)
  }
}

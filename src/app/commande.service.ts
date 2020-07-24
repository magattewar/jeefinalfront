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

  public validerCommande(id){
    return this.http.get<ICommande[]>(this.REST_API_SERVER + "/api/commandes/valider/"+id)
  }

  public livrerCommande(id){
    return this.http.get<ICommande[]>(this.REST_API_SERVER + "/api/commandes/livrer/"+id)
  }
  
  public getCommande(id){
    return this.http.get<ICommande>(this.REST_API_SERVER + "/api/commandes/"+id)
  }

  public deleteCommande(id){
    return this.http.delete<ICommande[]>(this.REST_API_SERVER + "/api/commandes/"+id)
  }

  public addCommande(data){
    // var Commande = new Commande(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.post<ICommande[]>(this.REST_API_SERVER + "/api/commandes/add", data)
  }

  public editCommande(data){
    // var Commande = new Commande(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.put<ICommande[]>(this.REST_API_SERVER + "/api/commandes", data)
  }

  public annuler(data){
    return this.http.post<ICommande[]>(this.REST_API_SERVER + "/api/commandes/annuler", data)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPaiement } from './model/paiement.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getPaiements(){
    return this.http.get<IPaiement[]>(this.REST_API_SERVER + "/api/paiements/all")
  }
  
  public getPaiement(id){
    return this.http.get<IPaiement>(this.REST_API_SERVER + "/api/paiements/"+id)
  }

  public deletePaiement(id){
    return this.http.delete<IPaiement[]>(this.REST_API_SERVER + "/api/paiements/"+id)
  }

  public addPaiement(data){
    // var Paiement = new Paiement(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.post<IPaiement[]>(this.REST_API_SERVER + "/api/paiements/add", data)
  }

  public editPaiement(data){
    // var Paiement = new Paiement(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.put<IPaiement[]>(this.REST_API_SERVER + "/api/paiements", data)
  }
}

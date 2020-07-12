import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFacture } from './model/facture.model';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getFactures(){
    return this.http.get<IFacture[]>(this.REST_API_SERVER + "/api/factures/all")
  }
  
  public getFacture(id){
    return this.http.get<IFacture>(this.REST_API_SERVER + "/api/factures/"+id)
  }

  public deleteFacture(id){
    return this.http.delete<IFacture[]>(this.REST_API_SERVER + "/api/factures/"+id)
  }

  public addFacture(data){
    // var Facture = new Facture(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.post<IFacture[]>(this.REST_API_SERVER + "/api/factures/add", data)
  }

  public editFacture(data){
    // var Facture = new Facture(null, data.nom, data.prenom, data.adresse, data.telephone, data.email, [])
    return this.http.put<IFacture[]>(this.REST_API_SERVER + "/api/factures", data)
  }
}

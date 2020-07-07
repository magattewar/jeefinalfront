import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPaiement } from './model/paiement.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getClients(){
    return this.http.get<IPaiement[]>(this.REST_API_SERVER + "/api/paiements/all")
  }
}

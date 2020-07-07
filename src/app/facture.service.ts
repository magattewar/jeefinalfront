import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFacture } from './model/facture.model';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public getClients(){
    return this.http.get<IFacture[]>(this.REST_API_SERVER + "/api/factures/all")
  }
}

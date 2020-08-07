import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client, IClient } from '../model/client.model';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  editForm: any
  idclient: any
  client: IClient

  constructor(private router: Router, protected clientService: ClientService) { 
    this.editForm = {
      id: '',
      nom: '',
      prenom: '',
      adresse: '',
      telephone: '',
      email: '',
    };

    
  }

  updateForm(client: IClient): void {
    this.editForm.id = client.id
    this.editForm.nom = client.nom
    this.editForm.prenom = client.prenom
    this.editForm.adresse = client.adresse
    this.editForm.telephone = client.telephone
    this.editForm.email = client.email
  }

  ngOnInit(): void {
    // this.idclient = localStorage.getItem('clientupdate')
    // console.log(this.client)  
    this.clientService.getClient(localStorage.getItem("clientupdate")).subscribe(
      (res) => {
        // console.log(res);
        // this.client = res;
        // this.updateForm(res)
        this.editForm = res
      },
      (err) => {
        console.log(err);
      }
    );
  }

  save(){
    this.clientService.editClient(this.editForm)
    .subscribe(res => {
      this.router.navigate(['client']);
      
    },
    err => {
      console.log(err);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IClient, Client } from '../model/client.model';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

  editForm: any

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

  ngOnInit(): void {
  }

  

  private createFromForm(): IClient {
    return {
      ...new Client(),
      id: this.editForm.get(['id'])!.value,
      nom: this.editForm.get(['nom'])!.value,
      prenom: this.editForm.get(['prenom'])!.value,
      adresse: this.editForm.get(['adresse'])!.value,
      telephone: this.editForm.get(['telephone'])!.value,
      email: this.editForm.get(['email'])!.value,
    };
  }

  previousState(){

  }

  save(){
    // console.log(this.editForm.nom);
    this.clientService.addClient(this.editForm)
    .subscribe(res => {
      
    },
    err => {
      console.log(err);
    });
  }


}

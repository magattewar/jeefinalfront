import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  editForm: any
  client: any

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
    this.client = localStorage.getItem('clientupdate')
    console.log(this.client.nom)    
  }

  save(){

  }

}

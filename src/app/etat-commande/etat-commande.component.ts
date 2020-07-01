import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etat-commande',
  templateUrl: './etat-commande.component.html',
  styleUrls: ['./etat-commande.component.css']
})
export class EtatCommandeComponent implements OnInit {

  constructor(private router: Router) {
    this.checkAuth();
  }

  checkAuth() {
    if (localStorage.getItem('authorities') != 'ROLE_ADMIN')
      this.router.navigate(['accessdenied']);
  }

  ngOnInit(): void {
  }

}

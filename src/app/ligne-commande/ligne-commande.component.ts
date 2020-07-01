import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ligne-commande',
  templateUrl: './ligne-commande.component.html',
  styleUrls: ['./ligne-commande.component.css']
})
export class LigneCommandeComponent implements OnInit {

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

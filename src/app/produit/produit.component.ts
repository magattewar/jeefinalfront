import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { IProduit } from '../model/produit.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
produits?: IProduit[]

  constructor(private router: Router, protected produitService: ProduitService) {
    this.checkAuth();
    this.loadAll()
  }

  checkAuth() {
    if (localStorage.getItem('authorities') != 'ROLE_ADMIN')
      this.router.navigate(['accessdenied']);
  }

  loadAll() {
    this.produitService.getProduits().subscribe(
      (res) => {
        console.log(res);
        this.produits = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }


  delete(produit: IProduit): void {
    this.produitService.deleteProduit(produit.id).subscribe(
      (res) => {
        console.log(res);
        this.produits = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(produit: IProduit){
    localStorage.setItem("updateproduit", produit.id+"")

    this.router.navigate(['updateproduit']);
  }

}

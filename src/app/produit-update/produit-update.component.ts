import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-update',
  templateUrl: './produit-update.component.html',
  styleUrls: ['./produit-update.component.css'],
})
export class ProduitUpdateComponent implements OnInit {
  editForm: any;

  constructor(
    private router: Router,
    protected produitService: ProduitService
  ) {
    this.editForm = {
      id: '',
      reference: '',
      quantite: '',
      prixNormal: '',
      prixMinimum: '',
    };
  }

  ngOnInit(): void {
    this.produitService
      .getProduit(localStorage.getItem('updateproduit'))
      .subscribe(
        (res) => {
          console.log(res);
          this.editForm = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  save() {
    // console.log(this.editForm.nom);
    if (this.editForm.prixNormal >= this.editForm.prixMinimum)
      this.produitService.addProduit(this.editForm).subscribe(
        (res) => {
          this.router.navigate(['produit']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}

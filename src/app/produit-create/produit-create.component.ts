import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css'],
})
export class ProduitCreateComponent implements OnInit {
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

  ngOnInit(): void {}

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

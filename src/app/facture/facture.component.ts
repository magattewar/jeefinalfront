import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactureService } from '../facture.service';
import { IFacture } from '../model/facture.model';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
})
export class FactureComponent implements OnInit {
  factures: IFacture[] = [];

  constructor(
    private router: Router,
    protected factureService: FactureService
  ) {
    this.checkAuth();
  }

  checkAuth() {
    if (localStorage.getItem('authorities') != 'ROLE_ADMIN')
      this.router.navigate(['accessdenied']);
  }

  ngOnInit(): void {
    this.factureService.getFactures().subscribe(
      (res) => {
        this.factures = res;
        res.forEach((facture) => {
          let montant = 0;
          console.log(facture.paiements);
          
          for (let i = 0; i < facture.paiements.length; i++) {
            montant = montant + facture.paiements[i].montant;
          }

          if (montant >= facture.ttc) {
            this.factures[this.factures.indexOf(facture)].paye = 'oui';
            this.factures[this.factures.indexOf(facture)].restant = facture.ttc - montant;

          } else {
            this.factures[this.factures.indexOf(facture)].paye = 'non';
            this.factures[this.factures.indexOf(facture)].restant = facture.ttc - montant;
          }
        });
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  imprimerFacture(facture) {
    var byteCharacters = atob(facture.document);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var file = new Blob([byteArray], { type: 'application/pdf;base64' });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  }

  delete(facture) {}
}

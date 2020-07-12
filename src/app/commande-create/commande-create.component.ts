import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { IClient } from '../model/client.model';
import { IEtatCommande } from '../model/etat-commande.model';
import { ILigneCommande } from '../model/ligne-commande.model';
import { IProduit } from '../model/produit.model';
import { ProduitService } from '../produit.service';
import { ClientService } from '../client.service';
import { formatDate } from '@angular/common';
import { ICommande } from '../model/commande.model';
import { EtatCommandeService } from '../etat-commande.service';

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css'],
})
export class CommandeCreateComponent implements OnInit {
  editForm: any;
  selectlignecommande: any;
  nombre: 0;
  selectclient: any = 0;

  // factures: IFacture[] = [];
  etats: IEtatCommande[] = [];
  clients: IClient[] = [];
  produits: IProduit[] = [];
  ligneCommande: ILigneCommande[] = [];
  commande: any;
  client: IClient;

  constructor(
    private router: Router,
    protected commandeService: CommandeService,
    protected produitService: ProduitService,
    protected clientService: ClientService,
    protected etatCommandeService: EtatCommandeService
  ) {
    this.editForm = {
      id: '',
      client: null,
      date: '',
      facture: null,
      etat: null,
      lignescommandes: null,
    };
  }

  ngOnInit(): void {
    this.ligneCommande = [];

    this.produitService.getProduits().subscribe(
      (res) => {
        this.produits = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.clientService.getClients().subscribe(
      (res) => {
        this.clients = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.etatCommandeService.getEtatCommandes().subscribe(
      (res) => {
        this.etats = res;
      },
      (err) => {
        console.log(err);
      }
    );

    this.selectlignecommande = 0;
  }

  save() {
    this.clients.forEach((clientss) => {
      if (clientss.id == this.selectclient) {
        this.client = clientss;
      }
    });

    this.ligneCommande.forEach((ligne) => {});

    // this.commande = {
    //   id: '',
    //   client: this.client,
    //   date: formatDate(new Date(), 'MM/dd/yyyy', 'en'),
    //   facture: null,
    //   etat: this.etats[0],
    //   lignescommandes: this.ligneCommande,
    // };
    this.editForm.client = this.client
    this.editForm.date = formatDate(new Date(), 'MM/dd/yyyy', 'en')
    this.editForm.lignescommandes = this.ligneCommande
    this.editForm.etat = this.etats[0]


    console.log(this.editForm);
    // this.commandeService.addCommande(this.commande)
    this.commandeService.addCommande(this.editForm).subscribe(
      (res) => {
        console.log('resultat');

        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

    // this.router.navigate(['commande']);
  }

  addLigneCommande() {
    // console.log(this.selectlignecommande);
    if(this.nombre > 0 )
      this.produits.forEach((produit) => {
        if (produit.id == this.selectlignecommande) {
          this.ligneCommande.push({
            commande: {},
            date: formatDate(new Date(), 'MM/dd/yyyy', 'en'),
            produit: produit,
            quantite: this.nombre,
          });
        }

        console.log(this.ligneCommande);

        this.nombre = 0;
        this.selectlignecommande = 0;
      });
  }
}

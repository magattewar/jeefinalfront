import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientComponent } from './client/client.component';
import { ProduitComponent } from './produit/produit.component';
import { PaiementComponent } from './paiement/paiement.component';
import { FactureComponent } from './facture/facture.component';
import { CommandeComponent } from './commande/commande.component';
import { LigneCommandeComponent } from './ligne-commande/ligne-commande.component';
import { EtatCommandeComponent } from './etat-commande/etat-commande.component';
import { ClientNewComponent } from './client-new/client-new.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { CommandeCreateComponent } from './commande-create/commande-create.component';
import { ProduitCreateComponent } from './produit-create/produit-create.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'client',  component: ClientComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'facture', component: FactureComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'ligne-commande', component: LigneCommandeComponent },
  { path: 'etat-commande', component: EtatCommandeComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'newcommande', component: CommandeCreateComponent },
  { path: 'newclient', component: ClientNewComponent },
  { path: 'newproduit', component: ProduitCreateComponent },
  { path: 'editclient', component: ClientUpdateComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'accessdenied', component: AccessDeniedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

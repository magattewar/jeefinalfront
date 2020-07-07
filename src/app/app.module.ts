import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientComponent } from './client/client.component';
import { ProduitComponent } from './produit/produit.component';
import { PaiementComponent } from './paiement/paiement.component';
import { FactureComponent } from './facture/facture.component';
import { CommandeComponent } from './commande/commande.component';
import { LigneCommandeComponent } from './ligne-commande/ligne-commande.component';
import { EtatCommandeComponent } from './etat-commande/etat-commande.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientNewComponent } from './client-new/client-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
    AccueilComponent,
    ClientComponent,
    ProduitComponent,
    PaiementComponent,
    FactureComponent,
    CommandeComponent,
    LigneCommandeComponent,
    EtatCommandeComponent,
    ClientUpdateComponent,
    ClientNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

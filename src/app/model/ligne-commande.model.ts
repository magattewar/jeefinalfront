import { IProduit } from './produit.model';
import { ICommande } from './commande.model';


export interface ILigneCommande {
  id?: number;
  date?: string;
  quantite?: number;
  produit?: IProduit;
  commande?: ICommande;
}

export class LigneCommande implements ILigneCommande {
  constructor(public id?: number, public date?: string, public quantite?: number, public produit?: IProduit, public commande?: ICommande) {}
}

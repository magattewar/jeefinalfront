import { ICommande } from './commande.model';


export interface IFacture {
  id?: number;
  date?: string;
  commande?: ICommande;
}

export class Facture implements IFacture {
  constructor(public id?: number, public date?: string, public commande?: ICommande) {}
}

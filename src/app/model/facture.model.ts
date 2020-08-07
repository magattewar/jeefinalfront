import { ICommande } from './commande.model';


export interface IFacture {
  id?: number;
  date?: string;
  documentContentType?: string;
  document?: any;
  paiements?: any
  paye?: any
  total?: number,
  restant?: number,
  tva?: number,
  ttc?: number,
  commande?: ICommande;
}

export class Facture implements IFacture {
  constructor(
    public id?: number,
    public date?: string,
    public documentContentType?: string,
    public document?: any,
    public commande?: ICommande
  ) {
    documentContentType = 'pdf'
  }
}